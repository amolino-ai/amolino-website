import { GradientBackground } from '@/components/Gradient';
import { Link } from '@/components/Link';
import type { BenefitGroupHero, BenefitGroupProblems } from '@/lib/content/types';

interface BenefitHeroProps {
  hero: BenefitGroupHero;
  problems: BenefitGroupProblems;
}

/**
 * Combined hero and problems section for benefit group pages.
 * Features a gradient hero with title/subtitle/description and CTA,
 * followed by problem cards with icons.
 * Mobile: Cards stack vertically below hero content.
 */

// ${hero.backgroundGradient}
export function BenefitHero({ hero, problems }: BenefitHeroProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-gradient-to-br  py-24 sm:py-32`}>
      <GradientBackground />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15 dark:opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        {/* Problems Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              {problems.title}
            </h2>
            <p className="mt-6 text-lg text-black/80">
              {problems.subtitle}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {problems.cards.map((card) => (
              <div
                key={card.title}
                className="flex gap-x-4 rounded-xl bg-white/30 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl" aria-hidden="true">
                  {card.icon}
                </div>
                <div className="text-base/7">
                  <h3 className="font-semibold text-black">{card.title}</h3>
                  <p className="mt-2 text-black/80">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
