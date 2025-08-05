import { Badge } from '@/components/badge'
import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'

function ComparisonCard({ title, amolino, hubspot }: { title: string; amolino: string; hubspot: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-950/5">
      <div className="border-b border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <div className="p-6">
          <div className="mb-4 flex items-center gap-x-3">
            <div className="flex-none rounded-full bg-pink-600/10 p-1">
              <div className="h-2 w-2 rounded-full bg-pink-600" />
            </div>
            <h4 className="font-medium text-pink-600">Amolino</h4>
          </div>
          <p className="text-gray-600">{amolino}</p>
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center gap-x-3">
            <div className="flex-none rounded-full bg-gray-600/10 p-1">
              <div className="h-2 w-2 rounded-full bg-gray-600" />
            </div>
            <h4 className="font-medium text-gray-600">HubSpot</h4>
          </div>
          <p className="text-gray-600">{hubspot}</p>
        </div>
      </div>
    </div>
  )
}

function FeatureCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-x-3">
      <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-gray-300">{children}</span>
    </li>
  )
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <Gradient className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" />
      <Container className="py-24 sm:py-32">
        <div className="mx-auto text-center">
          <Badge text="Comparison" backgroundColor="bg-pink-50" textColor="text-pink-700" />
          <h1 className="mx-auto mt-6 max-w-5xl pb-12 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Amolino Outperforms HubSpot in Revenue Forecasting
          </h1>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2> Forecasting without estimates, gut checks or endless meetings</h2>
          <p className="mt-6 text-left text-base/relaxed text-gray-600">
            Forecasting with HubSpot has several limitations that can hinder its effectiveness. The process relies
            heavily on manual inputs, where account executives (AEs) assign probabilities to deals based on their
            subjective judgment rather than real-time data or advanced analytics. This gut-based approach often leads to
            inconsistencies, as each AE may interpret probabilities differently, requiring extensive meetings to align
            on definitions and expectations. Additionally, the lack of real-time updates means forecasts can quickly
            become outdated, especially in fast-moving sales environments. These challenges are compounded by the
            time-consuming nature of maintaining accurate data and configuring probabilities, which detracts from more
            strategic sales activities.
          </p>
        </div>
      </Container>
    </div>
  )
}

function Comparisons() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>Head-to-Head Comparison</Subheading>
          <Heading as="h2">How We Compare</Heading>
        </div>
        <div className="mt-16 space-y-8">
          <ComparisonCard
            title="Real-Time Accuracy vs. Manual Estimates"
            amolino="Dynamic dashboard provides real-time insights into your sales pipeline, analyzing hundreds of data points—such as historical performance, buyer behavior, and best practices—to deliver precise, up-to-the-minute forecasts."
            hubspot="Depends on manual deal stages and probability weightings. Sales reps update deal information and assign probabilities, which can lead to outdated or biased estimates, often resulting in overly optimistic projections."
          />
          <ComparisonCard
            title="AI-Driven Insights vs. Gut Feelings"
            amolino="Our AI-powered assistant uses machine learning to analyze your pipeline, offering realistic projections based on patterns and trends. It processes vast datasets to eliminate bias and provide objective, tailored predictions—all with one-click simplicity."
            hubspot="Leans on predefined probabilities tied to deal stages, which don't adapt to individual deal nuances. Category-based forecasting requires manual classification by reps, introducing inconsistency and gut-driven decisions."
          />
          <ComparisonCard
            title="Proactive Recommendations vs. Reactive Tracking"
            amolino="Goes beyond prediction—it tells you how to improve your forecast. Our platform identifies at-risk deals, suggests strategies to boost pipeline velocity, and provides actionable steps to hit your targets."
            hubspot="Forecasting tracks progress but stops there. It offers no guidance on improving outcomes, leaving you to react to numbers rather than shape them."
          />
        </div>
      </Container>
    </div>
  )
}

function Analysis() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>Pipeline Analysis</Subheading>
          <Heading as="h2">Comprehensive Pipeline Analysis</Heading>
          <p className="mt-6 text-lg text-gray-600">
            Amolino&apos;s three-lens forecast gives you a complete view of your quarter:
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-2xl bg-pink-50 p-8">
            <h3 className="text-xl font-semibold text-pink-900">Best Case Scenario</h3>
            <p className="mt-2 text-pink-700">Your ceiling across all qualified deals.</p>
          </div>
          <div className="rounded-2xl bg-pink-50 p-8">
            <h3 className="text-xl font-semibold text-pink-900">Predicted Outcome</h3>
            <p className="mt-2 text-pink-700">AI-driven projections of likely closings.</p>
          </div>
          <div className="rounded-2xl bg-pink-50 p-8">
            <h3 className="text-xl font-semibold text-pink-900">Worst Case Scenario</h3>
            <p className="mt-2 text-pink-700">Your floor if only sure bets close.</p>
          </div>
        </div>
        <div className="mt-16">
          <Screenshot
            width={1216}
            height={768}
            src="/screenshots/pipeline_radar_forecast_analysis_march2025.png"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </Container>
    </div>
  )
}

function Benefits() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>Why Choose Amolino?</Subheading>
          <Heading as="h2">
            Benefits That Matter
          </Heading>
        </div>
        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCheck>Eliminate Surprises: End quarters with no unexpected misses</FeatureCheck>
          <FeatureCheck>Boost Accountability: Track team performance with clear metrics</FeatureCheck>
          <FeatureCheck>Optimize Deals: Increase opportunity sizes with data-backed trends</FeatureCheck>
          <FeatureCheck>Protect Revenue: Spot slipping deals early with AI alerts</FeatureCheck>
          <FeatureCheck>Save Time: Automate analysis that takes hours manually</FeatureCheck>
        </ul>
      </Container>
    </div>
  )
}

function BottomCTA() {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl bg-gray-900 px-8 py-24 text-center sm:px-14">
          <Heading as="h2" className="mx-auto max-w-4xl">
            Ready to Upgrade Your Forecasting?
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Stop guessing and start forecasting with confidence. Choose Amolino for real-time, AI-powered insights that
            drive predictable growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/demo">Get Started Today</Button>
            <Button href="/contact" variant="secondary">
              Talk to Sales
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function AmolinoVsHubspot() {
  return (
    <>

      <Hero />
      <Comparisons />
      <Analysis />
      <Benefits />
      {/* <BottomCTA /> */}
    </>
  )
}
