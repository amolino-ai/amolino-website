/**
 * Checks the shared sample company: that it loads, that the forecast calculated from it matches
 * the help screenshots, and that validation catches the mistakes an editor is likely to make.
 */
import { beforeAll, describe, expect, it } from 'vitest'
import { loadYAML } from '../content/loaders'
import { FORECAST_STATES } from './app-types.generated'
import { getDemoValues, isDemoValuePath } from './demo-values'
import { addDays, getForecastBreakdown, getOpportunitySnapshot } from './forecast-derive'
import { SAMPLE_COMPANY_FILE, parseSampleCompany, type SampleCompany } from './sample-company'

/** The parsed YAML, before validation. Each test edits its own copy. */
let raw: unknown
let company: SampleCompany

beforeAll(async () => {
  raw = await loadYAML<unknown>(SAMPLE_COMPANY_FILE)
  company = parseSampleCompany(raw)
})

/** A copy of the raw YAML with `edit` applied to the first opportunity. */
function withFirstOpportunity(edit: (opp: Record<string, unknown>) => void): unknown {
  const copy = structuredClone(raw) as { opportunities: Record<string, unknown>[] }
  edit(copy.opportunities[0])
  return copy
}

describe('sample company data', () => {
  it('matches the numbers in the help screenshots', () => {
    expect(getForecastBreakdown(company, { quarter: company.current_quarter })).toEqual({
      booked: 1_312_000,
      expected: 2_524_000,
      vulnerable: 29_500,
      recoverable: 271_200,
      unlikely: 1_850_000,
      forecast: 3_865_500,
      forecast_7_days_ago: 5_465_500,
      quarter_target: 10_000_000,
      shortfall: 6_134_500,
    })
  })

  it('rejects an unknown owner', () => {
    expect(() => parseSampleCompany(withFirstOpportunity((opp) => (opp.owner_id = 'nobody')))).toThrow(
      /unknown owner .*nobody/,
    )
  })

  it('rejects a value change that forecast_history does not explain', () => {
    expect(() => parseSampleCompany(withFirstOpportunity((opp) => (opp.value = (opp.value as number) + 1)))).toThrow(
      /history on .* sets value to/,
    )
  })

  it('rejects an unknown forecast state', () => {
    expect(() => parseSampleCompany(withFirstOpportunity((opp) => (opp.amolino_forecast = 'maybe')))).toThrow(
      /amolino_forecast/,
    )
  })
})

describe('forecast history', () => {
  it('replays history to an earlier date', () => {
    const changed = company.opportunities.find((opp) => (opp.forecast_history ?? []).length > 0)
    if (!changed) throw new Error('The sample needs at least one opportunity with forecast_history')
    const firstChange = changed.forecast_history![0].created_at
    const before = getOpportunitySnapshot(changed, addDays(firstChange, -1))
    const after = getOpportunitySnapshot(changed, company.as_of)
    expect(after).toEqual({
      state: changed.amolino_forecast,
      value: changed.value,
      expected_close_date: changed.expected_close_date,
    })
    expect(before).not.toEqual(after)
  })

  it('adds days across month and year ends', () => {
    expect(addDays('2026-10-21', -7)).toBe('2026-10-14')
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
    expect(addDays('2026-03-01', -1)).toBe('2026-02-28')
  })
})

describe('getForecastBreakdown', () => {
  it('rejects an unknown quarter', () => {
    expect(() => getForecastBreakdown(company, { quarter: 'Q9 2099' })).toThrow(/Unknown quarter/)
  })

  it('counts nothing for a pipeline with no opportunities', () => {
    const breakdown = getForecastBreakdown(company, { quarter: company.current_quarter, pipelineId: 'none' })
    expect(breakdown.forecast).toBe(0)
    expect(breakdown.quarter_target).toBeNull()
  })

  it('never counts lost deals', () => {
    const lost = company.opportunities.filter((opp) => opp.amolino_forecast === FORECAST_STATES.LOST)
    expect(lost.length).toBeGreaterThan(0)
    const [first, ...rest] = company.opportunities.filter((opp) => !lost.includes(opp))
    const withoutLost = { ...company, opportunities: [first, ...rest] satisfies SampleCompany['opportunities'] }
    const scope = { quarter: company.current_quarter }
    expect(getForecastBreakdown(withoutLost, scope)).toEqual(getForecastBreakdown(company, scope))
  })
})

describe('getDemoValues', () => {
  it('gives the numbers the help articles quote', () => {
    const values = getDemoValues(company)
    expect(values['forecast.total']).toBe(3_865_500)
    expect(values['forecast.sevenDaysAgo']).toBe(5_465_500)
    expect(values['forecast.change7d']).toBe(-1_600_000)
    expect(values['forecast.target']).toBe(10_000_000)
    expect(values['bars.accelerator.value']).toBe(271_200)
    expect(values['bars.accelerator.base']).toBe(3_865_500)
    expect(values['bars.accelerator.peak']).toBe(4_136_700)
  })

  it('recognises valid paths only', () => {
    const values = getDemoValues(company)
    expect(isDemoValuePath('forecast.total', values)).toBe(true)
    expect(isDemoValuePath('forecast.totl', values)).toBe(false)
    expect(isDemoValuePath('toString', values)).toBe(false)
  })
})
