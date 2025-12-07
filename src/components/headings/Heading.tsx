import { clsx } from 'clsx';

/**
 * Props for the {@link Heading} component.
 */
type HeadingProps = {
  /** HTML element to render as. Defaults to 'h2'. */
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Enables dark mode styling. Defaults to false. */
  dark?: boolean
} & React.ComponentPropsWithoutRef<'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

/**
 * Heading – large heading for marketing and content pages.
 *
 * @remarks
 * Use this for large styled headings on marketing pages, hero sections, and content areas.
 * Provides consistent typography styling across h1-h6 elements.
 * Supports dark mode for use on dark backgrounds.
 *
 * This is a simple styling wrapper without interactivity or anchor links.
 * For documentation pages with TOC integration, use DocsHeading instead.
 *
 * @example Basic h1 heading
 * ```tsx
 * <Heading as="h1">Building the Future of Sales</Heading>
 * ```
 *
 * @example Dark mode heading
 * ```tsx
 * <Heading as="h2" dark>Our Mission</Heading>
 * ```
 *
 * @see {@link DocsHeading}
 * @see {@link Subheading}
 */
export function Heading({ className, as: Element = 'h2', dark = false, ...props }: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl',
      )}
    />
  );
}
