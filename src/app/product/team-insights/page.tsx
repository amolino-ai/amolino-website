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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: 'Team Performance Analytics',
    description: 'Get real-time insights into team performance, identify top performers, and spot areas for improvement.',
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
    title: 'Pipeline Health Metrics',
    description: 'Monitor pipeline health across your team, track deal progression, and identify bottlenecks.',
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
    title: 'Coaching Opportunities',
    description: 'Identify coaching opportunities and provide targeted guidance to help your team succeed.',
  },
]

export default function TeamInsights() {
  return (
    <>
      <Hero
        badgeText="Team Insights"
        title="Empower your sales team with actionable insights."
        description="Get real-time visibility into team performance, identify coaching opportunities, and drive consistent results across your sales organization."
        ctaText="Try AmolinoAI"
        ctaHref="https://app.amolino.ai"
        screenshotSrc="/screenshots/dashboard_managers_view_april_2025.jpg"
      />
      <FeatureShowcase
        title="Comprehensive Team Analytics."
        features={features}
        screenshotSrc="/screenshots/dashboard_managers_view_april_2025.jpg"
        comparisonTitle="AI-Powered Team Insights vs Traditional Management"
        comparisonSubtitle="Transform your sales management approach with data-driven insights and automated coaching opportunities."
        traditionalPoints={[
          { text: 'Manual performance tracking and reporting' },
          { text: 'Reactive coaching based on missed targets' },
          { text: 'Limited visibility into team performance' },
          { text: 'Inconsistent coaching across team members' },
          { text: 'Time-consuming performance reviews' },
        ]}
        aiPoweredPoints={[
          { text: 'Real-time performance analytics and insights' },
          { text: 'Proactive coaching opportunities identified by AI' },
          { text: 'Comprehensive team performance dashboard' },
          { text: 'Data-driven coaching recommendations' },
          { text: 'Automated performance tracking and reporting' },
          { text: 'Personalized development plans' },
        ]}
      />
      <BottomFeature
        title="Team Performance Framework."
        subtitle="Drive consistent results"
        points={[
          {
            title: 'Performance Metrics',
            description: 'Track key performance indicators across your team',
          },
          {
            title: 'Coaching Dashboard',
            description: 'Access personalized coaching recommendations for each team member',
          },
          {
            title: 'Success Analytics',
            description: 'Identify patterns in successful sales approaches',
          },
        ]}
        screenshotSrc="/screenshots/dashboard_managers_view_april_2025.jpg"
      />
    </>
  )
} 