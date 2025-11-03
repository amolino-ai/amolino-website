import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Screenshot } from '@/components/Screenshot';

interface HeroProps {
  badgeText: string
  title: string
  description: string
  ctaText: string
  ctaHref: string
  screenshot: {
    src: string
    width: number
    height: number
    fillContainer?: boolean
  }
}

export default function Hero({ badgeText, title, description, ctaText, ctaHref, screenshot }: HeroProps) {
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

                <Screenshot
                width={screenshot.width}
                height={screenshot.height}
                src={screenshot.src}
                fillContainer={screenshot.fillContainer}
                className="w-full"
                tilt={false}
              />
           
          </div>
        </div>
      </Container>
    </div>
  );
}
