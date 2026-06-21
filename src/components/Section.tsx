import { clsx } from 'clsx';

/**
 * Section – layout primitive for full-width page sections.
 *
 * @remarks
 * Centralizes the chrome that section components used to hand-roll: the outer
 * `<section>` element, a token-based background, vertical padding, and a
 * centered max-width container (`mx-auto max-w-7xl px-6 lg:px-8`).
 *
 * Section components (Hero, ProblemSection, ComparisonSection, …) compose this
 * instead of repeating `max-w-7xl mx-auto px-6 …` and ad-hoc backgrounds.
 *
 * @example
 * ```tsx
 * <Section background="dark-gradient" padding="md">
 *   <Heading as="h2" dark>Why it matters</Heading>
 * </Section>
 * ```
 */

const backgrounds = {
  none: '',
  white: 'bg-white',
  muted: 'bg-neutral-50',
  dark: 'bg-primary-900 text-white',
  'dark-gradient': 'bg-gradient-to-br from-primary-800 to-primary-900 text-white',
};

const paddings = {
  none: '',
  sm: 'py-16 sm:py-20',
  md: 'py-24 sm:py-32',
  lg: 'py-24',
};

const maxWidths = {
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-none',
};

export interface SectionProps {
  /** Element to render. Defaults to 'section'. */
  as?: 'section' | 'div'
  /** Token-based background (and matching text color for dark variants). */
  background?: keyof typeof backgrounds
  /** Vertical padding rhythm. Defaults to 'md' (py-24 sm:py-32). */
  padding?: keyof typeof paddings
  /** Inner container max-width. Defaults to '7xl'. */
  maxWidth?: keyof typeof maxWidths
  /** When false, children are rendered without the centered container. */
  contained?: boolean
  /** Classes applied to the outer element. */
  className?: string
  /** Classes applied to the inner container. */
  innerClassName?: string
  children: React.ReactNode
}

export function Section({
  as: Element = 'section',
  background = 'none',
  padding = 'md',
  maxWidth = '7xl',
  contained = true,
  className,
  innerClassName,
  children,
}: SectionProps) {
  const inner = contained ? (
    <div className={clsx('mx-auto w-full px-6 lg:px-8', maxWidths[maxWidth], innerClassName)}>
      {children}
    </div>
  ) : (
    children
  );

  return (
    <Element className={clsx('relative', backgrounds[background], paddings[padding], className)}>
      {inner}
    </Element>
  );
}
