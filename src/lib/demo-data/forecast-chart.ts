/**
 * Forecast waterfall maths, matching the app's ForecastChartAmolino and ForecastBlock.
 * Pure functions only, so they run on the server and in the browser.
 */
import {
  FORECAST_CHART_BACKEND_MAP,
  FORECAST_CHART_LABELS,
  ForecastChartKey,
  type ForecastBreakdownResponse,
} from './app-types.generated'

/** Left-to-right bar order, as in the app. */
export const FORECAST_CHART_ORDER: readonly ForecastChartKey[] = [
  ForecastChartKey.CLOSED_WON,
  ForecastChartKey.CONFIDENT,
  ForecastChartKey.WORST_CASE,
  ForecastChartKey.UPSIDE,
  ForecastChartKey.FORECAST,
  ForecastChartKey.ACCELERATOR,
  ForecastChartKey.BEST_CASE,
]

/** Striped bars that show a running total rather than what one category adds. */
const RUNNING_TOTAL_KEYS: ReadonlySet<ForecastChartKey> = new Set([
  ForecastChartKey.WORST_CASE,
  ForecastChartKey.FORECAST,
  ForecastChartKey.BEST_CASE,
])

/** The app pads the y-axis 10% above the larger of the best case and the target. */
const AXIS_HEADROOM_RATIO = 1.1
const TARGET_TICK_COUNT = 5
/** Hide a regular tick if it sits closer than this fraction of a step to the top label. */
const MIN_TOP_TICK_GAP_RATIO = 0.75
const NICE_STEP_MULTIPLIERS = [1, 2, 5, 10] as const

export interface WaterfallBar {
  key: ForecastChartKey
  label: string
  /** What this bar shows: a category's amount or a running total. */
  value: number
  /** Where the bar starts: 0 for running totals, the previous total for categories. */
  base: number
  /** Where the bar ends. */
  peak: number
  isRunningTotal: boolean
}

export function getChartValue(key: ForecastChartKey, data: ForecastBreakdownResponse): number {
  return FORECAST_CHART_BACKEND_MAP[key].reduce((sum, state) => sum + data[state], 0)
}

export function buildWaterfall(data: ForecastBreakdownResponse): WaterfallBar[] {
  let runningTotal = 0
  return FORECAST_CHART_ORDER.map((key) => {
    const value = getChartValue(key, data)
    const isRunningTotal = RUNNING_TOTAL_KEYS.has(key)
    const base = isRunningTotal ? 0 : runningTotal
    runningTotal = base + value
    return { key, label: FORECAST_CHART_LABELS[key], value, base, peak: runningTotal, isRunningTotal }
  })
}

/** Keys whose categories are all part of `selected`, e.g. Worst case -> Closed won, Confident, Worst case. */
export function getIncludedKeys(selected: ForecastChartKey): ReadonlySet<ForecastChartKey> {
  const selectedStates = new Set(FORECAST_CHART_BACKEND_MAP[selected])
  return new Set(
    FORECAST_CHART_ORDER.filter((key) => FORECAST_CHART_BACKEND_MAP[key].every((state) => selectedStates.has(state))),
  )
}

/** Best and worst case as the app's ForecastBlock computes them. */
export function getForecastCases(data: ForecastBreakdownResponse): { bestCase: number; worstCase: number } {
  return { bestCase: data.forecast + data.recoverable, worstCase: data.forecast - data.vulnerable }
}

export function getForecastDelta(data: ForecastBreakdownResponse): number {
  return data.forecast_7_days_ago === null ? 0 : data.forecast - data.forecast_7_days_ago
}

/** The 1-2-5 step closest to `roughStep`, e.g. 2.2M -> 2M. */
function getNiceStep(roughStep: number): number {
  const magnitude = 10 ** Math.floor(Math.log10(roughStep))
  const candidates = NICE_STEP_MULTIPLIERS.map((multiplier) => multiplier * magnitude)
  return candidates.reduce((best, candidate) =>
    Math.abs(candidate - roughStep) < Math.abs(best - roughStep) ? candidate : best,
  )
}

export interface ChartAxis {
  max: number
  ticks: number[]
}

/** Y-axis range and labels: nice steps from 0, plus the top value, as the app's chart draws them. */
export function getChartAxis(bars: readonly WaterfallBar[], target: number | null | undefined): ChartAxis {
  const highest = Math.max(...bars.map((bar) => bar.peak), target ?? 0)
  const max = highest * AXIS_HEADROOM_RATIO
  if (max <= 0) return { max: 1, ticks: [0] }

  const step = getNiceStep(max / TARGET_TICK_COUNT)
  const ticks: number[] = []
  for (let tick = 0; tick <= max - step * MIN_TOP_TICK_GAP_RATIO; tick += step) {
    ticks.push(tick)
  }
  ticks.push(max)
  return { max, ticks }
}
