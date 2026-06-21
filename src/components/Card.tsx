import { clsx } from 'clsx';

/**
 * Props for the {@link Card} component.
 */
interface CardProps {
  /** Content rendered inside the card. */
  children: React.ReactNode
  /** Optional additional class names to extend styling. */
  className?: string
  /** Enables dark variant with darker background and lighter borders. Defaults to false. */
  dark?: boolean
  /** Controls internal padding. Defaults to 'md'. */
  padding?: 'sm' | 'md' | 'lg'
  /** HTML element to render as. Defaults to 'div'. */
  as?: 'div' | 'article' | 'section'
}

/**
 * Card – flexible card component with consistent styling.
 *
 * @remarks
 * Use this when you need a consistent surface for grouped content.
 * Provides a base card with rounded corners, shadow, and ring border.
 * Supports dark mode and three padding sizes.
 *
 * @example Basic usage
 * ```tsx
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 * ```
 *
 * @example Dark mode with large padding
 * ```tsx
 * <Card dark padding="lg">
 *   <h3>Dark Card</h3>
 * </Card>
 * ```
 *
 * @see {@link CardHeader}
 * @see {@link CardStats}
 */
export function Card({
  children,
  className,
  dark = false,
  padding = 'md',
  as: Component = 'div',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  return (
    <Component
      className={clsx(
        'rounded-2xl shadow-sm ring-1',
        dark ? 'bg-white/5 ring-white/10' : 'bg-white ring-neutral-950/5',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Props for the {@link CardHeader} component.
 */
interface CardHeaderProps {
  /** Main heading text for the card section. */
  title: string
  /** Optional supporting copy below the title. */
  description?: string
  /** Optional React node shown above the title. */
  badge?: React.ReactNode
  /** Matches text colors to dark Card background. Defaults to false. */
  dark?: boolean
  /** Optional additional class names for the container. */
  className?: string
}

/**
 * CardHeader – standard card header with title and optional description.
 *
 * @remarks
 * Use this to render a consistent heading section inside a Card.
 * Supports an optional badge above the title and description below.
 * Light and dark variants match the parent Card styling.
 *
 * @example Basic usage
 * ```tsx
 * <CardHeader
 *   title="Pipeline health"
 *   description="High-level overview of current opportunities."
 * />
 * ```
 *
 * @example With badge and dark mode
 * ```tsx
 * <CardHeader
 *   title="Forecast"
 *   badge={<span className="rounded-full bg-success-100 px-2 py-1">Live</span>}
 *   dark
 * />
 * ```
 *
 * @see {@link Card}
 */
export function CardHeader({ title, description, badge, dark = false, className }: CardHeaderProps) {
  const titleColor = dark ? 'text-white' : 'text-neutral-900';
  const descriptionColor = dark ? 'text-neutral-300' : 'text-neutral-600';

  return (
    <div className={className}>
      {badge && <div className="mb-4">{badge}</div>}
      <h3 className={clsx('text-xl font-semibold', titleColor)}>{title}</h3>
      {description && (
        <p className={clsx('mt-4 text-base', descriptionColor)}>{description}</p>
      )}
    </div>
  );
}

/**
 * Props for the {@link CardStats} component.
 */
interface CardStatsProps {
  /** Array of stat objects with value and label. */
  stats: Array<{
    value: string | number
    label: string
  }>
  /** Number of grid columns. Defaults to 2. */
  columns?: 1 | 2 | 3 | 4
  /** Matches text and border colors to dark Card background. Defaults to false. */
  dark?: boolean
  /** Optional additional class names for the grid container. */
  className?: string
}

/**
 * CardStats – grid of statistics for cards.
 *
 * @remarks
 * Renders a responsive grid of key/value metrics.
 * Each stat shows a prominent value with a smaller label below.
 * The grid can be configured for 1 to 4 columns and supports dark mode.
 *
 * @example Basic usage
 * ```tsx
 * <CardStats
 *   stats={[
 *     { value: '32', label: 'Open deals' },
 *     { value: '58%', label: 'Win rate' },
 *   ]}
 * />
 * ```
 *
 * @example Three columns with dark mode
 * ```tsx
 * <CardStats
 *   stats={[
 *     { value: '$1.2M', label: 'Pipeline' },
 *     { value: '$420K', label: 'This quarter' },
 *     { value: '18', label: 'Accounts' },
 *   ]}
 *   columns={3}
 *   dark
 * />
 * ```
 *
 * @see {@link Card}
 */
export function CardStats({ stats, columns = 2, dark = false, className }: CardStatsProps) {
  const valueColor = dark ? 'text-white' : 'text-primary-600';
  const labelColor = dark ? 'text-neutral-300' : 'text-neutral-600';
  const borderColor = dark ? 'border-white/10' : 'border-neutral-100';

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={clsx('grid gap-4 border-t pt-6', borderColor, gridClasses[columns], className)}>
      {stats.map((stat, index) => (
        <div key={index}>
          <div className={clsx('text-2xl font-bold', valueColor)}>{stat.value}</div>
          <div className={clsx('mt-1 text-sm', labelColor)}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
