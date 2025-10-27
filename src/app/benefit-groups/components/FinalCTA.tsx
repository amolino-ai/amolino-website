import { Link } from '@/components/Link';
import type { BenefitGroupCTA } from '@/lib/content/types';

/**
 * Final CTA section with gradient background and centered buttons.
 * Mobile: Buttons stack vertically with full width.
 */
export function FinalCTA({ title, description, backgroundGradient, primaryButton, secondaryButton }: BenefitGroupCTA) {
  return (
    <div className={`relative isolate overflow-hidden bg-gradient-to-br ${backgroundGradient} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={primaryButton.link}
              className="inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryButton.text}
            </Link>
            <Link
              href={secondaryButton.link}
              className="inline-block rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
