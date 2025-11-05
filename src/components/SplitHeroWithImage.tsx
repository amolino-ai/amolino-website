'use client';

import type { HeroContent } from '@/lib/content';
import { useState } from 'react';
import VideoModal from '@/components/VideoModal';
import { AnimatedNumber } from '@/components/AnimatedNumber';

interface SplitHeroWithImageProps {
  content: HeroContent;
}

export default function SplitHeroWithImage({ content }: SplitHeroWithImageProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.6s ease-out forwards;
          animation-delay: var(--animation-delay, 0ms);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="relative isolate overflow-hidden bg-black">
        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20">
          {/* Centered Text Content */}
          <div className="mx-auto max-w-6xl text-center">
            <h1
              className="animate-fade-up text-balance text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ '--animation-delay': '100ms' } as React.CSSProperties}
            >
              {content.headline}
            </h1>
            <p
              className="animate-fade-up mx-auto mt-6 max-w-3xl text-pretty text-lg text-neutral-400 sm:text-xl/8"
              style={{ '--animation-delay': '300ms' } as React.CSSProperties}
            >
              {content.subheadline}
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-4"
              style={{ '--animation-delay': '500ms' } as React.CSSProperties}
            >
              <a
                href={content.ctas.primaryUrl}
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black shadow-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a Demo
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-neutral-300"
              >
                Watch 2-Min Overview <span aria-hidden="true" className="ml-1">→</span>
              </button>
            </div>

            {/* Tertiary CTA */}
            {/* <div
              className="animate-fade-up mt-6"
              style={{ '--animation-delay': '700ms' } as React.CSSProperties}
            >
              <a
                href={content.ctas.tertiaryUrl}
                className="text-sm font-medium text-neutral-400 hover:text-white"
              >
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div> */}
          </div>
        </div>

        {/* Image Container - Edge to edge with 3D tilt and pinned layout */}
        <div
          className="animate-fade-up relative -mt-2 sm:-mt-2 lg:-mt-2 z-0 overflow-visible"
          style={{ '--animation-delay': '900ms' } as React.CSSProperties}
        >
          <div className="relative">
            {/* Image Frame with 3D perspective */}
            <div
              className="relative origin-left bg-white/5 p-2 shadow-2xl ring-1 ring-white/10 lg:p-4 overflow-visible"
              style={{
                perspective: '1600px',
                transformStyle: 'preserve-3d',
                maxWidth: 'none',
                width: '110vw',
              }}
            >
              {/* Dark mode image with 3D tilt and mask */}
              <img
                alt={content.images.dark.alt}
                src={content.images.dark.src}
                width={content.images.dark.width}
                height={content.images.dark.height}
                className="block h-auto max-w-none bg-neutral-900 ring-1 ring-white/10 will-change-transform"
                style={{
                  width: '1800px',
                  transform: 'rotateY(-9deg) rotateX(3deg) rotateZ(-1.2deg) translateZ(0)',
                  transformOrigin: 'left center',
                  filter: 'drop-shadow(0 50px 120px rgba(0,0,0,0.55))',

                  /* Fade to black at bottom 20–30% */
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 75%, rgba(0,0,0,0) 100%)',
                  maskImage:
                    'linear-gradient(to bottom, black 75%, rgba(0,0,0,0) 100%)',

                  /* optional to soften right edge too */
                  // WebkitMaskComposite: 'source-in',
                  // maskComposite: 'intersect',
                }}
                loading="eager"
                decoding="async"
              />

            </div>

            {/* Ambient glow effect */}
            <div className="pointer-events-none absolute inset-x-0 -bottom-8 -z-10 h-48 bg-gradient-to-t from-black via-black/80 to-transparent blur-3xl" />
          </div>
        </div>

        {/* Supporting Stats Container */}
        <div className="mx-auto max-w-7xl px-6 pb-12 sm:pb-16 lg:px-8 lg:pb-20">
          {/* Supporting Stats */}
          <div
            className="animate-fade-up mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24"
            style={{ '--animation-delay': '1100ms' } as React.CSSProperties}
          >
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-6">
              {content.stats.map((stat, index) => {
                const match = stat.value.match(/^(\d+(?:\.\d+)?)(.*)$/);
                const value = match ? parseFloat(match[1]) : 0;
                const suffix = match ? match[2] : '';
                const decimals = value % 1 !== 0 ? 1 : 0;

                return (
                  <div key={index} className="mx-auto max-w-xs">
                    <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      <AnimatedNumber start={0} end={value} decimals={decimals} />
                      {suffix}
                    </div>
                    <div className="mt-3 text-sm font-medium text-neutral-400">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={content.ctas.secondaryUrl}
      />
    </>
  );
}
