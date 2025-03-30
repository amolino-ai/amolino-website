import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { StatsCard } from './StatsCard'

interface FeatureCardProps {
  title: string
  children: React.ReactNode
}

interface ChallengeProps {
  subheading: string
  heading: string
  description: string
  stats: {
    label: string
    value: number
    suffix?: string
    description?: string
  }[]
  features: FeatureCardProps[]
}

function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <div className="mt-4 text-gray-600">{children}</div>
    </div>
  )
}

export function Challenge({ subheading, heading, description, stats, features }: ChallengeProps) {
  return (
    <div className="relative bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2">{heading}</Heading>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </dl>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  )
} 