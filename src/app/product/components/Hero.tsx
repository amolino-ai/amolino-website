import { Badge } from '@/components/badge'
import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

interface HeroProps {
  badgeText: string
  title: string
  description: string
  ctaText: string
  ctaHref: string
  screenshotSrc: string
}

export default function Hero({ badgeText, title, description, ctaText, ctaHref, screenshotSrc }: HeroProps) {
  return (
    <div className="relative h-full overflow-hidden bg-white pt-16 pb-32">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-16">
          <div className="lg:w-1/2">
            <Badge text={badgeText} />
            <h1 className="mt-6 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
            <p className="mt-6 text-xl text-gray-600">{description}</p>
            <div className="mt-8">
              <Button href={ctaHref}>{ctaText}</Button>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-0 lg:w-1/2">
            <Screenshot width={1216} height={768} src={screenshotSrc} className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </Container>
    </div>
  )
}
