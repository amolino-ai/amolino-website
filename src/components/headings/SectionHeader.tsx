import { Heading } from './Heading';
import { Subheading } from './Subheading';
import { clsx } from 'clsx';

/**
 * Props for the {@link SectionHeader} component.
 */
interface SectionHeaderProps {
  /** Small label text above the heading. */
  subheading: string
  /** Main heading text. */
  heading: string
  /** Optional description paragraph below the heading. */
  description?: string
  /** Matches text colors to dark backgrounds. Defaults to false. */
  dark?: boolean
  /** Centers the text alignment. Defaults to false. */
  centered?: boolean
  /** Optional additional class names. */
  className?: string
  /** Heading level. Defaults to 'h2'. */
  as?: 'h1' | 'h2' | 'h3'
}

/**
 * SectionHeader – standard section header with subheading, heading, and optional description.
 *
 * @remarks
 * Use this to render consistent section headers across the site.
 * Supports dark mode and centered layouts.
 * Combines a small subheading, large heading, and optional description paragraph.
 *
 * @example Basic usage
 * ```tsx
 * <SectionHeader
 *   subheading="About Us"
 *   heading="Building the Future of Sales"
 *   description="We help sales teams close more deals with AI-powered insights."
 * />
 * ```
 *
 * @example Dark mode and centered
 * ```tsx
 * <SectionHeader
 *   subheading="Features"
 *   heading="Powerful Tools"
 *   dark
 *   centered
 * />
 * ```
 *
 * @see {@link Heading}
 * @see {@link Subheading}
 */
export function SectionHeader({
  subheading,
  heading,
  description,
  dark = false,
  centered = false,
  className,
  as = 'h2',
}: SectionHeaderProps) {
  const descriptionColor = dark ? 'text-neutral-300' : 'text-neutral-600';

  return (
    <div className={clsx('mx-auto max-w-2xl', centered ? 'text-center lg:mx-auto' : 'lg:mx-0', className)}>
      <Subheading dark={dark}>{subheading}</Subheading>
      <Heading as={as} dark={dark}>
        {heading}
      </Heading>
      {description && <p className={clsx('mt-6 text-lg leading-8', descriptionColor)}>{description}</p>}
    </div>
  );
}
