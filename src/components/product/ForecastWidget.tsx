import { getForecastChartCopy } from '@/lib/demo-data/forecast-chart-copy'
import { getForecastBreakdown } from '@/lib/demo-data/forecast-derive'
import { getSampleCompany } from '@/lib/demo-data/sample-company'
import { ForecastBlock } from './ForecastBlock'

/** MDX entry point: `<ForecastWidget />` renders the Forecast block for the sample company's current quarter. */
export async function ForecastWidget() {
  const [company, copy] = await Promise.all([getSampleCompany(), getForecastChartCopy()])
  const breakdown = getForecastBreakdown(company, { quarter: company.current_quarter })
  return <ForecastBlock breakdown={breakdown} copy={copy} />
}
