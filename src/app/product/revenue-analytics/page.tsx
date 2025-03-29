import { Badge } from '@/components/badge'
import { Button } from '@/components/Button'
import ComparisonSection from '@/components/comparison-section'
import { Container } from '@/components/container'
import { DecorativeTriangles } from '@/components/decorative-triangles'
import { GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/Navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading } from '@/components/text'

function Hero() {
  return (
    <>
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <div className="relative overflow-hidden bg-white pt-16 pb-32">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-16">
            <div className="lg:w-1/2">
              <Badge text="AI-Powered Revenue Analytics" />
              <h1 className="mt-6 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                From Pipeline Surprises to Pipeline Clarity.
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                AI-powered revenue analytics transforms chaotic pipeline data into actionable intelligence. By
                automatically analyzing customer interactions, engagement patterns, and historical deal flows, Amolino
                provides unprecedented visibility into deal health, risk factors, and revenue projections—eliminating
                surprises and giving sales leaders complete confidence in their pipeline and forecast accuracy.
              </p>
              <div className="mt-8">
                <Button href="/demo">Explore Pipeline</Button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:w-1/2">
              <Screenshot
                width={1216}
                height={768}
                src="/screenshots/pipeline_radar_heatmap_march2025.png"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

function FeatureShowcase() {
  return (
    <div className="relative overflow-hidden bg-pink-50 py-32">
      <Container>
        <div className="relative z-10">
          <div className="text-center">
            <Heading as="h2">Real-Time Forecast Accuracy.</Heading>

            <div className="mx-auto mt-8 max-w-3xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="relative">
                  <div className="mb-4 flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-pink-600/10 p-2">
                      <svg
                        className="h-5 w-5 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">See exactly where your deals stand</h3>
                  </div>
                  <p className="text-base text-gray-600">
                    AmolinoAI instantly flags at-risk opportunities and identifies your most promising prospects,
                    helping your team prioritize where to focus.
                  </p>
                </div>

                <div className="relative">
                  <div className="mb-4 flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-pink-600/10 p-2">
                      <svg
                        className="h-5 w-5 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Make data-driven decisions</h3>
                  </div>
                  <p className="text-base text-gray-600">
                    Stop relying on gut feelings. AmolinoAI delivers clear, accurate insights based on comprehensive
                    analysis of your entire revenue ecosystem.
                  </p>
                </div>

                <div className="relative">
                  <div className="mb-4 flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-pink-600/10 p-2">
                      <svg
                        className="h-5 w-5 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Forecast with confidence</h3>
                  </div>
                  <p className="text-base text-gray-600">
                    Know exactly what&apos;s coming with AmolinoAI&apos;s precision forecasting that learns from your
                    historical performance and current deal patterns.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="secondary">View Full Screen</Button>
            </div>
          </div>
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-2xl">
              <Screenshot
                width={1216}
                height={768}
                src="/screenshots/dashboard_revenue_feb_2025.png"
                className="relative z-10 mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent" />
            </div>
          </div>
        </div>
        <DecorativeTriangles />
        <ComparisonSection
        title="AI-powered vs Manual pipeline management"
        subtitle="Make data-informed decisions about where to invest your marketing spend, when to hire, or where you have room for improvement."
        traditional={[
          { text: 'Hours spent reviewing deal updates' },
          { text: 'Relying on gut-feel and incomplete data' },
          { text: 'Missing early warning signs' },
          { text: 'Inconsistent deal assesment' },
          { text: 'Reactive problem solving' },
        ]}
        aiPowered={[
          { text: 'Instant visibility into pipeline health' },
          { text: 'Data-driven deal prioritization' },
          { text: 'Early risk detection' },
          { text: 'Consistent evaluation criteria' },
          { text: 'Proactive opportunity management' },
        ]}
      />
      </Container>
    </div>
  )
}

function BottomFeature() {
  return (
    <div className="bg-white py-32">
      <Container>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-x-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Complete Forecast Analysis at Your Fingertips.
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Make data-driven decisions with our three-lens view of your quarter:
            </p>
            <ul className="mt-4 space-y-4 text-lg text-gray-600">
              <li>
                <strong>Best Case Scenario:</strong> See your ceiling potential across all qualified deals
              </li>
              <li>
                <strong>Predicted Outcome:</strong> Get AI-powered realistic projections of likely closings
              </li>
              <li>
                <strong>Worst Case Scenario:</strong> Understand your floor if only the most solid deals close
              </li>
            </ul>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <Screenshot
              width={1216}
              height={768}
              src="/screenshots/pipeline_radar_pushed_opportunities_march2025.png"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function RevenueAnalytics() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <div className="mt-16">
        <FeatureShowcase />
        <BottomFeature />
      </div>
    </>
  )
}
