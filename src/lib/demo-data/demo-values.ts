/**
 * Named numbers from the sample company that articles can quote with <DemoValue path="..." />,
 * so prose and widgets always show the same figures.
 */
import { ForecastChartKey } from './app-types.generated'
import { buildWaterfall, getForecastCases, getForecastDelta } from './forecast-chart'
import { getForecastBreakdown } from './forecast-derive'
import type { SampleCompany } from './sample-company'

const BAR_POINTS = ['value', 'base', 'peak'] as const
type BarPoint = (typeof BAR_POINTS)[number]

/** e.g. "forecast.total", "bars.accelerator.peak" */
export type DemoValuePath =
  | 'forecast.total'
  | 'forecast.sevenDaysAgo'
  | 'forecast.change7d'
  | 'forecast.target'
  | 'forecast.bestCase'
  | 'forecast.worstCase'
  | `bars.${ForecastChartKey}.${BarPoint}`

/** All quotable values for the sample company's current quarter, all pipelines (what the Forecast widget shows). */
export function getDemoValues(company: SampleCompany): Record<DemoValuePath, number> {
  const breakdown = getForecastBreakdown(company, { quarter: company.current_quarter })
  const { bestCase, worstCase } = getForecastCases(breakdown)

  const barValues = Object.fromEntries(
    buildWaterfall(breakdown).flatMap((bar) => BAR_POINTS.map((point) => [`bars.${bar.key}.${point}`, bar[point]])),
  ) as Record<`bars.${ForecastChartKey}.${BarPoint}`, number>

  return {
    'forecast.total': breakdown.forecast,
    'forecast.sevenDaysAgo': breakdown.forecast_7_days_ago ?? 0,
    'forecast.change7d': getForecastDelta(breakdown),
    'forecast.target': breakdown.quarter_target ?? 0,
    'forecast.bestCase': bestCase,
    'forecast.worstCase': worstCase,
    ...barValues,
  }
}

export function isDemoValuePath(path: string, values: Record<DemoValuePath, number>): path is DemoValuePath {
  return Object.hasOwn(values, path)
}
