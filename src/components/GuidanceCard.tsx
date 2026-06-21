'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

export interface GuidanceItem {
  label: string;
}

export type GuidanceVariant = 'avoid' | 'recommended';

interface ItemProps {
  label: string;
  variant: GuidanceVariant;
  index: number;
}

function Item({ label, variant, index }: ItemProps) {
  const [hovered, setHovered] = useState(false);
  const isAvoid = variant === 'avoid';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        'flex items-center gap-3 px-3.5 py-2.5 rounded-lg cursor-default transition-colors duration-150',
        hovered && (isAvoid ? 'bg-error-500/5' : 'bg-success-500/5')
      )}
    >
      {/* Index number */}
      <span
        className={clsx(
          'font-mono text-[10px] font-semibold min-w-4 tracking-wide',
          isAvoid ? 'text-error-800/35' : 'text-success-800/35'
        )}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Dot */}
      <div
        className={clsx(
          'w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-150',
          isAvoid ? 'bg-error-500/50' : 'bg-success-500/60',
          hovered && 'scale-150'
        )}
      />

      {/* Label */}
      <span
        className={clsx(
          'text-sm font-medium leading-tight tracking-tight',
          isAvoid ? 'text-error-950' : 'text-success-950'
        )}
      >
        {label}
      </span>
    </div>
  );
}

export interface GuidanceCardProps {
  /** Card variant - determines colors and styling */
  variant: GuidanceVariant;
  /** Card title */
  title: string;
  /** Badge text (e.g., "Avoid", "Recommended") */
  badge?: string;
  /** List of items to display */
  items: (string | GuidanceItem)[];
  /** Optional footer note */
  footerNote?: string;
  /** Additional CSS class */
  className?: string;
}

export function GuidanceCard({
  variant,
  title,
  badge,
  items,
  footerNote,
  className,
}: GuidanceCardProps) {
  const isAvoid = variant === 'avoid';

  const defaultBadge = isAvoid ? 'Avoid' : 'Recommended';
  const displayBadge = badge ?? defaultBadge;

  return (
    <div
      className={clsx(
        'flex-1 min-w-0 rounded-2xl border p-7 flex flex-col gap-1.5 relative overflow-hidden',
        isAvoid
          ? 'border-error-500/15 bg-gradient-to-br from-error-50 to-error-100/50'
          : 'border-success-500/20 bg-gradient-to-br from-success-50 to-success-100/50',
        className
      )}
    >
      {/* Subtle background texture circle */}
      <div
        className={clsx(
          'absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-[0.07] pointer-events-none',
          isAvoid ? 'bg-error-500' : 'bg-success-500'
        )}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div
            className={clsx(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-2.5',
              isAvoid ? 'bg-error-500/10' : 'bg-success-500/10'
            )}
          >
            <span className="text-[10px]">{isAvoid ? '✗' : '✓'}</span>
            <span
              className={clsx(
                'font-mono text-[9px] font-semibold tracking-widest uppercase',
                isAvoid ? 'text-error-700' : 'text-success-700'
              )}
            >
              {displayBadge}
            </span>
          </div>
          <h3
            className={clsx(
              'text-lg font-bold tracking-tight leading-tight',
              isAvoid ? 'text-error-950' : 'text-success-950'
            )}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Divider */}
      <div
        className={clsx(
          'h-px mb-2.5',
          isAvoid
            ? 'bg-gradient-to-r from-error-500/20 to-transparent'
            : 'bg-gradient-to-r from-success-500/25 to-transparent'
        )}
      />

      {/* Items */}
      <div className="flex flex-col gap-0.5">
        {items.map((item, i) => {
          const label = typeof item === 'string' ? item : item.label;
          return <Item key={i} label={label} variant={variant} index={i} />;
        })}
      </div>

      {/* Footer note */}
      {footerNote && (
        <div
          className={clsx(
            'mt-4 p-3.5 rounded-lg border border-dashed',
            isAvoid
              ? 'bg-error-500/5 border-error-500/15'
              : 'bg-success-500/5 border-success-500/15'
          )}
        >
          <p
            className={clsx(
              'text-[11px] leading-relaxed italic m-0',
              isAvoid ? 'text-error-900/60' : 'text-success-900/60'
            )}
          >
            {footerNote}
          </p>
        </div>
      )}
    </div>
  );
}

/** Wrapper to display two GuidanceCards side by side */
export interface GuidanceCardPairProps {
  /** Optional section label above the cards */
  sectionLabel?: string;
  /** Optional heading above the cards */
  heading?: string;
  /** Props for the "avoid" card */
  avoidCard: Omit<GuidanceCardProps, 'variant'>;
  /** Props for the "recommended" card */
  recommendedCard: Omit<GuidanceCardProps, 'variant'>;
  /** Additional CSS class */
  className?: string;
}

export function GuidanceCardPair({
  sectionLabel,
  heading,
  avoidCard,
  recommendedCard,
  className,
}: GuidanceCardPairProps) {
  return (
    <div className={clsx('w-full', className)}>
      {/* Section header */}
      {(sectionLabel || heading) && (
        <div className="text-center mb-8">
          {sectionLabel && (
            <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 mb-2.5 font-semibold">
              {sectionLabel}
            </p>
          )}
          {heading && (
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              {heading}
            </h2>
          )}
        </div>
      )}

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <GuidanceCard variant="avoid" {...avoidCard} />
        <GuidanceCard variant="recommended" {...recommendedCard} />
      </div>
    </div>
  );
}

export default GuidanceCard;
