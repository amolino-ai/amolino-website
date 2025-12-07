import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Screenshot } from '@/components/Screenshot';

/**
 * Props for the {@link Hero} component.
 */
interface HeroProps {
  /** Layout variant. Defaults to 'centered'. */
  layout?: 'split' | 'centered'
  /** Text displayed in the badge above the title. */
  badgeText: string
  /** Optional background color for the badge. */
  badgeBgColor?: string
  /** Optional text color for the badge. */
  badgeTextColor?: string
  /** Main headline text. */
  title: string
  /** Supporting description below the title. */
  description: string
  /** Primary call-to-action button configuration. */
  primaryButton: {
    text: string
    href: string
  }
  /** Optional secondary call-to-action button. */
  secondaryButton?: {
    text: string
    href: string
    className?: string
  }
  /** Optional screenshot shown in split layout. */
  screenshot?: {
    src: string
    width: number
    height: number
    fillContainer?: boolean
  }
}

/**
 * Hero – unified hero section component supporting split and centered layouts.
 *
 * @remarks
 * Use this for landing page hero sections and feature pages.
 * Supports two layouts: split (text on left, screenshot on right) and centered (text only).
 * Both layouts include a badge, headline, description, and up to two call-to-action buttons.
 *
 * The split layout is ideal for product showcases while the centered layout works for use cases or announcements.
 *
 * @example Split layout with screenshot
 * ```tsx
 * <Hero
 *   layout="split"
 *   badgeText="New Feature"
 *   title="AI-Powered Deal Insights"
 *   description="Get proactive recommendations for every deal."
 *   primaryButton={{ text: "Book Demo", href: "/demo" }}
 *   screenshot={{ src: "/screenshots/deals.png", width: 1200, height: 800 }}
 * />
 * ```
 *
 * @example Centered layout with two CTAs
 * ```tsx
 * <Hero
 *   layout="centered"
 *   badgeText="Use Case"
 *   title="Pipeline Visibility"
 *   description="Gain complete visibility into your sales pipeline."
 *   primaryButton={{ text: "Learn More", href: "/use-cases/pipeline" }}
 *   secondaryButton={{ text: "See Demo", href: "/demo" }}
 * />
 * ```
 *
 * @see {@link Badge}
 * @see {@link Button}
 * @see {@link Screenshot}
 */
export function Hero({
  layout = 'centered',
  badgeText,
  badgeBgColor,
  badgeTextColor,
  title,
  description,
  primaryButton,
  secondaryButton,
  screenshot,
}: HeroProps) {
  if (layout === 'split') {
    return (
      <div className="relative h-full overflow-hidden bg-white pt-16 pb-32">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-16">
            <div className="lg:w-1/2">
              <Badge text={badgeText} backgroundColor={badgeBgColor} textColor={badgeTextColor} />
              <h1 className="mt-6 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
              <p className="mt-6 text-xl text-gray-600">{description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button href={primaryButton.href}>{primaryButton.text}</Button>
                {secondaryButton && (
                  <Button href={secondaryButton.href} variant="secondary" className={secondaryButton.className}>
                    {secondaryButton.text}
                  </Button>
                )}
              </div>
            </div>
            {screenshot && (
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
            )}
          </div>
        </Container>
      </div>
    );
  }

  // Centered layout
  return (
    <div className="relative">
      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Badge text={badgeText} backgroundColor={badgeBgColor} textColor={badgeTextColor} />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href={primaryButton.href}>{primaryButton.text}</Button>
            {secondaryButton && (
              <Button href={secondaryButton.href} variant="secondary" className={secondaryButton.className}>
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
