import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';
import { Heading, Subheading } from '@/components/text';
import { HeroPattern } from '@/components/HeroPattern';
import { Button } from '@/components/Button';
import { Navbar } from '@/components/Navbar';
interface UseCaseCardProps {
  title: string;
  description: string;
  imagePath: string;
  href: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, imagePath, href }) => {
  return (
    <Link 
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mb-6 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <div className="relative aspect-video w-full">
          {/* Image placeholder - will be replaced with actual images */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">Image: {title}</span>
          </div>
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {title}
      </h3>
      <p className="mb-4 flex-grow text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <div className="mt-auto">
        <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-500 dark:text-blue-400">
          Learn more
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Pipeline Visibility",
      description: "Gain complete visibility into your sales pipeline through automated capture and analysis of every customer interaction, transforming reactive pipeline management into proactive revenue growth.",
      imagePath: "/images/use-cases/pipeline-visibility.jpg",
      href: "/use-cases/pipeline-visibility",
    },
    {
      title: "Revenue Forecasting",
      description: "Replace gut instinct with scientific certainty in your sales forecasts using AI-powered modeling and activity-based validation that delivers forecasts you can stake your reputation on.",
      imagePath: "/images/use-cases/revenue-forecasting.jpg",
      href: "/use-cases/revenue-forecasting",
    },
    {
      title: "CRM Automation",
      description: "Transform your CRM from a manual record-keeping system to an autonomous intelligence platform that captures, organizes, and enriches customer data with minimal human intervention.",
      imagePath: "/images/use-cases/crm-automation.jpg",
      href: "/use-cases/crm-automation",
    },
    {
      title: "Account Management & Deal Tracking",
      description: "Overcome the cognitive limitations of managing complex B2B deals with an AI-powered deal intelligence partner that proactively organizes, prioritizes, and surfaces exactly what you need when you need it.",
      imagePath: "/images/use-cases/account-management.jpg",
      href: "/use-cases/account-management-and-deal-tracking",
    },
    {
      title: "Deal Linearity",
      description: "Eliminate the end-of-quarter scramble with linearity intelligence that creates predictable, achievable paths to your number without the margin-eroding pressure of quarter-end loading.",
      imagePath: "/images/use-cases/deal-linearity.jpg",
      href: "/use-cases/deal-linearity",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950">
      <HeroPattern />
      <Navbar />
      
      {/* Hero Section */}
      <Container className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h1" className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Transform Your Revenue Operations
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Discover how Amolino&apos;s intelligent platform addresses key challenges across your entire revenue operation, empowering your team to sell smarter, forecast accurately, and grow predictably.
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
      <div className="bg-blue-50 py-16 dark:bg-blue-900/20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Subheading as="h3" className="mb-2 text-blue-600 dark:text-blue-400">FEATURED USE CASE</Subheading>
              <Heading as="h2" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Account Management & Deal Tracking
              </Heading>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                Today&apos;s Account Executives manage dozens of opportunities across multiple accounts while coordinating with numerous internal stakeholders per deal. Even with CRM tools and sales methodologies, critical deal details are often missed.
              </p>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Amolino transforms deal management by becoming your always-on, never-forgetting deal intelligence partner that proactively organizes, prioritizes, and surfaces exactly what you need when you need it.
              </p>
              <Button href="/use-cases/account-management-and-deal-tracking" variant="primary">
                Learn More
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800">
              {/* Placeholder for featured image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Account Management & Deal Tracking Image</span>
              </div>
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
      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Heading as="h2" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your revenue operations?
            </Heading>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Schedule a demo to see how Amolino&apos;s AI-powered platform can help your team overcome common revenue challenges and drive predictable growth.
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
  );
} 