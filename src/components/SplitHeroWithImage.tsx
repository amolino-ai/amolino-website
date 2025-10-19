'use client';

import type { HeroContent } from '@/lib/content';
import { useState } from 'react';
import VideoModal from './VideoModal';

interface SplitHeroWithImageProps {
  content: HeroContent;
}

export default function SplitHeroWithImage({ content }: SplitHeroWithImageProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
    <div className="relative isolate overflow-hidden bg-white dark:bg-neutral-900">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-neutral-200 dark:stroke-white/10"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-7xl dark:text-white">
            {content.headline}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-neutral-500 sm:text-xl/8 dark:text-neutral-400">
            {content.subheadline}
          </p>

          {/* Supporting Stats */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {content.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-x-6">
            <a
              href={content.ctas.primaryUrl}
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:outline-primary-500"
            >
              Book a Demo
            </a>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="text-sm/6 font-semibold text-neutral-900 transition-colors hover:text-neutral-700 dark:text-white dark:hover:text-neutral-300"
            >
              Watch 2-Min Overview <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Tertiary CTA */}
          <div className="mt-6">
            <a href={content.ctas.tertiaryUrl} className="text-sm/6 font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-neutral-900/5 p-2 ring-1 ring-neutral-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-white/2.5 dark:ring-white/10">
              <img
                alt={content.images.light.alt}
                src={content.images.light.src}
                width={content.images.light.width}
                height={content.images.light.height}
                className="w-304 rounded-md bg-neutral-50 shadow-xl ring-1 ring-neutral-900/10 dark:hidden"
              />
              <img
                alt={content.images.dark.alt}
                src={content.images.dark.src}
                width={content.images.dark.width}
                height={content.images.dark.height}
                className="w-304 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 not-dark:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl={content.ctas.secondaryUrl} />
    </>
  );
}
