'use client'

import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import {
  FORECAST_CHART_LABEL_DESCRIPTIONS,
  FORECAST_CHART_LABELS,
  ForecastChartKey,
  type ForecastBreakdownResponse,
} from '@/lib/demo-data/app-types.generated'
import {
  buildWaterfall,
  getChartAxis,
  getForecastCases,
  getForecastDelta,
  getIncludedKeys,
  type ChartAxis,
  type WaterfallBar,
} from '@/lib/demo-data/forecast-chart'
import type { ForecastWidgetCopy } from '@/lib/demo-data/forecast-chart-copy'
import { formatCurrencyCompact } from '@/lib/demo-data/format'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import { useEffect, useId, useRef, useState, type PointerEvent } from 'react'

/**
 * Interactive copy of the Forecast dashboard's "Amolino forecast" block.
 * Mirrors app/web/components/pages/Dashboard/ForecastPage/ForecastBlock (ForecastBlock + ForecastChartAmolino).
 *
 * From the `sm` breakpoint up it draws the app's vertical waterfall. On phones, seven columns would be about
 * 30px wide, too narrow for any label, so it draws the same waterfall sideways: one row per category.
 */

/** The app's plot is 230px; help screenshots show it about 1.2x larger, so we match that at article width. */
const CHART_HEIGHT_PX = 280
const PERCENT = 100
const HALF_COLUMN = 0.5
const HATCH_SPACING_PX = 8
const HATCH_ANGLE_DEG = 45
/** On phones, label every other gridline (plus the top one) so the axis labels don't collide. */
const PHONE_TICK_STRIDE = 2
/** On phones, put a bar's value label before the bar instead of after it once the bar ends past this point. */
const PHONE_LABEL_FLIP_RATIO = 0.75

/**
 * Labels copied from the app's UI so the widget reads like the real dashboard. They are hard-coded text in the
 * app's components, so the sync script can't copy them; keep them in step by hand.
 */
const APP_LABELS = {
  /** ForecastBlock.tsx: categoryTitle */
  title: 'Amolino forecast',
  /** ForecastBlock.tsx: text after the delta */
  deltaSuffix: 'last 7 days',
  /** CRMSourceSwitcher.tsx: the CRM option shows the provider name (e.g. HubSpot) and falls back to "CRM" */
  sourceAmolino: 'Amolino',
  sourceCrm: 'CRM',
  /** ForecastChartAmolino.tsx: markLine label formatter */
  targetPrefix: 'Target:',
  /** ForecastChartAmolino.tsx: tooltip formatter */
  base: 'Base',
  peak: 'Peak',
} as const

type Selection = ForecastChartKey | null

interface BarStyle {
  /** Gradient colours; the direction class is added by each layout. */
  fill: string
  /** Running-total bars get an outline and diagonal hatching. */
  outline?: string
  hatch?: string
  /** Dot colour in tooltips and details. */
  dot: string
}

const TEAL: BarStyle = { fill: 'from-teal-200 to-teal-600', dot: 'bg-teal-200' }
const BLUE: BarStyle = { fill: 'from-primary-200 to-primary-500', dot: 'bg-primary-200' }
const PURPLE: BarStyle = { fill: 'from-tertiary-200 to-tertiary-500', dot: 'bg-tertiary-200' }

const BAR_STYLES: Record<ForecastChartKey, BarStyle> = {
  [ForecastChartKey.CLOSED_WON]: TEAL,
  [ForecastChartKey.CONFIDENT]: TEAL,
  [ForecastChartKey.WORST_CASE]: { ...TEAL, outline: 'border-teal-600', hatch: 'stroke-teal-600' },
  [ForecastChartKey.UPSIDE]: BLUE,
  [ForecastChartKey.FORECAST]: { ...BLUE, outline: 'border-primary-500', hatch: 'stroke-primary-300' },
  [ForecastChartKey.ACCELERATOR]: PURPLE,
  [ForecastChartKey.BEST_CASE]: { ...PURPLE, outline: 'border-tertiary-500', hatch: 'stroke-tertiary-300' },
}

const toPercent = (value: number, max: number) => `${(value / max) * PERCENT}%`

interface ForecastBlockProps {
  breakdown: ForecastBreakdownResponse
  copy: ForecastWidgetCopy
}

export function ForecastBlock({ breakdown, copy }: ForecastBlockProps) {
  const [selected, setSelected] = useState<Selection>(null)

  const bars = buildWaterfall(breakdown)
  const axis = getChartAxis(bars, breakdown.quarter_target)
  const { bestCase, worstCase } = getForecastCases(breakdown)
  const delta = getForecastDelta(breakdown)
  const included = selected ? getIncludedKeys(selected) : null
  const target = typeof breakdown.quarter_target === 'number' ? breakdown.quarter_target : null

  const toggleSelected = (key: ForecastChartKey) => setSelected((current) => (current === key ? null : key))
  const chartProps = { bars, axis, target, selected, included, copy, onToggle: toggleSelected }

  return (
    <Card padding="sm" className="not-prose my-8">
      <div className="flex items-start justify-between gap-2.5">
        <div>
          <p className="text-base font-medium whitespace-nowrap text-neutral-600">{APP_LABELS.title}</p>
          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
            <p className="text-3xl font-medium text-neutral-900">{formatCurrencyCompact(breakdown.forecast)}</p>
            <p className="text-sm whitespace-nowrap text-neutral-600">
              <span className={clsx(delta > 0 && 'text-success-500', delta < 0 && 'text-error-500')}>
                {formatCurrencyCompact(delta)}
              </span>{' '}
              {APP_LABELS.deltaSuffix}
            </p>
          </div>
        </div>
        <SourceSwitcher copy={copy} />
      </div>

      <div className="mt-2.5 mb-2 grid grid-cols-1 gap-1.5 rounded-lg bg-neutral-100 p-2 sm:grid-cols-[1fr_1px_1fr]">
        <CaseButton
          label={FORECAST_CHART_LABELS[ForecastChartKey.BEST_CASE]}
          value={bestCase}
          isSelected={selected === ForecastChartKey.BEST_CASE}
          onClick={() => toggleSelected(ForecastChartKey.BEST_CASE)}
        />
        <span className="border-t border-neutral-200 sm:border-t-0 sm:border-l" />
        <CaseButton
          label={FORECAST_CHART_LABELS[ForecastChartKey.WORST_CASE]}
          value={worstCase}
          isSelected={selected === ForecastChartKey.WORST_CASE}
          onClick={() => toggleSelected(ForecastChartKey.WORST_CASE)}
        />
      </div>

      <ChartTable bars={bars} target={target} copy={copy} />
      <div className="hidden sm:block">
        <VerticalWaterfall {...chartProps} />
      </div>
      <div className="sm:hidden">
        <HorizontalWaterfall {...chartProps} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-neutral-100 pt-3">
        <Badge variant="subtle" text={copy.sampleDataLabel} />
        <p className="hidden text-xs text-neutral-600 sm:block">{copy.hint}</p>
      </div>
    </Card>
  )
}

interface ChartProps {
  bars: WaterfallBar[]
  axis: ChartAxis
  target: number | null
  selected: Selection
  included: ReadonlySet<ForecastChartKey> | null
  copy: ForecastWidgetCopy
  onToggle: (key: ForecastChartKey) => void
}

/**
 * The app's chart. Mouse: hover shows the tooltip, click selects. Touch: the first tap on a bar shows its
 * tooltip, a second tap selects it, and a tap outside the chart closes the tooltip.
 */
function VerticalWaterfall({ bars, axis, target, selected, included, copy, onToggle }: ChartProps) {
  const [hovered, setHovered] = useState<Selection>(null)
  const [focused, setFocused] = useState<Selection>(null)
  const descriptionIdPrefix = useId()
  const chartRef = useRef<HTMLDivElement>(null)
  const lastPointerType = useRef<string | null>(null)

  useEffect(() => {
    const closeOnOutsideTap = (event: globalThis.PointerEvent) => {
      if (chartRef.current && !chartRef.current.contains(event.target as Node)) setHovered(null)
    }
    document.addEventListener('pointerdown', closeOnOutsideTap)
    return () => document.removeEventListener('pointerdown', closeOnOutsideTap)
  }, [])

  const handlePointerEnter = (key: ForecastChartKey, event: PointerEvent) => {
    if (event.pointerType === 'mouse') setHovered(key)
  }
  const handlePointerLeave = (event: PointerEvent) => {
    if (event.pointerType === 'mouse') setHovered(null)
  }
  const handleClick = (key: ForecastChartKey) => {
    const isTouch = lastPointerType.current !== null && lastPointerType.current !== 'mouse'
    lastPointerType.current = null
    if (isTouch && hovered !== key) {
      setHovered(key)
      return
    }
    onToggle(key)
  }

  return (
    <div ref={chartRef} role="group" aria-label={copy.chartLabel}>
      <div className="flex" style={{ height: CHART_HEIGHT_PX }}>
        <div className="relative flex-1 border-b border-neutral-500">
          {axis.ticks.map((tick) => (
            <div
              key={tick}
              className="absolute inset-x-0 border-t border-neutral-100"
              style={{ bottom: toPercent(tick, axis.max) }}
            />
          ))}

          {target !== null && (
            <div
              className="absolute inset-x-0 z-10 border-t border-primary-900"
              style={{ bottom: toPercent(target, axis.max) }}
            />
          )}

          <div
            className="absolute inset-0 grid"
            style={{ gridTemplateColumns: `repeat(${bars.length}, minmax(0, 1fr))` }}
          >
            {bars.map((bar, index) => (
              <BarColumn
                key={bar.key}
                bar={bar}
                axisMax={axis.max}
                isLast={index === bars.length - 1}
                isHovered={hovered === bar.key}
                isDimmed={included !== null && !included.has(bar.key)}
                isSelected={selected === bar.key}
                onPointerDown={(event) => (lastPointerType.current = event.pointerType)}
                onPointerEnter={(event) => handlePointerEnter(bar.key, event)}
                onPointerLeave={handlePointerLeave}
                descriptionId={`${descriptionIdPrefix}-${bar.key}`}
                onFocus={() => {
                  setHovered(bar.key)
                  setFocused(bar.key)
                }}
                onBlur={() => {
                  setHovered(null)
                  setFocused(null)
                }}
                onClick={() => handleClick(bar.key)}
              />
            ))}
          </div>

          {bars.map((bar, index) =>
            hovered === bar.key && bar.value > 0 ? (
              <BarTooltip key={bar.key} bar={bar} index={index} count={bars.length} axisMax={axis.max} />
            ) : null,
          )}
        </div>

        <div className="relative w-16 shrink-0">
          {axis.ticks.map((tick) => (
            <span
              key={tick}
              className="absolute left-1.5 translate-y-1/2 text-xs text-neutral-600"
              style={{ bottom: toPercent(tick, axis.max) }}
            >
              {formatCurrencyCompact(tick)}
            </span>
          ))}
          {target !== null && (
            <span
              className="absolute left-0 z-10 translate-y-1/2 rounded-sm bg-primary-900 px-1 py-0.5 text-[0.625rem] font-medium whitespace-nowrap text-white"
              style={{ bottom: toPercent(target, axis.max) }}
            >
              {APP_LABELS.targetPrefix} {formatCurrencyCompact(target)}
            </span>
          )}
        </div>
      </div>

      <div className="flex">
        <div className="grid flex-1" style={{ gridTemplateColumns: `repeat(${bars.length}, minmax(0, 1fr))` }}>
          {bars.map((bar, index) => (
            <AxisLabel
              key={bar.key}
              label={bar.label}
              descriptionId={`${descriptionIdPrefix}-${bar.key}`}
              isFocused={focused === bar.key}
              isFirst={index === 0}
              isLast={index === bars.length - 1}
            />
          ))}
        </div>
        <div className="w-16 shrink-0" />
      </div>
    </div>
  )
}

/** Phone layout: the same waterfall drawn sideways. Tapping a row selects it and shows its details below. */
function HorizontalWaterfall({ bars, axis, target, selected, included, copy, onToggle }: ChartProps) {
  const selectedBar = bars.find((bar) => bar.key === selected) ?? null
  const phoneTicks = axis.ticks.filter((_, index) => index % PHONE_TICK_STRIDE === 0 || index === axis.ticks.length - 1)

  return (
    <div role="group" aria-label={copy.chartLabel}>
      <div className="relative pt-6">
        <div className="pointer-events-none absolute inset-y-0 right-0 left-24">
          {phoneTicks.map((tick) => (
            <div
              key={tick}
              className="absolute inset-y-0 border-l border-neutral-100"
              style={{ left: toPercent(tick, axis.max) }}
            />
          ))}
          {target !== null && (
            <>
              <div
                className="absolute inset-y-0 z-10 border-l border-primary-900"
                style={{ left: toPercent(target, axis.max) }}
              />
              <span
                className="absolute top-0 z-10 -translate-x-full rounded-sm bg-primary-900 px-1 py-0.5 text-[0.625rem] font-medium whitespace-nowrap text-white"
                style={{ left: toPercent(target, axis.max) }}
              >
                {formatCurrencyCompact(target)} {copy.targetShortSuffix}
              </span>
            </>
          )}
        </div>

        {bars.map((bar) => (
          <BarRow
            key={bar.key}
            bar={bar}
            axisMax={axis.max}
            isDimmed={included !== null && !included.has(bar.key)}
            isSelected={selected === bar.key}
            onClick={() => onToggle(bar.key)}
          />
        ))}
      </div>

      <div className="relative mt-1 ml-24 h-4 border-t border-neutral-500">
        {phoneTicks.map((tick, index) => (
          <span
            key={tick}
            className={clsx(
              'absolute top-0.5 text-[0.625rem] text-neutral-600',
              index === 0 ? '' : index === phoneTicks.length - 1 ? '-translate-x-full' : '-translate-x-1/2',
            )}
            style={{ left: toPercent(tick, axis.max) }}
          >
            {formatCurrencyCompact(tick)}
          </span>
        ))}
      </div>

      <div aria-live="polite" className="mt-3 min-h-14 rounded-lg bg-neutral-50 px-3 py-2 text-xs">
        {!selectedBar && <p className="text-neutral-600">{copy.hintPhone}</p>}
        {selectedBar && (
          <>
            <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
              <span className={clsx('size-1.5 rounded-full', BAR_STYLES[selectedBar.key].dot)} />
              {selectedBar.label} · {formatCurrencyCompact(selectedBar.value)}
            </div>
            <p className="mt-0.5 text-neutral-600">
              {FORECAST_CHART_LABEL_DESCRIPTIONS[selectedBar.label]}. {copy.detailsFrom}{' '}
              {formatCurrencyCompact(selectedBar.base)} {copy.detailsTo} {formatCurrencyCompact(selectedBar.peak)}.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

interface ChartTableProps {
  bars: WaterfallBar[]
  target: number | null
  copy: ForecastWidgetCopy
}

/** The chart's numbers as a table, for screen readers. Visually hidden. */
function ChartTable({ bars, target, copy }: ChartTableProps) {
  return (
    <table className="sr-only">
      <caption>
        {copy.chartLabel}
        {target !== null && `. ${APP_LABELS.targetPrefix} ${formatCurrencyCompact(target)}`}
      </caption>
      <thead>
        <tr>
          <th scope="col">{copy.tableCategory}</th>
          <th scope="col">{copy.tableAmount}</th>
          <th scope="col">{APP_LABELS.base}</th>
          <th scope="col">{APP_LABELS.peak}</th>
          <th scope="col">{copy.tableDescription}</th>
        </tr>
      </thead>
      <tbody>
        {bars.map((bar) => (
          <tr key={bar.key}>
            <th scope="row">{bar.label}</th>
            <td>{formatCurrencyCompact(bar.value)}</td>
            <td>{formatCurrencyCompact(bar.base)}</td>
            <td>{formatCurrencyCompact(bar.peak)}</td>
            <td>{FORECAST_CHART_LABEL_DESCRIPTIONS[bar.label]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function SourceSwitcher({ copy }: { copy: ForecastWidgetCopy }) {
  return (
    <div className="flex shrink-0 rounded-md border border-neutral-200 bg-neutral-100 p-0.5 text-xs sm:text-sm">
      <span className="rounded-sm bg-white px-1.5 py-0.5 font-medium text-neutral-900 shadow-xs sm:px-2">
        {APP_LABELS.sourceAmolino}
      </span>
      <button
        type="button"
        disabled
        title={copy.crmUnavailable}
        className="cursor-not-allowed px-1.5 py-0.5 text-neutral-500 sm:px-2"
      >
        {APP_LABELS.sourceCrm}
      </button>
    </div>
  )
}

interface CaseButtonProps {
  label: string
  value: number
  isSelected: boolean
  onClick: () => void
}

function CaseButton({ label, value, isSelected, onClick }: CaseButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={clsx(
        'flex items-center justify-between gap-2 rounded-md px-2 py-1 text-sm text-neutral-600 transition-colors hover:bg-white sm:justify-center sm:px-0 sm:py-0.5',
        isSelected && 'bg-white ring-1 ring-primary-700',
      )}
    >
      <span>{label}</span>
      <span className="flex items-center gap-2">
        <span className="font-semibold text-neutral-900 sm:ml-2">{formatCurrencyCompact(value)}</span>
        <ChevronRightIcon className="size-4" />
      </span>
    </button>
  )
}

interface BarColumnProps {
  bar: WaterfallBar
  axisMax: number
  isLast: boolean
  isHovered: boolean
  isDimmed: boolean
  isSelected: boolean
  /** Id of the category description under the axis. */
  descriptionId: string
  onPointerDown: (event: PointerEvent) => void
  onPointerEnter: (event: PointerEvent) => void
  onPointerLeave: (event: PointerEvent) => void
  onFocus: () => void
  onBlur: () => void
  onClick: () => void
}

function BarColumn({
  bar,
  axisMax,
  isLast,
  isHovered,
  isDimmed,
  isSelected,
  descriptionId,
  ...handlers
}: BarColumnProps) {
  const hasValue = bar.value > 0
  const style = BAR_STYLES[bar.key]

  return (
    <button
      type="button"
      disabled={!hasValue}
      aria-pressed={isSelected}
      aria-describedby={descriptionId}
      aria-label={`${bar.label}: ${formatCurrencyCompact(bar.value)}`}
      {...handlers}
      className={clsx(
        'relative h-full border-l border-dashed border-neutral-200 outline-none enabled:cursor-pointer',
        isLast && 'border-r',
        isHovered && 'bg-neutral-50',
      )}
    >
      {hasValue && (
        <>
          <span
            className={clsx(
              'absolute left-1/2 w-3/5 max-w-12 -translate-x-1/2 overflow-hidden rounded-xs bg-gradient-to-b transition-opacity',
              style.fill,
              style.outline && ['border', style.outline],
              isSelected && 'ring-2 ring-primary-700',
              isDimmed && 'opacity-30',
            )}
            style={{ bottom: toPercent(bar.base, axisMax), height: toPercent(bar.value, axisMax) }}
          >
            {style.hatch && <Hatching className={style.hatch} />}
          </span>
          <span
            className={clsx(
              'absolute left-1/2 -translate-x-1/2 pb-1 text-xs font-medium whitespace-nowrap text-neutral-600 transition-opacity',
              isDimmed && 'opacity-30',
            )}
            style={{ bottom: toPercent(bar.peak, axisMax) }}
          >
            {formatCurrencyCompact(bar.value)}
          </span>
        </>
      )}
    </button>
  )
}

interface BarRowProps {
  bar: WaterfallBar
  axisMax: number
  isDimmed: boolean
  isSelected: boolean
  onClick: () => void
}

function BarRow({ bar, axisMax, isDimmed, isSelected, onClick }: BarRowProps) {
  const hasValue = bar.value > 0
  const style = BAR_STYLES[bar.key]
  const labelBeforeBar = bar.peak / axisMax > PHONE_LABEL_FLIP_RATIO

  return (
    <button
      type="button"
      disabled={!hasValue}
      aria-pressed={isSelected}
      aria-label={`${bar.label}: ${formatCurrencyCompact(bar.value)}`}
      onClick={onClick}
      className={clsx(
        'grid h-9 w-full grid-cols-[6rem_1fr] items-center text-left',
        isSelected && 'bg-neutral-50',
        isDimmed && 'opacity-30',
      )}
    >
      <span className="truncate pr-2 text-xs text-neutral-600">{bar.label}</span>
      <span className="relative h-5">
        {hasValue && (
          <>
            <span
              className={clsx(
                'absolute inset-y-0 min-w-0.5 overflow-hidden rounded-xs bg-gradient-to-r',
                style.fill,
                style.outline && ['border', style.outline],
                isSelected && 'ring-2 ring-primary-700',
              )}
              style={{ left: toPercent(bar.base, axisMax), width: toPercent(bar.value, axisMax) }}
            >
              {style.hatch && <Hatching className={style.hatch} />}
            </span>
            <span
              className={clsx(
                'absolute top-1/2 -translate-y-1/2 px-1 text-xs font-medium whitespace-nowrap text-neutral-600',
                labelBeforeBar && '-translate-x-full',
              )}
              style={{ left: toPercent(labelBeforeBar ? bar.base : bar.peak, axisMax) }}
            >
              {formatCurrencyCompact(bar.value)}
            </span>
          </>
        )}
      </span>
    </button>
  )
}

function Hatching({ className }: { className: string }) {
  const patternId = useId()
  return (
    <svg aria-hidden="true" className="absolute inset-0 size-full">
      <defs>
        <pattern
          id={patternId}
          width={HATCH_SPACING_PX}
          height={HATCH_SPACING_PX}
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${HATCH_ANGLE_DEG})`}
        >
          <line x1="0" y1="0" x2="0" y2={HATCH_SPACING_PX} className={className} strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

interface BarTooltipProps {
  bar: WaterfallBar
  index: number
  count: number
  axisMax: number
}

function BarTooltip({ bar, index, count, axisMax }: BarTooltipProps) {
  const columnCenter = ((index + HALF_COLUMN) / count) * PERCENT
  const isFirst = index === 0
  const isLast = index === count - 1

  return (
    <div
      role="tooltip"
      className={clsx(
        'pointer-events-none absolute z-20 mb-6 w-52 rounded-lg bg-neutral-800 p-3 text-xs text-white shadow-lg',
        !isFirst && !isLast && '-translate-x-1/2',
        isLast && '-translate-x-full',
      )}
      style={{ left: isFirst ? 0 : `${columnCenter}%`, bottom: toPercent(bar.peak, axisMax) }}
    >
      <div className="flex items-center gap-1.5 font-semibold text-neutral-400">
        <span className={clsx('size-1.5 rounded-full', BAR_STYLES[bar.key].dot)} />
        {bar.label}
      </div>
      <div>{formatCurrencyCompact(bar.value)}</div>
      <hr className="my-1.5 border-neutral-700" />
      <div className="flex justify-between">
        <span>{APP_LABELS.base}</span>
        <span>{formatCurrencyCompact(bar.base)}</span>
      </div>
      <div className="flex justify-between">
        <span>{APP_LABELS.peak}</span>
        <span>{formatCurrencyCompact(bar.peak)}</span>
      </div>
    </div>
  )
}

interface AxisLabelProps {
  label: string
  /** The bar above points at this id with aria-describedby. */
  descriptionId: string
  /** The bar above has keyboard focus, so show the description as if hovered. */
  isFocused: boolean
  isFirst: boolean
  isLast: boolean
}

/** A category name under the chart. Its description shows on hover, or while the bar above has keyboard focus. */
function AxisLabel({ label, descriptionId, isFocused, isFirst, isLast }: AxisLabelProps) {
  const description = FORECAST_CHART_LABEL_DESCRIPTIONS[label]
  return (
    <div className="group relative flex flex-col items-center">
      <span className="h-1 border-l border-neutral-500" />
      <span className="mt-1 text-center text-xs leading-tight text-neutral-600">{label}</span>
      {description && (
        <span
          id={descriptionId}
          role="tooltip"
          className={clsx(
            'pointer-events-none invisible absolute bottom-full z-20 mb-1 w-40 rounded-md bg-neutral-700 px-2 py-1 text-center text-xs text-white group-hover:visible',
            isFocused && 'visible',
            isFirst && 'left-0',
            isLast && 'right-0',
          )}
        >
          {description}
        </span>
      )}
    </div>
  )
}
