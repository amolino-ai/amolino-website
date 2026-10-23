/**
 * Copies the Amolino app's forecast and opportunity types, enums and labels into the
 * website so product widgets and sample data use the same shape and vocabulary as the app.
 *
 * Usage:
 *   npm run check:app-types                       # show what changed in the app since the last sync
 *   npm run sync:app-types                        # regenerate src/lib/demo-data/app-types.generated.ts
 *   npm run sync:app-types -- --ref origin/branch # sync from another app branch or commit
 *
 * Files are read from a commit of the app repo (default: origin/main, fetched first), not from its
 * working tree, so the branch your app checkout is on doesn't matter.
 * The app checkout is found at AMOLINO_APP_PATH (default: ../amolino).
 */
import { execFileSync } from 'child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'fs'
import os from 'os'
import path from 'path'
import prettier from 'prettier'

const EXIT_CODE_OUT_OF_DATE = 1
const EXIT_CODE_SOURCE_ERROR = 2

const DEFAULT_APP_PATH = path.resolve(process.cwd(), '..', 'amolino')
const APP_PATH = path.resolve(process.env.AMOLINO_APP_PATH ?? DEFAULT_APP_PATH)
const APP_REMOTE = 'origin'
const DEFAULT_APP_REF = `${APP_REMOTE}/main`
const REF_FLAG = '--ref'
/** git diff --no-index exits with 1 when the files differ. */
const GIT_DIFF_EXIT_CODE_DIFFERENT = 1
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

function git(args: string[]): string {
  return execFileSync('git', ['-C', APP_PATH, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
}

function getRef(): string {
  const index = process.argv.indexOf(REF_FLAG)
  if (index === -1) return DEFAULT_APP_REF
  const ref = process.argv[index + 1]
  if (!ref) throw new SyncError(`${REF_FLAG} needs a branch or commit, e.g. ${REF_FLAG} origin/my-branch`)
  return ref
}

/** Updates remote branches so origin/... refs are current. Works offline with the last fetched copy. */
function fetchApp(ref: string): void {
  if (!existsSync(APP_PATH)) {
    throw new SyncError(`No app checkout at ${APP_PATH}. Set AMOLINO_APP_PATH to your Amolino app checkout.`)
  }
  if (!ref.startsWith(`${APP_REMOTE}/`)) return
  try {
    git(['fetch', '--quiet', APP_REMOTE])
  } catch {
    console.warn(`Couldn't fetch ${APP_REMOTE}; using the copy of ${ref} fetched earlier.`)
  }
}

function readAppFile(ref: string, relativePath: string): string {
  try {
    return git(['show', `${ref}:${relativePath}`])
  } catch {
    throw new SyncError(`Can't read ${relativePath} at ${ref} in ${APP_PATH}. Has the file moved?`)
  }
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

function getAppVersion(ref: string): string {
  try {
    return git(['log', '-1', '--format=%h (%cs)', ref]).trim()
  } catch {
    throw new SyncError(`Unknown branch or commit "${ref}" in ${APP_PATH}.`)
  }
}

async function generate(ref: string): Promise<string> {
  const schema = readAppFile(ref, SCHEMA_FILE)
  const enums = readAppFile(ref, ENUM_FILE)
  const chart = readAppFile(ref, CHART_FILE)

  const sections = [
    `// AUTO-GENERATED by scripts/sync-app-types.ts. Do not edit by hand.
// Source: amolino app ${ref} @ ${getAppVersion(ref)}
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

/** Prints a diff from the current generated file to what the app has now. */
function printDiff(current: string, generated: string): void {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'app-types-'))
  const currentName = 'website.ts'
  const generatedName = 'app.ts'
  writeFileSync(path.join(dir, currentName), withoutHeader(current))
  writeFileSync(path.join(dir, generatedName), withoutHeader(generated))
  try {
    execFileSync('git', ['diff', '--no-index', '--color=always', currentName, generatedName], {
      cwd: dir,
      stdio: 'inherit',
    })
  } catch (error) {
    const isDifferent = (error as { status?: number }).status === GIT_DIFF_EXIT_CODE_DIFFERENT
    if (!isDifferent) throw error
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

async function main(): Promise<void> {
  const isCheck = process.argv.includes('--check')
  const ref = getRef()
  fetchApp(ref)
  const source = `${ref} @ ${getAppVersion(ref)} in ${APP_PATH}`
  const generated = await generate(ref)

  if (isCheck) {
    const current = existsSync(OUTPUT_PATH) ? readFileSync(OUTPUT_PATH, 'utf8') : ''
    if (withoutHeader(current) !== withoutHeader(generated)) {
      printDiff(current, generated)
      console.error(`\nApp types have changed in ${source}.`)
      console.error('Run `npm run sync:app-types`, then `npm run build` to check the sample data still fits.')
      process.exit(EXIT_CODE_OUT_OF_DATE)
    }
    console.log(`App types are up to date with ${source}.`)
    return
  }

  writeFileSync(OUTPUT_PATH, generated)
  console.log(`Wrote ${path.relative(process.cwd(), OUTPUT_PATH)} from ${source}`)
}

main().catch((error: unknown) => {
  if (error instanceof SyncError) {
    console.error(error.message)
    process.exit(EXIT_CODE_SOURCE_ERROR)
  }
  throw error
})
