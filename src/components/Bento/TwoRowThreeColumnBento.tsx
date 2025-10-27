import { Link } from '@/components/Link';
import type { BentoItem } from '@/lib/content/types';

export interface TwoRowThreeColumnBentoProps {
  title: string;
  subtitle: string;
  tagline: string;
  items: BentoItem[];
}

/**
 * Two-row three-column bento grid layout with balanced distribution.
 * Expects 6 items: First row has 2 items (3 cols each), second row has 3 items (2 cols each).
 * Mobile: Single column with all items stacking vertically.
 */
export function TwoRowThreeColumnBento({ title, subtitle, tagline, items }: TwoRowThreeColumnBentoProps) {
  // Display up to 5 items for this layout
  const displayItems = items.slice(0, 6);

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{tagline}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl dark:text-white">
          {title}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {displayItems.map((item, index) => {
            // Determine column span and rounding based on position
            const isLeft = index === 0 || index === 3;
            const isRight = index === 1 || index === 5;

            const colSpan = isLeft || isRight ? 'lg:col-span-3' : 'lg:col-span-2';

            let roundedClass = '';
            if (index === 0) roundedClass = 'max-lg:rounded-t-4xl lg:rounded-tl-4xl';
            else if (index === 1) roundedClass = 'lg:rounded-tr-4xl';
            else if (index === 3) roundedClass = 'lg:rounded-bl-4xl';
            else if (index === 5) roundedClass = 'max-lg:rounded-b-4xl lg:rounded-br-4xl';

            const content = (
              <>
                <img
                  alt={item.title}
                  src={item.image}
                  className={`h-80 object-cover ${isLeft ? 'object-left' : isRight ? 'lg:object-right' : ''} dark:hidden`}
                />
                <img
                  alt={item.title}
                  src={item.image}
                  className={`h-80 object-cover ${isLeft ? 'object-left' : isRight ? 'not-dark:hidden lg:object-right' : 'not-dark:hidden'} not-dark:hidden`}
                />
                <div className="p-10 pt-4">
                  {item.category && (
                    <h3 className="text-sm/4 font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.category}
                    </h3>
                  )}
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </>
            );

            return (
              <div key={item.title} className={`relative ${colSpan}`}>
                <div className={`absolute inset-0 rounded-lg bg-white ${roundedClass} dark:bg-gray-800`} />
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${roundedClass.replace('4xl', '[calc(2rem+1px)]')} transition-transform hover:scale-[1.02]`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${roundedClass.replace('4xl', '[calc(2rem+1px)]')}`}>
                    {content}
                  </div>
                )}
                <div className={`pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 ${roundedClass} dark:outline-white/15`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
