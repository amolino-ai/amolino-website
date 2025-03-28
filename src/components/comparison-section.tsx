import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { XMarkIcon, CheckIcon } from '@heroicons/react/16/solid'

interface ComparisonItem {
  text: string
}

interface ComparisonSectionProps {
  title: string
  subtitle: string
  traditional: ComparisonItem[]
  aiPowered: ComparisonItem[]
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  title,
  subtitle,
  traditional,
  aiPowered,
}) => {
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
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">
            Traditional Approach
          </h3>
          <ul className="mt-8 space-y-4">
            {traditional.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <XMarkIcon className="size-5 shrink-0 text-red-500" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI-Powered Approach */}
        <div className="rounded-2xl bg-blue-50/50 p-8 shadow-sm ring-1 ring-blue-100">
          <h3 className="text-xl font-semibold text-blue-600">
            With AI-Powered Customer 360°
          </h3>
          <ul className="mt-8 space-y-4">
            {aiPowered.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon className="size-5 shrink-0 text-blue-500" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default ComparisonSection 