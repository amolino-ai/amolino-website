import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { StatsCard } from './StatsCard'

interface ImpactProps {
  subheading: string
  heading: string
  description: string
  stats: {
    label: string
    value: number
    suffix: string
    description: string
    dark?: boolean
  }[]
}

export function Impact({ subheading, heading, description, stats }: ImpactProps) {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading dark>{subheading}</Subheading>
          <Heading as="h2" dark>
            {heading}
          </Heading>
          <p className="mt-6 text-lg text-gray-300">{description}</p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} dark={true} />
          ))}
        </dl>
      </Container>
    </div>
  )
} 