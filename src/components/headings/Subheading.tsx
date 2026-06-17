import { clsx } from 'clsx';

/**
 * Props for the {@link Subheading} component.
 */
type SubheadingProps = {
  /** HTML element to render as. Defaults to 'h2'. */
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Enables dark mode styling. Defaults to false. */
  dark?: boolean
} & React.ComponentPropsWithoutRef<'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

/**
 * Subheading – small uppercase label for section headers.
 *
 * @remarks
 * Use this for small labels that appear above main headings.
 * Typically used to provide context or categorization for the main heading below.
 * Supports dark mode for use on dark backgrounds.
 *
 * Commonly paired with Heading in section headers.
 *
 * @example Basic usage
 * ```tsx
 * <Subheading>About Us</Subheading>
 * <Heading>Our Mission</Heading>
 * ```
 *
 * @example Dark mode
 * ```tsx
 * <Subheading dark>Features</Subheading>
 * ```
 *
 * @see {@link Heading}
 * @see {@link SectionHeader}
 */
export function Subheading({ className, as: Element = 'h2', dark = false, ...props }: SubheadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-xs/5 font-semibold tracking-widest text-neutral-500 uppercase data-dark:text-neutral-400',
      )}
    />
  );
}
