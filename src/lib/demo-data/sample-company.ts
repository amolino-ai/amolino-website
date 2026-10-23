import { z } from 'zod'
import { loadYAML } from '../content/loaders'
import {
  FORECAST_STATES,
  type AffiliationStatus,
  type BlockerItem,
  type CompetitorsInfo,
  type DetailedBANTAnalysis,
  type ForecastTransitionSnapshot,
  type MEDDPICCAnalysis,
  type MEDDPICCFieldKey,
  type MEDDPICCFullState,
  type NeutralIdentifiedConfirmState,
  type NeutralIdentifiedNegativeState,
  type NeutralIdentifiedState,
  type NextStepCommitmentStatus,
  type NextStepsInfo,
  type OpportunityHighlights,
  type OpportunityPattern,
  type ProjectActorDetails,
  type SalesOpportunityHealth,
} from './app-types.generated'
import { findHistoryMismatch } from './forecast-derive'

/**
 * Loads and validates content/demo-data/sample-company.yaml, the fictional company behind every product widget.
 * Nested sections are typed against the app's API types (synced by scripts/sync-app-types.ts),
 * so an app change that breaks the sample data fails the build here.
 */

const SAMPLE_COMPANY_FILE = 'demo-data/sample-company.yaml'
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
const MIN_SENTIMENT = -100
const MAX_SENTIMENT = 100

/** z.enum that only compiles if it lists every member of the app's union type `T`. */
function appEnum<T extends string>() {
  return <const V extends readonly [T, ...T[]]>(values: V & (Exclude<T, V[number]> extends never ? unknown : never)) =>
    z.enum(values)
}

const isoDate = z.string().regex(ISO_DATE, 'Use YYYY-MM-DD')
const ratio = z.number().min(0).max(1)
const strings = z.array(z.string())
const forecastState = z.nativeEnum(FORECAST_STATES)

const meddpiccFullState = appEnum<MEDDPICCFullState>()(['negative', 'neutral', 'identified', 'confirmed'])
const neutralIdentifiedConfirm = appEnum<NeutralIdentifiedConfirmState>()(['neutral', 'identified', 'confirmed'])
const neutralIdentifiedNegative = appEnum<NeutralIdentifiedNegativeState>()(['neutral', 'identified', 'negative'])
const neutralIdentified = appEnum<NeutralIdentifiedState>()(['neutral', 'identified'])
const meddpiccFieldKey = appEnum<MEDDPICCFieldKey>()([
  'metrics',
  'economic_buyer',
  'decision_criteria',
  'decision_process',
  'paper_process',
  'identify_pain',
  'champion',
  'competition',
])
const commitmentStatus = appEnum<NextStepCommitmentStatus>()(['done', 'waiting', 'past_due'])
const opportunityPattern = appEnum<OpportunityPattern>()([
  'stalled',
  'gone_silent',
  'zombie',
  'pushed_in',
  'hollow_qualification',
  'next_step_missing',
  'slipping',
  'past_close_date',
  'missing_close_amount',
  'thin_stakeholder_engagement',
])
const affiliationStatus = appEnum<AffiliationStatus>()(['internal', 'external'])
const bantAnswer = z.enum(['yes', 'no', 'not_discussed'])

function meddpiccField<State extends z.ZodTypeAny>(state: State) {
  return z
    .object({
      state,
      details: strings.nullable().optional(),
      long_details: z.string(),
      sources: strings.optional(),
    })
    .strict()
}

const meddpiccSchema: z.ZodType<MEDDPICCAnalysis> = z
  .object({
    fields: z
      .object({
        metrics: meddpiccField(meddpiccFullState),
        economic_buyer: meddpiccField(meddpiccFullState),
        decision_criteria: meddpiccField(neutralIdentifiedNegative),
        decision_process: meddpiccField(meddpiccFullState),
        paper_process: meddpiccField(meddpiccFullState),
        identify_pain: meddpiccField(neutralIdentifiedNegative),
        champion: meddpiccField(neutralIdentifiedConfirm),
        competition: meddpiccField(neutralIdentified),
      })
      .strict(),
    memory: z
      .object({ memory: z.string(), updated_at: z.string().nullable().optional() })
      .strict()
      .nullable()
      .optional(),
    summary: z
      .array(z.object({ field: meddpiccFieldKey, text: z.string() }).strict())
      .nullable()
      .optional(),
  })
  .strict()

const bantSummary = { confidence: ratio, summary: strings.optional(), source: strings.optional() }

const bantSchema: z.ZodType<DetailedBANTAnalysis> = z
  .object({
    budget: z
      .object({ has_budget: bantAnswer, budget_amount: z.array(z.number()).nullable().optional(), ...bantSummary })
      .strict(),
    authority: z
      .object({
        has_authority: bantAnswer,
        budgetary_authority: strings.optional(),
        decision_makers: strings.optional(),
        ...bantSummary,
      })
      .strict(),
    need: z
      .object({
        has_need: bantAnswer,
        pain_points: strings.optional(),
        solution_requirements: strings.optional(),
        ...bantSummary,
      })
      .strict(),
    timeline: z.object({ has_timeline: bantAnswer, timeframe: strings.nullable().optional(), ...bantSummary }).strict(),
  })
  .strict()

const blockerSchema: z.ZodType<BlockerItem> = z
  .object({ description: z.string(), impact: z.string(), source: strings.optional(), discovered_date: isoDate })
  .strict()

const competitorsSchema: z.ZodType<CompetitorsInfo> = z
  .object({
    has_competitors: z.boolean(),
    competitors: z
      .array(
        z
          .object({
            company_name: z.string().nullable(),
            product_name: z.string().nullable().optional(),
            features: strings.optional(),
            source: strings.optional(),
            domain: z.string().nullable().optional(),
            logo_url: z.string().nullable().optional(),
          })
          .strict(),
      )
      .optional(),
    confidence: ratio,
    summary: strings.optional(),
  })
  .strict()

const commitmentSchema = z.object({ title: z.string(), text: z.string(), status: commitmentStatus }).strict()

const nextStepsSchema: z.ZodType<NextStepsInfo> = z
  .object({
    has_next_steps: z.boolean(),
    actions: z
      .array(
        z
          .object({
            action: z.string(),
            due_date: isoDate,
            seller: commitmentSchema,
            buyer: commitmentSchema,
            summary: strings.optional(),
            source: strings.optional(),
          })
          .strict(),
      )
      .optional(),
    confidence: ratio,
    summary: strings.optional(),
    source: strings.optional(),
  })
  .strict()

const highlightsSchema: z.ZodType<OpportunityHighlights> = z
  .object({
    from_date: isoDate,
    to_date: isoDate,
    highlights: z
      .array(
        z
          .object({
            type: z.enum(['positive', 'negative']),
            title: z.string(),
            detail: z.string(),
            source_doc_ids: strings.optional(),
          })
          .strict(),
      )
      .optional(),
    generated_at: z.string().optional(),
  })
  .strict()

const healthSchema: z.ZodType<SalesOpportunityHealth> = z
  .object({
    health_score: ratio,
    updated_at: isoDate.optional(),
    health_explanation: z
      .object({
        reasons: z
          .array(
            z
              .object({
                type: z.enum(['+', '-']),
                description: z.string(),
                action: z.string().nullable().optional(),
                source_abstract_document_ids: strings.optional(),
              })
              .strict(),
          )
          .optional(),
        health_reasons_summary: z.string().nullable().optional(),
      })
      .strict()
      .optional(),
    health_recommendations: strings.optional(),
  })
  .strict()

const stakeholderSchema: z.ZodType<ProjectActorDetails> = z
  .object({
    actor_id: z.string(),
    full_name: z.string(),
    email_addresses: strings.optional(),
    affiliation_status: affiliationStatus.nullable().optional(),
    role: z.string().nullable().optional(),
    sentiment: z.number().min(MIN_SENTIMENT).max(MAX_SENTIMENT).nullable().optional(),
    responsibility: z.string().nullable().optional(),
  })
  .strict()

const fromTo = <T extends z.ZodTypeAny>(value: T) =>
  z.object({ from: value.nullable().optional(), to: value.nullable().optional() }).strict()

const transitionSnapshotSchema: z.ZodType<ForecastTransitionSnapshot> = z
  .object({
    state: z.object({ from: forecastState.nullable().optional(), to: forecastState }).strict().nullable().optional(),
    value: fromTo(z.number().nonnegative()).nullable().optional(),
    expected_close_date: fromTo(isoDate).nullable().optional(),
    impact: z.number().nullable().optional(),
    health: fromTo(ratio).nullable().optional(),
  })
  .strict()

const forecastHistoryEntrySchema = z
  .object({ created_at: isoDate, transition_snapshot: transitionSnapshotSchema })
  .strict()

const opportunitySchema = z
  .object({
    id: z.string(),
    display_name: z.string(),
    company: z.object({ name: z.string(), domain: z.string(), industry: z.string() }).strict(),
    owner_id: z.string(),
    pipeline_id: z.string(),
    pipeline_stage: z.string(),
    value: z.number().nonnegative(),
    expected_close_date: isoDate,
    closed_at: isoDate.optional(),
    crm_forecast_category: z.string(),
    amolino_forecast: forecastState,
    win_probability: ratio,
    pushed_out: z.number().int().nonnegative(),
    products: strings,
    health: healthSchema,
    /** Oldest first. Each entry's `to` values must match the opportunity at that point. */
    forecast_history: z.array(forecastHistoryEntrySchema).optional(),
    meddpicc: meddpiccSchema.optional(),
    bant: bantSchema.optional(),
    blockers: z.array(blockerSchema).optional(),
    competitors: competitorsSchema.optional(),
    next_steps: nextStepsSchema.optional(),
    opportunity_highlights: highlightsSchema.optional(),
    patterns: z.array(opportunityPattern),
    stakeholders: z.array(stakeholderSchema).optional(),
  })
  .strict()

const sampleCompanySchema = z
  .object({
    company: z
      .object({ name: z.string(), description: z.string(), domain: z.string(), currency: z.literal('USD') })
      .strict(),
    as_of: isoDate,
    current_quarter: z.string(),
    quarters: z.array(z.object({ label: z.string(), start: isoDate, end: isoDate }).strict()).nonempty(),
    team: z
      .array(z.object({ id: z.string(), name: z.string(), role: z.string(), email: z.string().email() }).strict())
      .nonempty(),
    pipelines: z.array(z.object({ id: z.string(), name: z.string(), stages: strings.nonempty() }).strict()).nonempty(),
    forecast_targets: z
      .array(z.object({ quarter: z.string(), pipeline_id: z.string(), amount: z.number().positive() }).strict())
      .optional(),
    opportunities: z.array(opportunitySchema).nonempty(),
  })
  .strict()
  .superRefine((data, ctx) => {
    const fail = (path: (string | number)[], message: string) =>
      ctx.addIssue({ code: z.ZodIssueCode.custom, path, message })
    const quarterLabels = new Set(data.quarters.map((q) => q.label))
    const teamIds = new Set(data.team.map((member) => member.id))
    const pipelines = new Map(data.pipelines.map((pipeline) => [pipeline.id, pipeline]))
    const opportunityIds = new Set<string>()

    if (!quarterLabels.has(data.current_quarter)) fail(['current_quarter'], `Unknown quarter "${data.current_quarter}"`)
    data.forecast_targets?.forEach((target, index) => {
      if (!quarterLabels.has(target.quarter)) fail(['forecast_targets', index], `Unknown quarter "${target.quarter}"`)
      if (!pipelines.has(target.pipeline_id))
        fail(['forecast_targets', index], `Unknown pipeline "${target.pipeline_id}"`)
    })

    data.opportunities.forEach((opp, index) => {
      const path = ['opportunities', index]
      if (opportunityIds.has(opp.id)) fail(path, `Duplicate opportunity id "${opp.id}"`)
      opportunityIds.add(opp.id)
      if (!teamIds.has(opp.owner_id)) fail(path, `${opp.id}: unknown owner "${opp.owner_id}"`)
      const pipeline = pipelines.get(opp.pipeline_id)
      if (!pipeline) fail(path, `${opp.id}: unknown pipeline "${opp.pipeline_id}"`)
      else if (!pipeline.stages.includes(opp.pipeline_stage))
        fail(path, `${opp.id}: stage "${opp.pipeline_stage}" is not in pipeline "${pipeline.id}"`)

      const isClosed = opp.amolino_forecast === FORECAST_STATES.BOOKED || opp.amolino_forecast === FORECAST_STATES.LOST
      if (isClosed !== Boolean(opp.closed_at)) fail(path, `${opp.id}: closed_at must be set exactly for booked or lost`)

      const history = opp.forecast_history ?? []
      history.forEach((entry, entryIndex) => {
        if (entry.created_at > data.as_of) fail(path, `${opp.id}: history entry dated after as_of`)
        if (entryIndex > 0 && entry.created_at < history[entryIndex - 1].created_at)
          fail(path, `${opp.id}: forecast_history must be oldest first`)
      })
      const mismatch = findHistoryMismatch(opp)
      if (mismatch) fail(path, `${opp.id}: ${mismatch}`)
    })
  })

export type SampleCompany = z.infer<typeof sampleCompanySchema>
export type SampleOpportunity = SampleCompany['opportunities'][number]
export type ForecastHistoryEntry = z.infer<typeof forecastHistoryEntrySchema>

/** Loads and validates the sample company. Throws (failing the build) if the file is invalid. */
export async function getSampleCompany(): Promise<SampleCompany> {
  const raw = await loadYAML<unknown>(SAMPLE_COMPANY_FILE)
  const result = sampleCompanySchema.safeParse(raw)
  if (!result.success) {
    throw new Error(`Invalid sample data in content/${SAMPLE_COMPANY_FILE}: ${result.error.message}`)
  }
  return result.data
}
