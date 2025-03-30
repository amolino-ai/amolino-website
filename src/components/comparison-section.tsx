import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { XMarkIcon, CheckIcon, MinusIcon } from '@heroicons/react/16/solid'

interface ComparisonItem {
  text: string
}

interface ComparisonSectionProps {
  title: string
  subtitle: string
  traditional: string[]
  aiPowered: string[]
}

export function ComparisonSection({
  title,
  subtitle,
  traditional,
  aiPowered,
}: ComparisonSectionProps) {
  return (
    <Container className="py-24">
      <div className="text-center">
        <Heading as="h2" className="text-3xl font-bold tracking-tight">
          {title}
        </Heading>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Traditional Approach */}
        <div className="rounded-2xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold text-blue-600">
            Traditional Approach
          </h3>
          <ul className="mt-4 space-y-4 text-gray-600">
            {traditional.map((point, index) => (
              <li key={index} className="flex items-center">
                <MinusIcon className="mr-3 h-5 w-5 text-blue-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* AI-Powered Approach */}
        <div className="rounded-2xl bg-blue-50 p-8">
          <h3 className="text-xl font-semibold text-blue-600">
            {title}
          </h3>
          <ul className="mt-4 space-y-4 text-gray-600">
            {aiPowered.map((point, index) => (
              <li key={index} className="flex items-center">
                <CheckIcon className="mr-3 h-5 w-5 text-blue-600" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default ComparisonSection 