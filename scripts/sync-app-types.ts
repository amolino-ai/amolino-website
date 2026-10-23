/**
 * Copies the Amolino app's forecast and opportunity types, enums and labels into the
 * website so product widgets and sample data use the same shape and vocabulary as the app.
 *
 * Usage:
 *   npm run sync:app-types              # regenerate src/lib/demo-data/app-types.generated.ts
 *   npm run sync:app-types -- --check   # exit non-zero if the generated file is out of date
 *
 * The app repo is read from AMOLINO_APP_PATH (default: ../amolino).
 */
import { execFileSync } from 'child_process'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import prettier from 'prettier'

const EXIT_CODE_OUT_OF_DATE = 1
const EXIT_CODE_SOURCE_ERROR = 2

const DEFAULT_APP_PATH = path.resolve(process.cwd(), '..', 'amolino')
const APP_PATH = path.resolve(process.env.AMOLINO_APP_PATH ?? DEFAULT_APP_PATH)
const OUTPUT_PATH = path.join(process.cwd(), 'src/lib/demo-data/app-types.generated.ts')

const SCHEMA_FILE = 'app/common/schema.d.ts'
const ENUM_FILE = 'app/web/types/Enums/Dashboard.enum.ts'
const CHART_FILE =
  'app/web/components/pages/Dashboard/ForecastPage/ForecastBlock/ForecastChartAmolino/ForecastChartAmolino.tsx'

/**
 * Schema types copied from the generated OpenAPI file, together with every schema type they reference.
 * These shape the sample data in content/demo-data/sample-company.yaml.
 */
const SCHEMA_ROOT_TYPES = [
  'ForecastBreakdownResponse',
  'ForecastTransitionSnapshot',
  'SalesOpportunityHealth',
  'MEDDPICCAnalysis',
  'DetailedBANTAnalysis',
  'BlockerItem',
  'CompetitorsInfo',
  'NextStepsInfo',
  'OpportunityHighlights',
  'OpportunityPattern',
  'ProjectActorDetails',
] as const

const SCHEMA_REFERENCE = /components\["schemas"\]\["([A-Za-z0-9_]+)"\]/g
const SCHEMA_INDENT = '        '

/** Declarations copied verbatim from the app's source files. */
const ENUM_DECLARATIONS = [
  'export const FORECAST_STATES',
  'export enum ForecastChartKey',
  'export const FORECAST_CHART_LABELS',
  'export const FORECAST_CHART_BACKEND_MAP',
] as const
const CHART_DECLARATIONS = ['const FORECAST_CHART_LABEL_DESCRIPTIONS'] as const

class SyncError extends Error {}

function readAppFile(relativePath: string): string {
  const fullPath = path.join(APP_PATH, relativePath)
  if (!existsSync(fullPath)) {
    throw new SyncError(`Missing ${fullPath}. Set AMOLINO_APP_PATH to your Amolino app checkout.`)
  }
  return readFileSync(fullPath, 'utf8')
}

/** Returns the index just past the brace that closes the one at `openIndex`. */
function findClosingBrace(source: string, openIndex: number): number {
  let depth = 0
  for (let i = openIndex; i < source.length; i++) {
    if (source[i] === '{') depth++
    if (source[i] === '}') depth--
    if (depth === 0) return i + 1
  }
  throw new SyncError(`Unbalanced braces starting at index ${openIndex}`)
}

/** Extracts a declaration from its start text through its closing brace (and trailing `... ;` for consts). */
function extractDeclaration(source: string, start: string, fileLabel: string): string {
  const startIndex = source.indexOf(start)
  if (startIndex === -1) throw new SyncError(`"${start}" not found in ${fileLabel}`)
  const openIndex = source.indexOf('{', startIndex)
  let endIndex = findClosingBrace(source, openIndex)
  if (!start.includes(' enum ')) {
    endIndex = source.indexOf(';', endIndex) + 1
  }
  return source.slice(startIndex, endIndex)
}

/** The body of one schema type: `{ ... }` for objects, or the right-hand side of an alias such as a string union. */
function extractSchemaBody(schema: string, name: string): string {
  const marker = `\n${SCHEMA_INDENT}${name}: `
  const startIndex = schema.indexOf(marker)
  if (startIndex === -1) throw new SyncError(`Schema type ${name} not found in ${SCHEMA_FILE}`)
  const bodyStart = startIndex + marker.length
  if (schema[bodyStart] === '{') {
    return schema.slice(bodyStart, findClosingBrace(schema, bodyStart))
  }
  return schema.slice(bodyStart, schema.indexOf(';\n', bodyStart))
}

/** Copies the root types and everything they reference, with `components["schemas"]["X"]` rewritten to `X`. */
function extractSchemaTypes(schema: string, roots: readonly string[]): string[] {
  const bodies = new Map<string, string>()
  const queue = [...roots]
  while (queue.length > 0) {
    const name = queue.shift()!
    if (bodies.has(name)) continue
    const body = extractSchemaBody(schema, name)
    bodies.set(name, body)
    for (const [, referenced] of body.matchAll(SCHEMA_REFERENCE)) queue.push(referenced)
  }

  return [...bodies.keys()].sort().map((name) => {
    const body = bodies.get(name)!.replace(SCHEMA_REFERENCE, '$1')
    return body.startsWith('{') ? `export interface ${name} ${body}` : `export type ${name} = ${body}`
  })
}

function getAppVersion(): string {
  try {
    return execFileSync('git', ['-C', APP_PATH, 'log', '-1', '--format=%h (%cs)'], { encoding: 'utf8' }).trim()
  } catch {
    return 'unknown commit'
  }
}

async function generate(): Promise<string> {
  const schema = readAppFile(SCHEMA_FILE)
  const enums = readAppFile(ENUM_FILE)
  const chart = readAppFile(CHART_FILE)

  const sections = [
    `// AUTO-GENERATED by scripts/sync-app-types.ts. Do not edit by hand.
// Source: amolino app @ ${getAppVersion()}
//   ${SCHEMA_FILE}
//   ${ENUM_FILE}
//   ${CHART_FILE}`,
    ...extractSchemaTypes(schema, SCHEMA_ROOT_TYPES),
    `type ForecastBreakdownKey = keyof ForecastBreakdownResponse
export type ForecastBackendState = Extract<ForecastState, ForecastBreakdownKey>`,
    ...ENUM_DECLARATIONS.map((start) => extractDeclaration(enums, start, ENUM_FILE)),
    ...CHART_DECLARATIONS.map((start) => `export ${extractDeclaration(chart, start, CHART_FILE)}`),
  ]

  const config = await prettier.resolveConfig(OUTPUT_PATH)
  return prettier.format(sections.join('\n\n'), { ...config, filepath: OUTPUT_PATH })
}

/** The header carries the app commit, so compare everything after it. */
function withoutHeader(source: string): string {
  return source.replace(/^(\/\/.*\n)+/, '')
}

async function main(): Promise<void> {
  const isCheck = process.argv.includes('--check')
  const generated = await generate()

  if (isCheck) {
    const current = existsSync(OUTPUT_PATH) ? readFileSync(OUTPUT_PATH, 'utf8') : ''
    if (withoutHeader(current) !== withoutHeader(generated)) {
      console.error('App types are out of date. Run `npm run sync:app-types` and review the diff.')
      process.exit(EXIT_CODE_OUT_OF_DATE)
    }
    console.log('App types are up to date.')
    return
  }

  writeFileSync(OUTPUT_PATH, generated)
  console.log(`Wrote ${path.relative(process.cwd(), OUTPUT_PATH)} from ${APP_PATH}`)
}

main().catch((error: unknown) => {
  if (error instanceof SyncError) {
    console.error(error.message)
    process.exit(EXIT_CODE_SOURCE_ERROR)
  }
  throw error
})
