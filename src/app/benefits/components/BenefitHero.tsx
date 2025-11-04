import { Badge } from '@/components/Badge';
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
    <div className={`relative isolate overflow-hidden bg-gradient-to-br  py-12 sm:py-24`}>
      <GradientBackground variant="subtle" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Problems Section */}
        <div className="mt-6">
          <div className="mx-auto max-w-2xl lg:mx-0">

            {hero.badgeText && (
              <div className="mb-6">
                <Badge
                  text={hero.badgeText}
                  variant='dot-glass'
                />
              </div>
            )}


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
    </div >
  );
}
