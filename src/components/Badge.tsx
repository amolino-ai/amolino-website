'use client';

import { clsx } from 'clsx';

/**
 * Badge – canonical label/chip primitive for the design system.
 *
 * @remarks
 * Single source of truth for small labels, chips, tags, and decorative badges.
 * `Tag` and `Eyebrow` are thin back-compat wrappers that forward here.
 *
 * Variant groups:
 * - Label/eyebrow text: `default`, `callout`, `highlight`, `gradient`, `glow`,
 *   `outlined`, `subtle`, `accent`
 * - API/code tag (uses `color` + `size`): `tag`
 * - Decorative (on imagery/dark surfaces): `ring-glow`, `dot-glass`,
 *   `gradient-shine`, `3d-elevated`
 */

/** Semantic color families for the `tag` variant. */
export const tagColorStyles = {
  success: {
    small: 'text-success-600',
    medium: 'ring-success-300 bg-success-400/10 text-success-600',
  },
  primary: {
    small: 'text-primary-600',
    medium: 'ring-primary-300 bg-primary-400/10 text-primary-600',
  },
  warning: {
    small: 'text-warning-600',
    medium: 'ring-warning-300 bg-warning-400/10 text-warning-700',
  },
  error: {
    small: 'text-error-600',
    medium: 'ring-error-200 bg-error-50 text-error-600',
  },
  neutral: {
    small: 'text-neutral-500',
    medium: 'ring-neutral-200 bg-neutral-50 text-neutral-600',
  },
};

const tagSizeStyles = {
  small: '',
  medium: 'rounded-lg px-1.5 ring-1 ring-inset',
};

export type TagColor = keyof typeof tagColorStyles;
export type TagSize = keyof typeof tagSizeStyles;

/** Label / eyebrow text variants (token-based). */
const labelVariants = {
  default: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'text-neutral-600',
  ),
  callout: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent text-pretty',
  ),
  highlight: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent',
  ),
  outlined: clsx(
    'inline-flex items-center gap-2 rounded-full px-3 py-1',
    'text-xs font-semibold uppercase tracking-wider',
    'ring-1 ring-neutral-200 text-neutral-700 bg-neutral-50',
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
    'inline-flex items-center gap-2 rounded-full px-3 py-1',
    'text-xs font-semibold uppercase tracking-widest',
    'bg-neutral-100 text-neutral-600 border border-neutral-200',
  ),
  glow: clsx(
    'inline-block text-sm font-semibold uppercase tracking-wider',
    'bg-gradient-to-r from-primary-400 to-tertiary-400 bg-clip-text text-transparent',
    'drop-shadow-[0_0_8px_rgba(25,165,222,0.3)]',
  ),
};

export type LabelVariant = keyof typeof labelVariants;
export type DecorativeVariant =
  | 'ring-glow'
  | 'dot-glass'
  | 'gradient-shine'
  | '3d-elevated';
export type BadgeVariant = LabelVariant | DecorativeVariant | 'tag';

export interface BadgeProps {
  /** Text content (convenience). Use `children` for richer content. */
  text?: string
  children?: React.ReactNode
  /** Visual variant. Defaults to 'ring-glow' (decorative) for back-compat. */
  variant?: BadgeVariant
  /** Optional leading icon (label/eyebrow variants). */
  icon?: React.ReactNode
  className?: string
  /** Tailwind background class — decorative variants only. */
  backgroundColor?: string
  /** Tailwind text-color class — decorative variants only. */
  textColor?: string
  /** Color family — `tag` variant only. Defaults to 'neutral'. */
  color?: TagColor
  /** Size — `tag` variant only. Defaults to 'medium'. */
  size?: TagSize
}

// --- Decorative variant renderers (used on imagery / dark surfaces) ---

function RingGlowBadge({ text, children, backgroundColor, textColor }: BadgeProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full px-4 py-1.5 text-sm ring-1 ring-white/30',
        backgroundColor,
      )}
      style={{
        boxShadow:
          '0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)',
      }}
    >
      <span className={clsx('font-semibold', textColor)}>{children ?? text}</span>
    </div>
  );
}

function DotGlassBadge({ text, children, backgroundColor, textColor }: BadgeProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm backdrop-blur-sm',
        backgroundColor,
      )}
    >
      <span className="size-2 animate-pulse rounded-full bg-white/80" />
      <span className={clsx('font-semibold', textColor)}>{children ?? text}</span>
    </div>
  );
}

function GradientShineBadge({ text, children, textColor }: BadgeProps) {
  return (
    <div className="relative inline-flex items-center overflow-hidden rounded-full px-4 py-1.5 text-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/30" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ animation: 'shine 3s ease-in-out infinite' }}
      />
      <span className={clsx('relative z-10 font-semibold', textColor)}>
        {children ?? text}
      </span>
      <style jsx>{`
        @keyframes shine {
          0%,
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function ElevatedBadge({ text, children, backgroundColor, textColor }: BadgeProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full px-4 py-1.5 text-sm',
        backgroundColor,
      )}
      style={{
        boxShadow:
          '0 4px 14px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <span className={clsx('font-semibold', textColor)}>{children ?? text}</span>
    </div>
  );
}

export function Badge({
  text,
  children,
  variant = 'ring-glow',
  icon,
  className,
  backgroundColor = 'bg-neutral-100',
  textColor = 'text-neutral-700',
  color = 'neutral',
  size = 'medium',
}: BadgeProps) {
  switch (variant) {
    case 'ring-glow':
      return (
        <RingGlowBadge text={text} backgroundColor={backgroundColor} textColor={textColor}>
          {children}
        </RingGlowBadge>
      );
    case 'dot-glass':
      return (
        <DotGlassBadge text={text} backgroundColor={backgroundColor} textColor={textColor}>
          {children}
        </DotGlassBadge>
      );
    case 'gradient-shine':
      return (
        <GradientShineBadge text={text} textColor={textColor}>
          {children}
        </GradientShineBadge>
      );
    case '3d-elevated':
      return (
        <ElevatedBadge text={text} backgroundColor={backgroundColor} textColor={textColor}>
          {children}
        </ElevatedBadge>
      );
    case 'tag':
      return (
        <span
          className={clsx(
            'font-mono text-[0.625rem]/6 font-semibold',
            tagSizeStyles[size],
            tagColorStyles[color][size],
            className,
          )}
        >
          {children ?? text}
        </span>
      );
    default:
      return (
        <span className={clsx(labelVariants[variant], className)}>
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
          {children ?? text}
        </span>
      );
  }
}
