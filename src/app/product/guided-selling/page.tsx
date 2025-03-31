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
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.69 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.69m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75"
        />
      </svg>
    ),
    title: 'Clear next steps',
    description: 'Get AI-powered action plans with specific tasks and milestones to keep your deals moving forward.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    title: 'Stakeholder mapping',
    description:
      'Automatically identify key decision makers and influencers to ensure you&apos;re engaging with the right people.',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: 'Proven success paths',
    description: 'Follow data-driven playbooks based on your most successful deals to replicate winning strategies.',
  },
]

export default function GuidedSelling() {
  return (
    <>
      <Hero
        badgeText="Guided Selling"
        title="Proactive selling insights to close complex deals faster."
        description="Guided selling uses AI to analyze customer interactions and recommend specific actions."
        ctaText="Try AmolinoAI"
        ctaHref="https://app.amolino.ai"
        screenshotSrc="/screenshots/dashboard_rep_view_april_2025.jpg"
      />
      <FeatureShowcase
        title="AI-Powered Guided Selling."
        features={features}
        screenshotSrc="/screenshots/dashboard_rep_view_april_2025.jpg"
        comparisonTitle="AI-Powered Guided Selling vs Traditional Sales Process"
        comparisonSubtitle="Transform your sales process with AI-powered guidance and predictive insights."
        traditionalPoints={[
          'Manual deal tracking and updates',
          'Limited visibility into deal health',
          'Reactive risk management',
          'Inconsistent sales process',
          'No proactive guidance',
        ]}
        aiPoweredPoints={[
          'Automated deal monitoring and updates',
          'Real-time deal health insights',
          'Proactive risk identification',
          'Consistent sales process',
          'AI-powered guidance and recommendations',
          'Predictive deal analytics',
        ]}
      />
      <BottomFeature
        title="Deal Success Framework."
        subtitle="Follow proven paths to success"
        points={[
          {
            title: 'Milestone Tracking',
            description: 'Monitor key deal stages and ensure critical steps are completed',
          },
          {
            title: 'Stakeholder Engagement',
            description: 'Track and optimize interactions with decision makers',
          },
          {
            title: 'Success Metrics',
            description: 'Measure and improve your sales process effectiveness',
          },
        ]}
        screenshotSrc="/screenshots/pipeline_radar_pushed_opportunities_march2025.png"
      />
    </>
  )
}
