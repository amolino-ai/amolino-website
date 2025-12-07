import { Hero as BaseHero } from '@/components/Hero';

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
    <BaseHero
      layout="split"
      badgeText={badgeText}
      title={title}
      description={description}
      primaryButton={{
        text: ctaText,
        href: ctaHref,
      }}
      screenshot={screenshot}
    />
  );
}
