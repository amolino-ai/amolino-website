import { Hero as BaseHero } from '@/components/Hero';

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
    <BaseHero
      layout="centered"
      badgeText={badgeText}
      badgeBgColor={badgeBgColor}
      badgeTextColor={badgeTextColor}
      title={title}
      description={description}
      primaryButton={{
        text: primaryButtonText,
        href: primaryButtonLink,
      }}
      secondaryButton={{
        text: secondaryButtonText,
        href: secondaryButtonLink,
        className: 'bg-warning-100',
      }}
    />
  );
} 