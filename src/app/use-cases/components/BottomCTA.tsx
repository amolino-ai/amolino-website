import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Heading } from '@/components/text'

interface BottomCTAProps {
  heading: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
}

export function BottomCTA({
  heading,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: BottomCTAProps) {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl bg-gray-900 px-8 py-24 text-center sm:px-14">
          <Heading as="h2" dark className="mx-auto max-w-4xl">
            {heading}
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={primaryButtonLink}>{primaryButtonText}</Button>
            <Button href={secondaryButtonLink} variant="secondary">
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 