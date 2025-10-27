import type { BenefitGroupWhoItsFor } from '@/lib/content/types';

/**
 * Who It's For section displaying target audience cards.
 * Simple card grid that stacks vertically on mobile.
 */
export function WhoItsFor({ title, subtitle, cards }: BenefitGroupWhoItsFor) {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            {title}
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-8 dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
