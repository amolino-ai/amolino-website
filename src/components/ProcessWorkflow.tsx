import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import type { BenefitGroupHowItWorks } from '@/lib/content/types';

/**
 * Process workflow component displaying step-by-step process with optional testimonial.
 * Features numbered steps with icons and descriptions on the left,
 * optional testimonial with quote on the right.
 * Mobile: Testimonial moves below steps in single column layout.
 */
export function ProcessWorkflow({ title, subtitle, steps, testimonial }: BenefitGroupHowItWorks) {
  // Map of icon names to Heroicon components (can be extended)
  const iconMap: Record<string, typeof CloudArrowUpIcon> = {
    'cloud': CloudArrowUpIcon,
    'lock': LockClosedIcon,
    'server': ServerIcon,
  };

  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-primary-600">How It Works</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-xl/8 text-neutral-700">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          {testimonial && (
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                aria-hidden="true"
                className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-neutral-900/10"
              >
                <defs>
                  <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <figure className="border-l border-primary-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-neutral-900">
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <img
                    alt={testimonial.author}
                    src={testimonial.avatar}
                    className="mt-1 size-10 flex-none rounded-full bg-neutral-50"
                  />
                  <div className="text-sm/6">
                    <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                    <div className="text-neutral-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          )}
          <div className={`max-w-xl text-base/7 text-neutral-600 ${testimonial ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-neutral-600">
              {steps.map((step, index) => {
                const Icon = iconMap[step.icon] || CloudArrowUpIcon;

                return (
                  <li key={index} className="flex gap-x-3">
                    <Icon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-primary-600"
                    />
                    <span>
                      <strong className="font-semibold text-neutral-900">
                        Step {index + 1}: {step.title}
                      </strong>{' '}
                      {step.description}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
