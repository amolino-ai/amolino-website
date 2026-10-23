/**
 * Calculates forecast numbers from the sample company's opportunities, the way the app's backend does:
 * sum opportunity values by Amolino forecast state for the quarter, and replay forecast_history
 * to find the forecast 7 days ago. Pure functions, so they run on the server and in the browser.
 */
import {
  FORECAST_CHART_BACKEND_MAP,
  FORECAST_STATES,
  ForecastChartKey,
  type ForecastBreakdownResponse,
  type ForecastState,
} from './app-types.generated'
import type { ForecastHistoryEntry, SampleCompany, SampleOpportunity } from './sample-company'

/** The "last 7 days" delta shown next to the forecast. */
export const FORECAST_DELTA_DAYS = 7
const MS_PER_DAY = 24 * 60 * 60 * 1000

/** States that count toward the forecast total (booked + expected + vulnerable). */
const FORECAST_TOTAL_STATES: ReadonlySet<ForecastState> = new Set(FORECAST_CHART_BACKEND_MAP[ForecastChartKey.FORECAST])

/** An opportunity's forecast-relevant fields at a point in time. `state: null` means it didn't exist yet. */
interface OpportunitySnapshot {
  state: ForecastState | null
  value: number | null
  expected_close_date: string | null
}

function currentSnapshot(opp: SampleOpportunity): OpportunitySnapshot {
  return { state: opp.amolino_forecast, value: opp.value, expected_close_date: opp.expected_close_date }
}

/** Undoes one history entry. Returns the earlier snapshot, or a message if the entry's `to` values don't match. */
function revert(snapshot: OpportunitySnapshot, entry: ForecastHistoryEntry): OpportunitySnapshot | string {
  const { state, value, expected_close_date: closeDate } = entry.transition_snapshot
  const previous = { ...snapshot }

  if (state) {
    if (state.to !== snapshot.state)
      return `history on ${entry.created_at} moves state to "${state.to}", but it is "${snapshot.state}" afterwards`
    previous.state = state.from ?? null
  }
  if (value) {
    if ((value.to ?? null) !== snapshot.value)
      return `history on ${entry.created_at} sets value to ${value.to}, but it is ${snapshot.value} afterwards`
    previous.value = value.from ?? null
  }
  if (closeDate) {
    if ((closeDate.to ?? null) !== snapshot.expected_close_date)
      return `history on ${entry.created_at} sets close date to ${closeDate.to}, but it is ${snapshot.expected_close_date} afterwards`
    previous.expected_close_date = closeDate.from ?? null
  }
  return previous
}

/** Validation helper: the first inconsistency between forecast_history and the current values, if any. */
export function findHistoryMismatch(opp: SampleOpportunity): string | null {
  let snapshot = currentSnapshot(opp)
  for (const entry of [...(opp.forecast_history ?? [])].reverse()) {
    const result = revert(snapshot, entry)
    if (typeof result === 'string') return result
    snapshot = result
  }
  return null
}

/** The opportunity as it was at the end of `date` (YYYY-MM-DD). */
export function getOpportunitySnapshot(opp: SampleOpportunity, date: string): OpportunitySnapshot {
  let snapshot = currentSnapshot(opp)
  for (const entry of [...(opp.forecast_history ?? [])].reverse()) {
    if (entry.created_at <= date) break
    const result = revert(snapshot, entry)
    if (typeof result === 'string') throw new Error(`${opp.id}: ${result}`)
    snapshot = result
  }
  return snapshot
}

export function addDays(date: string, days: number): string {
  return new Date(Date.parse(`${date}T00:00:00Z`) + days * MS_PER_DAY).toISOString().slice(0, 10)
}

interface ForecastScope {
  quarter: string
  /** Omit for all pipelines. */
  pipelineId?: string
}

/** The Forecast dashboard's numbers for a quarter, in the app's ForecastBreakdownResponse shape. */
export function getForecastBreakdown(company: SampleCompany, scope: ForecastScope): ForecastBreakdownResponse {
  const quarter = company.quarters.find((q) => q.label === scope.quarter)
  if (!quarter) throw new Error(`Unknown quarter "${scope.quarter}"`)

  const opportunities = company.opportunities.filter((opp) => !scope.pipelineId || opp.pipeline_id === scope.pipelineId)
  const inQuarter = (snapshot: OpportunitySnapshot) =>
    snapshot.expected_close_date !== null &&
    snapshot.expected_close_date >= quarter.start &&
    snapshot.expected_close_date <= quarter.end

  const sumAt = (date: string, states: ReadonlySet<ForecastState>) =>
    opportunities.reduce((sum, opp) => {
      const snapshot = getOpportunitySnapshot(opp, date)
      return snapshot.state && states.has(snapshot.state) && inQuarter(snapshot) ? sum + (snapshot.value ?? 0) : sum
    }, 0)
  const sumNow = (state: ForecastState) => sumAt(company.as_of, new Set([state]))

  const forecast = sumAt(company.as_of, FORECAST_TOTAL_STATES)
  const targets = (company.forecast_targets ?? []).filter(
    (target) => target.quarter === scope.quarter && (!scope.pipelineId || target.pipeline_id === scope.pipelineId),
  )
  const quarterTarget = targets.length > 0 ? targets.reduce((sum, target) => sum + target.amount, 0) : null

  return {
    booked: sumNow(FORECAST_STATES.BOOKED),
    expected: sumNow(FORECAST_STATES.EXPECTED),
    vulnerable: sumNow(FORECAST_STATES.VULNERABLE),
    recoverable: sumNow(FORECAST_STATES.RECOVERABLE),
    unlikely: sumNow(FORECAST_STATES.UNLIKELY),
    forecast,
    forecast_7_days_ago: sumAt(addDays(company.as_of, -FORECAST_DELTA_DAYS), FORECAST_TOTAL_STATES),
    quarter_target: quarterTarget,
    shortfall: quarterTarget === null ? null : Math.max(quarterTarget - forecast, 0),
  }
}
