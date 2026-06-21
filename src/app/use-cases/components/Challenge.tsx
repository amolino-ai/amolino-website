import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/headings/SectionHeader';
import { StatsCard } from './StatsCard';
import { FeatureCard } from './FeatureCard';

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

export function Challenge({ subheading, heading, description, stats, features }: ChallengeProps) {
  return (
    <div className="relative bg-neutral-50 py-24 sm:py-32">
      <Container>
        <SectionHeader subheading={subheading} heading={heading} description={description} />
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
  );
} 