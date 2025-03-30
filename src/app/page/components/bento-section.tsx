import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'
import { Heading, Subheading } from '@/components/text'

export function BentoSection() {
  return (
    <Container>
      <Subheading>Forecasting and Analytics</Subheading>
      <Heading as="h3" className="mt-2 max-w-5xl">
        From Pipeline Surprises to Pipeline Clarity.
      </Heading>
      <div className="mt-4 max-w-4xl text-gray-400">
        AI-powered revenue analytics transforms chaotic pipeline data into actionable intelligence. By automatically
        analyzing customer interactions, engagement patterns, and historical deal flows, Amolino provides unprecedented
        visibility into deal health, risk factors, and revenue projections—eliminating surprises and giving sales
        leaders complete confidence in their pipeline and forecast accuracy.{' '}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Pipeline Radar"
          title="Instantly identify at-risk deals before they collapse"
          description="Continuously monitors all pipeline opportunities using AI, detecting subtle warning signs and engagement patterns that indicate deals in danger—allowing sales leaders to intervene before opportunities derail."
          graphic={
            <div className="h-80 bg-[url(/screenshots/dashboard_rep_view_april_2025.jpg)] bg-[size:1800px_1125px] bg-[left_-915px_top_-400px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Pushed Opportunities"
          title="Track deal movement across quarters with complete visibility"
          description="Automatically identifies opportunities that have been pushed from previous quarters and flags deals showing warning signs of potential pushes, eliminating costly surprises and enabling proactive management."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/dashboard_revenue_forecast_april2025.jpg)] bg-[size:1100px_650px] bg-[left_-375px_top_-400px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Target Tracker"
          title="Real-time visibility into quarterly forecast attainment likelihood"
          description="Provides continuous, AI-powered assessment of your progress toward targets, incorporating pipeline quality, historical performance, and deal-specific signals to deliver accurate attainment predictions."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/dashboard_revenue_forecast_april2025.jpg)] bg-[size:1100px_650px] bg-[left_-80px_top_-0px] bg-no-repeat" />
          }
          fade={['right']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />

        <BentoCard
          eyebrow="Velocity Diagnostics"
          title="Pinpoint exactly what's slowing your revenue engine"
          description="Analyzes the four key components of sales velocity—deal value, win rate, sales cycle length, and opportunity count—identifying specific bottlenecks and prescribing targeted interventions to accelerate revenue."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/dashboard_revenue_forecast_april2025.jpg)] bg-[size:1100px_650px] bg-[left_-75px_top_-435px] bg-no-repeat" />
          }
          className="lg:col-span-2"
          fade={['right']}
        />
        <BentoCard
          eyebrow="Forecast Spectrum"
          title="See beyond single-number projections to true revenue potential"
          description="Delivers scientifically calculated best-case, worst-case, and most likely forecast scenarios based on deal-specific signals and historical patterns, replacing gut feel with statistical confidence."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/dashboard_revenue_forecast_april2025.jpg)] bg-[size:1100px_650px] bg-[left_-590px_top_-35px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
} 