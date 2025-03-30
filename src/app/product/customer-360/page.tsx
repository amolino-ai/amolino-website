import FeatureShowcase from '@/app/product/components/FeatureShowcase'
import BottomFeature from '@/app/product/components/BottomFeature'
import Hero from '@/app/product/components/Hero'

const features = [
  {
    icon: (
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
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    title: 'Customer Intelligence',
    description: 'Get a complete view of customer interactions, preferences, and behavior across all touchpoints.',
  },
  {
    icon: (
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
    title: 'Engagement Tracking',
    description: 'Monitor customer engagement levels, identify key decision makers, and track relationship health.',
  },
  {
    icon: (
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
    title: 'Relationship Insights',
    description: 'Understand customer relationships, identify upsell opportunities, and predict customer needs.',
  },
]

export default function Customer360() {
  return (
    <>
      <Hero
        badgeText="Customer 360"
        title="Get a complete view of your customer relationships."
        description="Customer 360 provides a comprehensive view of your customer relationships, helping you understand customer needs, track engagement, and identify opportunities for growth."
        ctaText="Try AmolinoAI"
        ctaHref="https://app.amolino.ai"
        screenshotSrc="/screenshots/dashboard_rep_view_april_2025.jpg"
      />
      <FeatureShowcase
        title="Complete Customer Intelligence."
        features={features}
        screenshotSrc="/screenshots/dashboard_rep_view_april_2025.jpg"
        comparisonTitle="AI-Powered Customer 360 vs Traditional CRM"
        comparisonSubtitle="Transform your customer relationships with comprehensive insights and predictive analytics."
        traditionalPoints={[
          'Fragmented customer data across systems',
          'Manual relationship tracking',
          'Limited customer insights',
          'Reactive customer engagement',
          'Incomplete stakeholder mapping',
        ]}
        aiPoweredPoints={[
          'Unified customer view across all touchpoints',
          'Automated relationship tracking and scoring',
          'Deep customer insights and analytics',
          'Proactive engagement recommendations',
          'Comprehensive stakeholder mapping',
          'Predictive customer analytics',
        ]}
      />
      <BottomFeature
        title="Customer Success Framework."
        subtitle="Drive customer growth"
        points={[
          {
            title: 'Relationship Health',
            description: 'Monitor and improve customer relationships',
          },
          {
            title: 'Engagement Analytics',
            description: 'Track and optimize customer interactions',
          },
          {
            title: 'Growth Opportunities',
            description: 'Identify and capitalize on upsell opportunities',
          },
        ]}
        screenshotSrc="/screenshots/dashboard_rep_view_april_2025.jpg"
      />
    </>
  )
} 