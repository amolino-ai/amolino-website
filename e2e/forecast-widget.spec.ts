/**
 * Screenshot and layout tests for the Forecast widget at phone, tablet and desktop widths.
 * Numbers and text come from the same content files the widget uses, so editing them doesn't break tests.
 * Update the baselines after an intended visual change with: npm run test:e2e -- --update-snapshots
 */
import { expect, test, type Locator, type Page } from '@playwright/test'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import {
  FORECAST_CHART_LABEL_DESCRIPTIONS,
  FORECAST_CHART_LABELS,
  ForecastChartKey,
} from '../src/lib/demo-data/app-types.generated'
import { getDemoValues } from '../src/lib/demo-data/demo-values'
import { getForecastChartCopy } from '../src/lib/demo-data/forecast-chart-copy'
import { formatCurrencyCompact } from '../src/lib/demo-data/format'
import { getSampleCompany } from '../src/lib/demo-data/sample-company'

const ARTICLE_PATH = '/help/pages/dashboard/forecast/understanding-the-forecast-chart'
/** The app screenshot the widget is modelled on, shown next to it in the article. */
const APP_SCREENSHOT = 'public/images/help/dashboard/forecast/forecast-chart.jpg'

/** Widths either side of the layout switch (Tailwind's `sm`, 640px) and a typical desktop. */
const VIEWPORTS = {
  phone: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 900 },
} as const

async function loadExpectations() {
  const [company, copy] = await Promise.all([getSampleCompany(), getForecastChartCopy()])
  return { copy, values: getDemoValues(company) }
}

/** The widget card: the element that contains the visible chart. */
function getWidget(page: Page, chartLabel: string) {
  return page.locator('.not-prose').filter({ has: page.getByRole('group', { name: chartLabel }) })
}

/** How far the widget sticks out past the right edge of the screen, or its content past its own edge. */
async function getHorizontalOverflow(widget: Locator): Promise<number> {
  return widget.evaluate((element) => {
    const pastScreen = element.getBoundingClientRect().right - document.documentElement.clientWidth
    const pastWidget = element.scrollWidth - element.clientWidth
    return Math.max(pastScreen, pastWidget)
  })
}

for (const [name, viewport] of Object.entries(VIEWPORTS)) {
  test.describe(`at ${name} width (${viewport.width}px)`, () => {
    test.use({ viewport, hasTouch: name === 'phone' })

    test('lays out without overflow and matches the baseline', async ({ page }) => {
      const { copy, values } = await loadExpectations()
      await page.goto(ARTICLE_PATH)
      const widget = getWidget(page, copy.chartLabel)

      await expect(widget).toBeVisible()
      await expect(widget).toContainText(formatCurrencyCompact(values['forecast.total']))
      await expect(widget.getByRole('group', { name: copy.chartLabel }).filter({ visible: true })).toHaveCount(1)
      expect(await getHorizontalOverflow(widget)).toBeLessThanOrEqual(0)

      await expect(widget).toHaveScreenshot(`forecast-widget-${name}.png`)
    })
  })
}

test.describe('interaction', () => {
  test('desktop: Worst case highlights the bars it includes', async ({ page }) => {
    const { copy } = await loadExpectations()
    await page.setViewportSize(VIEWPORTS.desktop)
    await page.goto(ARTICLE_PATH)
    const widget = getWidget(page, copy.chartLabel)

    const worstCase = widget.getByRole('button', { name: /Worst case/ }).first()
    await worstCase.click()
    await expect(worstCase).toHaveAttribute('aria-pressed', 'true')
    await expect(widget).toHaveScreenshot('forecast-widget-desktop-worst-case.png')

    await worstCase.click()
    await expect(worstCase).toHaveAttribute('aria-pressed', 'false')
  })

  test('phone: tapping Accelerator shows where it starts and ends', async ({ browser }) => {
    const { copy, values } = await loadExpectations()
    const context = await browser.newContext({ viewport: VIEWPORTS.phone, hasTouch: true })
    const page = await context.newPage()
    await page.goto(ARTICLE_PATH)
    const widget = getWidget(page, copy.chartLabel)

    const details = widget.locator('[aria-live="polite"]').filter({ visible: true })
    await expect(details).toContainText(copy.hintPhone)

    const accelerator = widget.getByRole('button', { name: /^Accelerator:/ }).filter({ visible: true })
    await accelerator.tap()
    await expect(accelerator).toHaveAttribute('aria-pressed', 'true')
    await expect(details).toContainText(formatCurrencyCompact(values['bars.accelerator.base']))
    await expect(details).toContainText(formatCurrencyCompact(values['bars.accelerator.peak']))
    await expect(widget).toHaveScreenshot('forecast-widget-phone-accelerator.png')
    await context.close()
  })
})

test.describe('accessibility', () => {
  const accelerator = FORECAST_CHART_LABELS[ForecastChartKey.ACCELERATOR]

  test('screen readers get the chart as a table', async ({ page }) => {
    const { copy, values } = await loadExpectations()
    await page.goto(ARTICLE_PATH)
    const table = page.getByRole('table', { name: copy.chartLabel })

    await expect(table.getByRole('row')).toHaveCount(Object.keys(FORECAST_CHART_LABELS).length + 1)
    await expect(table.getByRole('row', { name: new RegExp(`^${accelerator}`) })).toContainText(
      [values['bars.accelerator.value'], values['bars.accelerator.base'], values['bars.accelerator.peak']]
        .map(formatCurrencyCompact)
        .join(''),
    )
  })

  test('keyboard focus on a bar shows its category description', async ({ page }) => {
    const { copy } = await loadExpectations()
    await page.setViewportSize(VIEWPORTS.desktop)
    await page.goto(ARTICLE_PATH)
    const widget = getWidget(page, copy.chartLabel)
    const description = FORECAST_CHART_LABEL_DESCRIPTIONS[accelerator]
    const bar = widget.getByRole('button', { name: new RegExp(`^${accelerator}:`) }).filter({ visible: true })
    const tooltip = widget.getByRole('tooltip').filter({ hasText: description })

    await expect(tooltip).toBeHidden()
    await bar.focus()
    await expect(bar).toHaveAccessibleDescription(description)
    await expect(tooltip).toBeVisible()
    await bar.blur()
    await expect(tooltip).toBeHidden()
  })
})

test('reference: widget next to the app screenshot, for review in the HTML report', async ({ page }, testInfo) => {
  const { copy } = await loadExpectations()
  await page.setViewportSize(VIEWPORTS.desktop)
  await page.goto(ARTICLE_PATH)

  await testInfo.attach('app screenshot', {
    body: await readFile(path.join(process.cwd(), APP_SCREENSHOT)),
    contentType: 'image/jpeg',
  })
  await testInfo.attach('website widget', {
    body: await getWidget(page, copy.chartLabel).screenshot(),
    contentType: 'image/png',
  })
})
