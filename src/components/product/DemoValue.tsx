import { getDemoValues, isDemoValuePath } from '@/lib/demo-data/demo-values'
import { formatCurrencyCompact } from '@/lib/demo-data/format'
import { getSampleCompany } from '@/lib/demo-data/sample-company'

/**
 * MDX: `<DemoValue path="forecast.total" />` prints a number from the sample company, formatted like the widgets.
 * An unknown path throws, which fails the build, so a typo can't ship as a blank.
 */
export async function DemoValue({ path }: { path: string }) {
  const values = getDemoValues(await getSampleCompany())
  if (!isDemoValuePath(path, values)) {
    throw new Error(`<DemoValue path="${path}" />: unknown path. Valid paths: ${Object.keys(values).join(', ')}`)
  }
  return <>{formatCurrencyCompact(values[path])}</>
}
