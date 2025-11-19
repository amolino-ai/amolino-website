import { clsx } from 'clsx';

const variants = {
  default: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'text-neutral-600 dark:text-neutral-400',
  ),

  callout: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-[#D15052] to-[#D15052] bg-clip-text text-transparent text-pretty',
  ),

  highlight: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent',
  ),

  outlined: clsx(
    'inline-flex items-center rounded-full px-3 py-1',
    'text-xs font-semibold uppercase tracking-wider',
    'ring-1 ring-neutral-200 dark:ring-neutral-800',
    'text-neutral-700 dark:text-neutral-300',
    'bg-neutral-50 dark:bg-neutral-900',
  ),

  gradient: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-primary-500 via-tertiary-500 to-secondary-500',
    'bg-clip-text text-transparent',
  ),

  accent: clsx(
    'inline-flex items-center gap-2 rounded-full px-3 py-1',
    'text-xs font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-primary-500 to-primary-600',
    'text-white shadow-sm',
  ),

  subtle: clsx(
    'inline-flex items-center rounded-full px-3 py-1',
    'text-xs font-semibold uppercase tracking-widest',
    'bg-neutral-100 dark:bg-neutral-800',
    'text-neutral-600 dark:text-neutral-400',
    'border border-neutral-200 dark:border-neutral-700',
  ),

  glow: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-primary-400 to-tertiary-400 bg-clip-text text-transparent',
    'drop-shadow-[0_0_8px_rgba(25,165,222,0.3)]',
  ),
};

export type EyebrowProps = {
  text: string;
  variant?: keyof typeof variants;
  className?: string;
  icon?: React.ReactNode; // Optional icon for accent/outlined variants
};

export function Eyebrow({
  text,
  variant = 'default',
  className,
  icon
}: EyebrowProps) {
  return (
    <span className={clsx(variants[variant], className)}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {text}
    </span>
  );
}