import * as Headless from '@headlessui/react';
import { clsx } from 'clsx';
import { Link } from '@/components/Link';

/**
 * ArrowIcon – small arrow icon for button decoration.
 *
 * @remarks
 * Internal component used by Button to display directional arrows.
 * Not exported for external use.
 */
function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
}

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'border border-transparent bg-neutral-900 shadow-md',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-neutral-900 data-disabled:opacity-40 data-hover:bg-neutral-800',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'border border-transparent bg-white/15 ring-1 shadow-md ring-neutral-950/15',
    'after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-base font-medium whitespace-nowrap text-neutral-950',
    'data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'border border-transparent ring-1 shadow-sm ring-neutral-950/10',
    'text-sm font-medium whitespace-nowrap text-neutral-950',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-neutral-50',
  ),
  text: clsx(
    'inline-flex items-center justify-center gap-0.5',
    'text-sm font-medium text-primary-600 transition',
    'data-hover:text-primary-700 hover:text-primary-700',
  ),
};

/**
 * Button shape (corner radius). Defaults to the design-system `control` (5px).
 * Pass `shape="pill"` for the fully-rounded marketing pill. Not applied to the
 * `text` variant, which has no background.
 */
const shapes = {
  control: 'rounded-control',
  pill: 'rounded-full',
};

/**
 * Props for the {@link Button} component.
 *
 * @remarks
 * Accepts either link props (with href) or button props (without href).
 * When href is provided, renders as a Link component.
 * When href is omitted, renders as a Headless UI Button.
 */
type ButtonProps = {
  /** Visual style variant. Defaults to 'primary'. */
  variant?: keyof typeof variants
  /** Corner radius. Defaults to the design-system 'control' (5px). Use 'pill' for the marketing pill. */
  shape?: keyof typeof shapes
  /** Optional arrow icon direction. */
  arrow?: 'left' | 'right'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

/**
 * Button – flexible button component supporting links and actions.
 *
 * @remarks
 * Use this for all call-to-action buttons, navigation links styled as buttons, and interactive actions.
 * Automatically renders as a link when href is provided, or as a button when onClick is used.
 *
 * Supports four visual variants:
 * - primary: Dark background, white text (for main CTAs)
 * - secondary: Light background with ring (for secondary actions)
 * - outline: Minimal with border (for tertiary actions)
 * - text: Text-only with primary color and optional arrow (for inline links)
 *
 * The text variant uses primary-600 color by default and supports left or right arrow icons.
 *
 * @example Primary button with link
 * ```tsx
 * <Button href="/demo">Book a Demo</Button>
 * ```
 *
 * @example Secondary button with action
 * ```tsx
 * <Button variant="secondary" onClick={() => handleClick()}>
 *   Learn More
 * </Button>
 * ```
 *
 * @example Text variant with arrow
 * ```tsx
 * <Button variant="text" arrow="right" href="/features">
 *   View all features
 * </Button>
 * ```
 *
 * @see {@link Link}
 */
export function Button({
  variant = 'primary',
  shape = 'control',
  className,
  arrow,
  children,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant], variant !== 'text' && shapes[shape]);

  const arrowIcon = arrow && (
    <ArrowIcon
      className={clsx(
        'h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1',
      )}
    />
  );

  const inner = (
    <>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </>
  );

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className}>{inner}</Headless.Button>;
  }

  return <Link {...props} className={className}>{inner}</Link>;
}
