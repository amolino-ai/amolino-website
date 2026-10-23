import { getForecastDemo } from '@/lib/demo-data/forecast'
import { ForecastBlock } from './ForecastBlock'

/** MDX entry point: `<ForecastWidget />` renders the Forecast block with the site's sample data. */
export async function ForecastWidget() {
  const demo = await getForecastDemo()
  return <ForecastBlock breakdown={demo.breakdown} copy={demo.ui} />
}
