import BottomFeature from '@/app/product/components/BottomFeature'
import FeatureShowcase from '@/app/product/components/FeatureShowcase'
import Hero from '@/app/product/components/Hero'
const features = [
  {
    icon: (
      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'See exactly where your deals stand',
    description:
      'AmolinoAI instantly flags at-risk opportunities and identifies your most promising prospects, helping your team prioritize where to focus.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: 'Make data-driven decisions',
    description:
      'Stop relying on gut feelings. AmolinoAI delivers clear, accurate insights based on comprehensive analysis of your entire revenue ecosystem.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
    title: 'Forecast with confidence',
    description:
      'Know exactly what&apos;s coming with AmolinoAI&apos;s precision forecasting that learns from your historical performance and current deal patterns.',
  },
]

export default function RevenueAnalytics() {
  return (
    <>
      <Hero
        badgeText="AI-Powered Revenue Analytics"
        title="From Pipeline Surprises to Pipeline Clarity."
        description="AI-powered revenue analytics transforms chaotic pipeline data into actionable intelligence. By automatically analyzing customer interactions, engagement patterns, and historical deal flows, Amolino provides unprecedented visibility into deal health, risk factors, and revenue projections—eliminating surprises and giving sales leaders complete confidence in their pipeline and forecast accuracy."
        ctaText="Try AmolinoAI"
        ctaHref="https://app.amolino.ai"
        screenshotSrc="/screenshots/dashboard_revenue_forecast_april2025.jpg"
      />
      <FeatureShowcase
        title="AI-Powered Revenue Analytics."
        features={features}
        screenshotSrc="/screenshots/dashboard_revenue_forecast_april2025.jpg"
        comparisonTitle="AI-Powered Revenue Analytics"
        comparisonSubtitle="Transform your revenue forecasting with AI-powered insights and predictive analytics."
        traditionalPoints={[
          'Manual pipeline reviews and updates',
          'Gut-based forecasting decisions',
          'Limited visibility into deal health',
          'Reactive risk management',
          'Inconsistent forecast accuracy',
        ]}
        aiPoweredPoints={[
          'Automated pipeline monitoring and updates',
          'Data-driven forecasting decisions',
          'Real-time deal health insights',
          'Proactive risk identification',
          'Consistent forecast accuracy',
          'Predictive revenue analytics',
        ]}
      />
      <BottomFeature
        title="Forecast Scenario Analysis."
        subtitle="Make data-driven decisions"
        points={[
          {
            title: 'Best Case Scenario',
            description: 'See your ceiling potential across all qualified deals',
          },
          {
            title: 'Predicted Outcome',
            description: 'Get AI-powered realistic projections of likely closings',
          },
          {
            title: 'Worst Case Scenario',
            description: 'Understand your floor if only the most solid deals close',
          },
        ]}
        screenshotSrc="/screenshots/pipeline_radar_pushed_opportunities_march2025.png"
      />
    </>
  )
}
