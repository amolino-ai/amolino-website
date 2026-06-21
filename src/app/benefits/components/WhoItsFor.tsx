import type { BenefitGroupWhoItsFor } from '@/lib/content/types';

/**
 * Who It's For section displaying target audience cards.
 * Simple card grid that stacks vertically on mobile.
 */
export function WhoItsFor({ title, subtitle, cards }: BenefitGroupWhoItsFor) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-2xl bg-neutral-50 p-8"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {card.title}
              </h3>
              <p className="text-base text-neutral-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
