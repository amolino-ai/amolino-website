'use client';

import type { HeroContent } from '@/lib/content';
import { useState } from 'react';
import Link from 'next/link';
import VideoModal from '@/components/VideoModal';
import { AnimatedNumber } from '@/components/AnimatedNumber';

interface SplitHeroWithImageProps {
  content: HeroContent;
}

/*
 * loads either a mobile image or desktop image. We do transforms on teh desktop image but not
  * on the mobile image.
  * On the desktop image we have a 3D tilt effect with some perspective.
  * Also, the image is revleaved as the browser is increased in widdth. We want to set the image to 
  * 1.2x the width of the browser. but that is done based on the initial width of the browser when the component
  * is loaded. 
  * The key line of code that does that is 
  * className="hidden lg:block h-auto max-w-none bg-neutral-900 ring-1 ring-white/10 will-change-transform w-[1200px] xl:w-[1536px] 2xl:w-[1843px]"
  * Here the width is set based on the breakpoints.
<  1200px for large screens (1024px and up)
  1536px for extra large screens (1280px and up)
  1843px for 2x extra large screens (1536px and up)>

  This is designed to be 1.2x the width of the screen at those breakpoints.

 */

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

      <div className="relative isolate overflow-hidden  bg-white">
        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:px-8 lg:pt-24 lg:pb-20">
          {/* Centered Text Content */}
          <div className="mx-auto max-w-6xl text-center">
            <h1
              className="animate-fade-up text-balance text-5xl font-medium tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl"
              style={{ '--animation-delay': '100ms' } as React.CSSProperties}
            >
              {content.headline}
            </h1>
            <p
              className="animate-fade-up mx-auto mt-6 max-w-3xl text-pretty text-lg text-neutral-500 sm:text-xl/8"
              style={{ '--animation-delay': '300ms' } as React.CSSProperties}
            >
              {content.subheadline}
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-4"
              style={{ '--animation-delay': '500ms' } as React.CSSProperties}
            >
              <a
                href={content.ctas.primaryUrl}
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Book a Demo
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-700"
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

        {/* Image Container - Edge to edge with 3D tilt and pinned layout
          Don't change the overflow visible
        */}
        <div className="overflow-x-clip ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`animate-fade-up relative sm:-mt-[20px] lg:-mt-[80px] z-10 overflow-visible`}
              style={{ '--animation-delay': '900ms' } as React.CSSProperties}
            >
              <div className="relative flex justify-center">
                {/* Image Frame with 3D perspective */}
                <div
                  className={`relative origin-left bg-white/5   ring-1
                  ring-white/10 p-0 lg:p-2
                  overflow-visible
                  `}
                  style={{
                    perspective: '4000px',
                    perspectiveOrigin: '55% 50%', // optional: bias vanishing point slightly left
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Gradient overlay for fade effect */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.9) 100%)',
                    }}
                  />

                {/* w-[4000px] lg:w-[4000px] xl:w-[5096px] 2xl:w-[4096px] */}
                 
                {/* Desktop image - hidden on mobile */}
                <img
                  alt={content.images.desktop.dark.alt}
                  src={content.images.desktop.dark.src}
                  width={content.images.desktop.dark.width}
                  height={content.images.desktop.dark.height}
                  className={`
                  block h-auto max-w-none ring-1 ring-white/10 will-change-transform
                  w-[750px] lg:w-[2000px] xl:w-[2000px] 2xl:w-[2000px] 
                  [transform-origin:left_center]
                  [transform:rotateY(12deg)_rotateX(40deg)_rotateZ(-12deg)_translateZ(-10px)_translateX(150px)_translateY(50px)]
                  sm:[transform:rotateY(12deg)_rotateX(40deg)_rotateZ(-12deg)_translateZ(-10px)_translateX(100px)_translateY(25px)]
                  md:[transform:rotateY(12deg)_rotateX(40deg)_rotateZ(-12deg)_translateZ(-10px)_translateX(50px)_translateY(25px)]
                  lg:[transform:rotateY(12deg)_rotateX(40deg)_rotateZ(-12deg)_translateZ(-10px)_translateX(500px)_translateY(100px)]
                  xl:[transform:rotateY(12deg)_rotateX(40deg)_rotateZ(-12deg)_translateZ(-10px)_translateX(400px)_translateY(100px)]
                  2xl:[transform:rotateY(12deg)_rotateX(40deg)_rotateZ(-12deg)_translateZ(-10px)_translateX(400px)_translateY(100px)]
                  scale-[1.2] sm:scale-[1.2] md:scale-[1.2] lg:scale-[1.0] xl:scale-[1.0] 2xl:scale-[0.8] 
            `}

                  style={{
                    /* Flip the Y rotation */
                    // transform: 'rotateY(11deg) rotateX(25deg) rotateZ(-15deg) translateZ(-10px)  ',
                    // transformOrigin: 'left center',
                    //filter: 'drop-shadow(0 42px 110px rgba(0,0,0,0.45))',
                    // when we comment out the following mask, the imgage floats above the div below which is a nice effect
                    // WebkitMaskImage: 'linear-gradient(to bottom, white 90%, transparent 100%)',
                    // maskImage: 'linear-gradient(to bottom, white 90%, transparent 100%)',
                    // WebkitMaskRepeat: 'no-repeat',
                    // maskRepeat: 'no-repeat',
                    WebkitMaskImage: 'linear-gradient(to right, white 0%, white 30%, transparent 70%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, white 0%, white 30%, transparent 70%, transparent 100%)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                  }}
                  loading="eager"
                  decoding="async"
                />


                {/* Mobile image - hidden on desktop */}
                {/* <img
                alt={content.images.mobile.dark.alt}
                src={content.images.mobile.dark.src}
                width={content.images.mobile.dark.width}
                height={content.images.mobile.dark.height}
                className="block lg:hidden w-full h-auto"
                loading="eager"
                decoding="async"
              /> */}

              </div>

              {/* Ambient glow effect */}
              {/* <div className="pointer-events-none absolute inset-x-0 -bottom-8 -z-10 h-48 bg-gradient-to-t from-white via-white/80 to-transparent blur-3xl" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Stats Container */}

        {/* This gives a full-bleed background */}
        <div className="w-full bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 flex items-center justify-center">
            {/* Supporting Stats */}
            <div
              className="mx-auto w-full max-w-4xl"
              style={{ '--animation-delay': '1100ms' } as React.CSSProperties}
            >
              <div className={`
                grid grid-cols-3 gap-2 sm:gap-6 text-center 
              `}>
                {content.stats.map((stat, index) => {
                  const match = stat.value.match(/^(\d+(?:\.\d+)?)(.*)$/);
                  const value = match ? parseFloat(match[1]) : 0;
                  const suffix = match ? match[2] : '';
                  const decimals = value % 1 !== 0 ? 1 : 0;

                  return (
                    <Link
                      key={index}
                      href={stat.url}
                      className={`
                        group w-full
                        rounded-lg sm:rounded-xl px-2 py-6 sm:px-4 sm:py-6
                        transition-all duration-300 ease-out
                        relative z-20

                        /* Mobile: subtle border and shadow for affordance */
                        border border-neutral-200 shadow-lg shadow-neutral-900/5

                        bg-neutral-50/50

                        /* Desktop hover: raised card effect */
                        lg:hover:bg-neutral-100 lg:hover:border-neutral-300
                        lg:hover:shadow-xl lg:hover:shadow-neutral-900/10
                        lg:hover:-translate-y-1

                        /* Active/pressed state */
                        active:scale-[0.98]

                        /* Focus visible for keyboard navigation */
                        focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-primary-500
                      `}
                    >
                      <div className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 lg:text-5xl transition-colors lg:group-hover:text-primary-600">
                        <AnimatedNumber start={0} end={value} decimals={decimals} />
                        {suffix}
                      </div>
                      <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold tracking-tight text-neutral-600 transition-colors lg:group-hover:text-neutral-700">
                        {stat.description}
                      </div>
                    </Link>
                  );
                })}
              </div>
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
