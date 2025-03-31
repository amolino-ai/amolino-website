import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import Image from 'next/image'
import Link from 'next/link'
interface UseCaseCardProps {
  title: string
  description: string
  imagePath: string
  href: string
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, imagePath, href }) => {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="mb-6 overflow-hidden rounded-lg bg-gray-100">
        <div className="relative aspect-video w-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="mb-4 flex-grow text-gray-600">{description}</p>
      <div className="mt-auto">
        <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-500">
          Learn more
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function UseCasesPage() {
  const useCases = [
    {
      title: 'Pipeline Visibility',
      description:
        'Gain complete visibility into your sales pipeline through automated capture and analysis of every customer interaction, transforming reactive pipeline management into proactive revenue growth.',
      imagePath: '/screenshots/pipeline_radar_heatmap_march2025.png',
      href: '/use-cases/pipeline-visibility',
    },
    {
      title: 'Revenue Forecasting',
      description:
        'Replace gut instinct with scientific certainty in your sales forecasts using AI-powered modeling and activity-based validation that delivers forecasts you can stake your reputation on.',
      imagePath: '/screenshots/dashboard_revenue_forecast_april2025.jpg',
      href: '/use-cases/revenue-forecasting',
    },
    {
      title: 'CRM Automation',
      description:
        'Transform your CRM from a manual record-keeping system to an autonomous intelligence platform that captures, organizes, and enriches customer data with minimal human intervention.',
      imagePath: '/screenshots/Dashboard - Sales Rep - Feb 2025.png',
      href: '/use-cases/crm-automation',
    },
    {
      title: 'Account Management & Deal Tracking',
      description:
        'Overcome the cognitive limitations of managing complex B2B deals with an AI-powered deal intelligence partner that proactively organizes, prioritizes, and surfaces exactly what you need when you need it.',
      imagePath: '/screenshots/sales_compass_full_view_modified_april_2025.jpg',
      href: '/use-cases/account-management-and-deal-tracking',
    },
    {
      title: 'Deal Linearity',
      description:
        'Eliminate the end-of-quarter scramble with linearity intelligence that creates predictable, achievable paths to your number without the margin-eroding pressure of quarter-end loading.',
      imagePath: '/screenshots/dashboard_rep_view_april_2025.jpg',
      href: '/use-cases/deal-linearity',
    },
  ]

  return (
    <div className="relative min-h-screen bg-white">
      <Container className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h1" className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Transform Your Revenue Operations
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Discover how Amolino&apos;s intelligent platform addresses key challenges across your entire revenue
            operation, empowering your team to sell smarter, forecast accurately, and grow predictably.
          </p>
        </div>
      </Container>

      {/* Primary Use Cases Section */}
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.slice(0, 3).map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              imagePath={useCase.imagePath}
              href={useCase.href}
            />
          ))}
        </div>
      </Container>

      {/* Featured Use Case (Larger showcase) */}
      <div className="bg-blue-50 py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Subheading as="h3" className="mb-2 text-blue-600">
                FEATURED USE CASE
              </Subheading>
              <Heading as="h2" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Account Management & Deal Tracking
              </Heading>
              <p className="mb-6 text-lg text-gray-600">
                Today&apos;s Account Executives manage dozens of opportunities across multiple accounts while
                coordinating with numerous internal stakeholders per deal. Even with CRM tools and sales methodologies,
                critical deal details are often missed.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                Amolino transforms deal management by becoming your always-on, never-forgetting deal intelligence
                partner that proactively organizes, prioritizes, and surfaces exactly what you need when you need it.
              </p>
              <Button href="/use-cases/account-management-and-deal-tracking" variant="primary">
                Learn More
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/screenshots/sales_compass_full_view_modified_april_2025.jpg"
                alt="Account Management & Deal Tracking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Secondary Use Cases Section */}
      <Container className="py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {useCases.slice(3, 5).map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              imagePath={useCase.imagePath}
              href={useCase.href}
            />
          ))}
        </div>
      </Container>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Heading as="h2" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your revenue operations?
            </Heading>
            <p className="mb-8 text-lg text-gray-600">
              Schedule a demo to see how Amolino&apos;s AI-powered platform can help your team overcome common revenue
              challenges and drive predictable growth.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/demo" variant="primary">
                Schedule a Demo
              </Button>
              <Button href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
