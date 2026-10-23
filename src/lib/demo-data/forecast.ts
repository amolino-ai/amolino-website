import { z } from 'zod'
import { loadYAML } from '../content/loaders'
import type { ForecastBreakdownResponse } from './app-types.generated'

const FORECAST_DEMO_FILE = 'demo-data/forecast.yaml'

/** Typed against the synced app type, so an API shape change breaks the build here. */
const forecastBreakdownSchema: z.ZodType<ForecastBreakdownResponse> = z
  .object({
    booked: z.number().nonnegative(),
    expected: z.number().nonnegative(),
    vulnerable: z.number().nonnegative(),
    recoverable: z.number().nonnegative(),
    unlikely: z.number().nonnegative(),
    forecast: z.number().nonnegative(),
    forecast_7_days_ago: z.number().nonnegative().nullable(),
    shortfall: z.number().nullable().optional(),
    quarter_target: z.number().positive().nullable().optional(),
  })
  .strict()
  .refine((data) => data.forecast === data.booked + data.expected + data.vulnerable, {
    message: 'forecast must equal booked + expected + vulnerable, as the API computes it',
    path: ['forecast'],
  })

const forecastWidgetCopySchema = z
  .object({
    title: z.string(),
    deltaSuffix: z.string(),
    sourceAmolino: z.string(),
    sourceCrm: z.string(),
    crmUnavailable: z.string(),
    targetPrefix: z.string(),
    baseLabel: z.string(),
    peakLabel: z.string(),
    sampleDataLabel: z.string(),
    hint: z.string(),
    chartLabel: z.string(),
  })
  .strict()

const forecastDemoSchema = z
  .object({
    breakdown: forecastBreakdownSchema,
    ui: forecastWidgetCopySchema,
  })
  .strict()

export type ForecastWidgetCopy = z.infer<typeof forecastWidgetCopySchema>
export type ForecastDemo = z.infer<typeof forecastDemoSchema>

/** Loads and validates the Forecast sample data. Throws (failing the build) if the file is invalid. */
export async function getForecastDemo(): Promise<ForecastDemo> {
  const raw = await loadYAML<unknown>(FORECAST_DEMO_FILE)
  const result = forecastDemoSchema.safeParse(raw)
  if (!result.success) {
    throw new Error(`Invalid sample data in content/${FORECAST_DEMO_FILE}: ${result.error.message}`)
  }
  return result.data
}
