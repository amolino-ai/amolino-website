import Image from 'next/image';
import type { BenefitGroupStats } from '@/lib/content/types';

/**
 * A flexible stats showcase component for displaying metrics in a clean grid layout.
 * Features background imagery and a 4-column responsive grid.
 * Mobile-responsive with vertical stacking on smaller screens.
 */
export function StatsShowcase({ title, subtitle, metrics }: BenefitGroupStats) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=screen&sat=-100&exp=15"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          loading="lazy"
          quality={80}
        />
      </div>
      <div className="absolute inset-0 -z-10 not-">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          quality={80}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1266/975 w-316.5 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base/8 font-semibold text-primary-600">The Outcome</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
            {title}
          </p>
          <p className="mt-6 text-lg/8 text-neutral-700">
            {subtitle}
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-neutral-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col gap-y-3 border-l border-neutral-900/15 pl-6">
              <dt className="text-sm/6">{metric.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
