import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

interface FeatureListProps {
  title: string
  items: string[]
}

interface SolutionProps {
  subheading: string
  heading: string
  features: FeatureListProps[]
}

function FeatureList({ title, items }: FeatureListProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <ul className="mt-6 space-y-4 text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Solution({ subheading, heading, features }: SolutionProps) {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2">{heading}</Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureList key={index} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  )
} 