'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

import { useSectionStore } from '@/components/SectionProvider';
import { Tag } from '@/components/Tag';
import { remToPx } from '@/lib/remToPx';

/**
 * DocsHeading – documentation-specific heading component with anchor links.
 *
 * @remarks
 * Use this for headings in documentation pages that need automatic table of contents integration.
 * Renders an h2 or h3 with an optional anchor link that appears on hover.
 * Automatically registers with the section store for scroll tracking and navigation.
 *
 * This component is client-side only and tracks viewport visibility for active section highlighting.
 *
 * @example Basic h2 heading
 * ```tsx
 * <DocsHeading level={2} id="introduction">
 *   Introduction
 * </DocsHeading>
 * ```
 *
 * @example With tag and label
 * ```tsx
 * <DocsHeading level={2} id="api" tag="v2" label="Experimental">
 *   API Reference
 * </DocsHeading>
 * ```
 *
 * @see {@link Tag}
 */

function AnchorIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3" />
    </svg>
  );
}

function Eyebrow({ tag, label }: { tag?: string; label?: string }) {
  if (!tag && !label) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-3">
      {tag && <Tag>{tag}</Tag>}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-zinc-300" />
      )}
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </div>
  );
}

function Anchor({
  id,
  inView,
  children,
}: {
  id: string
  inView: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={`#${id}`}
      className="group text-inherit no-underline hover:text-inherit"
    >
      {inView && (
        <div className="absolute mt-1 ml-[calc(-1*var(--width))] hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(var(--container-lg)+(--spacing(8)))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:--spacing(10)]">
          <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-zinc-300 transition ring-inset hover:ring-zinc-500">
            <AnchorIcon className="h-5 w-5 stroke-zinc-500 transition" />
          </div>
        </div>
      )}
      {children}
    </Link>
  );
}

export function DocsHeading<Level extends 2 | 3>({
  children,
  tag,
  label,
  level,
  anchor = true,
  ...props
}: React.ComponentPropsWithoutRef<`h${Level}`> & {
  id: string
  tag?: string
  label?: string
  level?: Level
  anchor?: boolean
}) {
  level = level ?? (2 as Level);
  const Component = `h${level}` as 'h2' | 'h3';
  const ref = useRef<HTMLHeadingElement>(null);
  const registerHeading = useSectionStore((s) => s.registerHeading);

  const inView = useInView(ref, {
    margin: `${remToPx(-3.5)}px 0px 0px 0px`,
    amount: 'all',
  });

  useEffect(() => {
    if (level === 2) {
      registerHeading({ id: props.id, ref, offsetRem: tag || label ? 8 : 6 });
    }
  });

  return (
    <>
      <Eyebrow tag={tag} label={label} />
      <Component
        ref={ref}
        className={tag || label ? 'mt-2 scroll-mt-32' : 'scroll-mt-24'}
        {...props}
      >
        {anchor ? (
          <Anchor id={props.id} inView={inView}>
            {children}
          </Anchor>
        ) : (
          children
        )}
      </Component>
    </>
  );
}