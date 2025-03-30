import { Container } from '@/components/container'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/Button'
import { Badge } from '@/components/badge'
import ProductGrid from './components/ProductGrid'

const products = [
  {
    name: 'Revenue Analytics',
    description: 'From Pipeline Surprises to Pipeline Clarity. AI-powered revenue analytics transforms chaotic pipeline data into actionable intelligence.',
    features: [
      'Real-time forecast accuracy',
      'Data-driven decision making',
      'Precision forecasting',
    ],
    screenshot: '/screenshots/pipeline_radar_heatmap_march2025.png',
    href: '/product/revenue-analytics',
  },
  {
    name: 'Guided Selling',
    description: 'Proactive selling insights to close complex deals faster. AI-powered guidance for your sales team.',
    features: [
      'Clear next steps',
      'Stakeholder mapping',
      'Proven success paths',
    ],
    screenshot: '/screenshots/dashboard_revenue_feb_2025.png',
    href: '/product/guided-selling',
  },
  {
    name: 'Team Insights',
    description: 'Empower your sales team with actionable insights. Real-time visibility into team performance.',
    features: [
      'Team performance analytics',
      'Pipeline health metrics',
      'Coaching opportunities',
    ],
    screenshot: '/screenshots/dashboard_managers_view_april_2025.jpg',
    href: '/product/team-insights',
  },
  {
    name: 'Customer 360',
    description: 'Get a complete view of your customer relationships. Comprehensive insights for customer success.',
    features: [
      'Customer intelligence',
      'Engagement tracking',
      'Relationship insights',
    ],
    screenshot: '/screenshots/dashboard_rep_view_april_2025.jpg',
    href: '/product/customer-360',
  },
]

export default function ProductOverview() {
  return (
    <>
      <Container>
        <Navbar />
        <div className="py-24">
          <div className="text-center">
            <Badge text="Products" />
            <h1 className="mt-6 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
              Complete Sales Intelligence Platform
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              Transform your sales organization with AI-powered insights, guided selling, and comprehensive analytics.
            </p>
            <div className="mt-8">
              <Button href="https://app.amolino.ai">Try AmolinoAI</Button>
            </div>
          </div>

          <ProductGrid products={products} />
        </div>
      </Container>
    </>
  )
} 