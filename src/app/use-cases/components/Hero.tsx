import { Badge } from '@/components/badge'
import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/Navbar'

interface HeroProps {
  badgeText: string
  badgeBgColor: string
  badgeTextColor: string
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
}

export function Hero({
  badgeText,
  badgeBgColor,
  badgeTextColor,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) {
  return (
    <div className="relative">
      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Badge text={badgeText} backgroundColor={badgeBgColor} textColor={badgeTextColor} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={primaryButtonLink}>{primaryButtonText}</Button>
            <Button className="bg-amber-100" href={secondaryButtonLink} variant="secondary">
              <div>{secondaryButtonText}</div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 