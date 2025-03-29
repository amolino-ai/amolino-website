import { Badge } from '@/components/badge'
import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { AnimatedNumber } from '@/components/animated-number'

function StatsCard({ label, value, suffix = '', description = '' }: { 
  label: string
  value: number
  suffix?: string
  description?: string
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
      <dt className="text-sm font-medium text-gray-600">{label}</dt>
      <dd className="mt-2 text-4xl font-medium tracking-tight text-gray-900">
        <AnimatedNumber start={0} end={value} />
        {suffix}
      </dd>
      {description && (
        <p className="mt-4 text-sm text-gray-600">{description}</p>
      )}
    </div>
  )
}

function FeatureCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <div className="mt-4 text-gray-600">{children}</div>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <Gradient className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" />
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Badge text="Pipeline Visibility" backgroundColor="bg-pink-50" textColor="text-pink-700" />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Key to Predictable Revenue Growth
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your pipeline from a collection of opportunities into an actionable intelligence system driving predictable growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/demo">Transform Your Pipeline</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Challenge() {
  return (
    <div className="relative bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>The Challenge</Subheading>
          <Heading as="h2">Why Traditional Methods Fail</Heading>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            83% of sales organizations struggle with forecast accuracy, missing quarterly projections by more than 10% despite expensive CRM investments.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <StatsCard 
            label="Sales Rep Time Wasted" 
            value={5} 
            suffix="+ hrs/week"
            description="Manual CRM updates taking valuable time away from selling"
          />
          <StatsCard 
            label="Forecast Accuracy Gap" 
            value={10} 
            suffix="%+"
            description="Average margin of error in quarterly revenue projections"
          />
        </dl>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Manual Updates">
            Sales reps waste 5+ hours weekly on manual updates
          </FeatureCard>
          <FeatureCard title="Fragmented Data">
            Critical insights remain trapped in fragmented systems
          </FeatureCard>
          <FeatureCard title="Late Detection">
            Deal risks identified too late for intervention
          </FeatureCard>
          <FeatureCard title="Incomplete Data">
            Decisions based on incomplete information rather than data
          </FeatureCard>
        </div>
      </Container>
    </div>
  )
}

function Solution() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>The Solution</Subheading>
          <Heading as="h2">Amolino&apos;s Automated Intelligence</Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">1. Comprehensive Capture</h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Automated documentation of all customer interactions
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Complete visibility into engagement patterns
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Automatic stakeholder mapping
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">2. AI-Powered Intelligence</h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Sentiment analysis detects shifting buyer interest
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Immediate competitive alerts
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Early warning system for at-risk deals
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">3. Predictive Analytics</h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Objective win probability scoring
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Accurate timeline forecasting
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Revenue impact visualization
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Impact() {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading dark>Measurable Impact</Subheading>
          <Heading as="h2" dark>Strategic Advantages</Heading>
          <p className="mt-6 text-lg text-gray-300">
            Organizations using automated pipeline visibility report dramatic improvements across key metrics:
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard label="Forecast Accuracy" value={28} suffix="%" description="improvement in accuracy" />
          <StatsCard label="Win Rates" value={15} suffix="%" description="increase in success" />
          <StatsCard label="Sales Cycle" value={22} suffix="%" description="reduction in length" />
          <StatsCard label="ROI" value={4.3} suffix="x" description="within first year" />
        </dl>
      </Container>
    </div>
  )
}

function BottomCTA() {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl bg-gray-900 px-8 py-24 text-center sm:px-14">
          <Heading as="h2" dark className="mx-auto max-w-4xl">
            Don&apos;t just manage your pipeline—weaponize it
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Transform your pipeline from a collection of opportunities into an actionable intelligence system driving predictable growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/demo">Get Started</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function PipelineVisibility() {
  return (
    <>
      <Hero />
      <Challenge />
      <Solution />
      <Impact />
      <BottomCTA />
    </>
  )
} 