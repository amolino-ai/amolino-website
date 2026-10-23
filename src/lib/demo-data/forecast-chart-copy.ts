import { cache } from 'react'
import { z } from 'zod'
import { loadYAML } from '../content/loaders'

const FORECAST_CHART_COPY_FILE = 'product-widgets/forecast-chart.yaml'

const forecastChartCopySchema = z
  .object({
    crmUnavailable: z.string(),
    targetShortSuffix: z.string(),
    sampleDataLabel: z.string(),
    hint: z.string(),
    hintPhone: z.string(),
    chartLabel: z.string(),
    detailsFrom: z.string(),
    detailsTo: z.string(),
  })
  .strict()

export type ForecastWidgetCopy = z.infer<typeof forecastChartCopySchema>

/** Loads the Forecast chart widget's text. Throws (failing the build) if the file is invalid. Cached per render. */
export const getForecastChartCopy = cache(async (): Promise<ForecastWidgetCopy> => {
  const raw = await loadYAML<unknown>(FORECAST_CHART_COPY_FILE)
  const result = forecastChartCopySchema.safeParse(raw)
  if (!result.success) {
    throw new Error(`Invalid widget text in content/${FORECAST_CHART_COPY_FILE}: ${result.error.message}`)
  }
  return result.data
})
