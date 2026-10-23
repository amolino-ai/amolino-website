import { describe, expect, it } from 'vitest'
import { ForecastChartKey, type ForecastBreakdownResponse } from './app-types.generated'
import {
  FORECAST_CHART_ORDER,
  buildWaterfall,
  getChartAxis,
  getForecastCases,
  getForecastDelta,
  getIncludedKeys,
} from './forecast-chart'

/** The help screenshot's numbers. */
const BREAKDOWN: ForecastBreakdownResponse = {
  booked: 1_312_000,
  expected: 2_524_000,
  vulnerable: 29_500,
  recoverable: 271_200,
  unlikely: 1_850_000,
  forecast: 3_865_500,
  forecast_7_days_ago: 5_465_500,
  quarter_target: 10_000_000,
  shortfall: 6_134_500,
}

const EMPTY: ForecastBreakdownResponse = {
  booked: 0,
  expected: 0,
  vulnerable: 0,
  recoverable: 0,
  unlikely: 0,
  forecast: 0,
  forecast_7_days_ago: null,
  quarter_target: null,
  shortfall: null,
}

const byKey = (data: ForecastBreakdownResponse) => new Map(buildWaterfall(data).map((bar) => [bar.key, bar]))

describe('buildWaterfall', () => {
  it('returns one bar per chart key, in the app order', () => {
    expect(buildWaterfall(BREAKDOWN).map((bar) => bar.key)).toEqual(FORECAST_CHART_ORDER)
  })

  it('stacks each category on the running total before it', () => {
    const bars = byKey(BREAKDOWN)
    expect(bars.get(ForecastChartKey.CLOSED_WON)).toMatchObject({ value: 1_312_000, base: 0, peak: 1_312_000 })
    expect(bars.get(ForecastChartKey.CONFIDENT)).toMatchObject({ value: 2_524_000, base: 1_312_000, peak: 3_836_000 })
    expect(bars.get(ForecastChartKey.UPSIDE)).toMatchObject({ value: 29_500, base: 3_836_000, peak: 3_865_500 })
    expect(bars.get(ForecastChartKey.ACCELERATOR)).toMatchObject({ value: 271_200, base: 3_865_500, peak: 4_136_700 })
  })

  it('draws running totals from zero and marks them', () => {
    const bars = byKey(BREAKDOWN)
    for (const key of [ForecastChartKey.WORST_CASE, ForecastChartKey.FORECAST, ForecastChartKey.BEST_CASE]) {
      const bar = bars.get(key)
      expect(bar?.isRunningTotal).toBe(true)
      expect(bar?.base).toBe(0)
      expect(bar?.peak).toBe(bar?.value)
    }
    expect(bars.get(ForecastChartKey.WORST_CASE)?.value).toBe(3_836_000)
    expect(bars.get(ForecastChartKey.FORECAST)?.value).toBe(BREAKDOWN.forecast)
    expect(bars.get(ForecastChartKey.BEST_CASE)?.value).toBe(4_136_700)
  })

  it('leaves out unlikely deals', () => {
    const withoutUnlikely = { ...BREAKDOWN, unlikely: 0 }
    expect(buildWaterfall(withoutUnlikely)).toEqual(buildWaterfall(BREAKDOWN))
  })

  it('handles an empty quarter', () => {
    expect(buildWaterfall(EMPTY).every((bar) => bar.value === 0 && bar.base === 0 && bar.peak === 0)).toBe(true)
  })
})

describe('getIncludedKeys', () => {
  it('includes the categories that make up a running total', () => {
    expect([...getIncludedKeys(ForecastChartKey.WORST_CASE)]).toEqual([
      ForecastChartKey.CLOSED_WON,
      ForecastChartKey.CONFIDENT,
      ForecastChartKey.WORST_CASE,
    ])
    expect([...getIncludedKeys(ForecastChartKey.FORECAST)]).toEqual([
      ForecastChartKey.CLOSED_WON,
      ForecastChartKey.CONFIDENT,
      ForecastChartKey.WORST_CASE,
      ForecastChartKey.UPSIDE,
      ForecastChartKey.FORECAST,
    ])
    expect(getIncludedKeys(ForecastChartKey.BEST_CASE).size).toBe(FORECAST_CHART_ORDER.length)
  })

  it('includes only itself for a single category', () => {
    expect([...getIncludedKeys(ForecastChartKey.UPSIDE)]).toEqual([ForecastChartKey.UPSIDE])
  })
})

describe('getForecastCases and getForecastDelta', () => {
  it('computes best and worst case as the app does', () => {
    expect(getForecastCases(BREAKDOWN)).toEqual({ bestCase: 4_136_700, worstCase: 3_836_000 })
  })

  it('computes the 7-day change, or 0 without history', () => {
    expect(getForecastDelta(BREAKDOWN)).toBe(-1_600_000)
    expect(getForecastDelta(EMPTY)).toBe(0)
  })
})

describe('getChartAxis', () => {
  it('pads 10% above the target and uses 1-2-5 steps', () => {
    const axis = getChartAxis(buildWaterfall(BREAKDOWN), BREAKDOWN.quarter_target)
    expect(axis.max).toBeCloseTo(11_000_000)
    expect(axis.ticks).toEqual([0, 2_000_000, 4_000_000, 6_000_000, 8_000_000, axis.max])
  })

  it('pads above the highest bar when there is no target, hiding a tick too close to the top', () => {
    const axis = getChartAxis(buildWaterfall(BREAKDOWN), null)
    expect(axis.max).toBeCloseTo(4_550_370)
    // 4M is left out: it would sit only 0.55M below the 4.55M top label.
    expect(axis.ticks).toEqual([0, 1_000_000, 2_000_000, 3_000_000, axis.max])
  })

  it('returns a usable axis for an empty quarter', () => {
    expect(getChartAxis(buildWaterfall(EMPTY), null)).toEqual({ max: 1, ticks: [0] })
  })
})
