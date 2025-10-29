import { Link } from '@/components/Link';
import type { BentoItem } from '@/lib/content/types';

export interface ThreeColumnBentoProps {
  title: string;
  subtitle: string;
  tagline: string;
  items: BentoItem[];
}

/**
 * Three-column bento grid layout with a tall showcase on the left.
 * Expects 4 items: 1 showcase (tall left) + 3 regular features (right side).
 * Mobile: Single column with all items stacking vertically.
 */
export function ThreeColumnBento({ title, subtitle, tagline, items }: ThreeColumnBentoProps) {
  // Limit to 4 items for this layout
  const showcaseItem = items[0];
  const regularItems = items.slice(1, 4);

  return (
    <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          {tagline}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl dark:text-white">
          {title}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Showcase Item - Tall left column */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl dark:bg-gray-800" />
            {showcaseItem.href ? (
              <Link
                href={showcaseItem.href}
                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] transition-transform hover:scale-[1.02]"
              >
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                    {showcaseItem.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                    {showcaseItem.description}
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl dark:shadow-none dark:outline dark:outline-white/20">
                    <img
                      alt={showcaseItem.title}
                      src={showcaseItem.image}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                    {showcaseItem.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                    {showcaseItem.description}
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl dark:shadow-none dark:outline dark:outline-white/20">
                    <img
                      alt={showcaseItem.title}
                      src={showcaseItem.image}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl dark:outline-white/15" />
          </div>

          {/* Regular Items */}
          {regularItems.map((item, index) => {
            const isFirst = index === 0;
            const isMiddle = index === 1;
            const isLast = index === regularItems.length - 1;

            // Grid positioning classes
            let gridClass = '';
            if (isFirst) {
              gridClass = 'max-lg:row-start-1';
            } else if (isMiddle) {
              gridClass = 'max-lg:row-start-3 lg:col-start-2 lg:row-start-2';
            } else if (isLast) {
              gridClass = 'lg:row-span-2';
            }

            const roundedClass = isFirst
              ? 'max-lg:rounded-t-4xl'
              : isLast
              ? 'max-lg:rounded-b-4xl lg:rounded-r-4xl'
              : '';

            const content = (
              <>
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <div className={`flex flex-1 items-center ${isMiddle ? 'max-lg:py-6 lg:pb-2' : 'justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2'}`}>
                  <img
                    alt={item.title}
                    src={item.image}
                    className={`${isMiddle ? 'h-[min(152px,40cqw)] object-cover' : 'w-full max-lg:max-w-xs'} dark:hidden`}
                  />
                  <img
                    alt={item.title}
                    src={item.image}
                    className={`${isMiddle ? 'h-[min(152px,40cqw)] object-cover' : 'w-full max-lg:max-w-xs'} not-dark:hidden`}
                  />
                </div>
              </>
            );

            return (
              <div
                key={item.title}
                className={`relative ${gridClass}`}
              >
                <div className={`absolute inset-px rounded-lg bg-white ${roundedClass} dark:bg-gray-800`} />
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
                <div className={`pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 ${roundedClass} dark:outline-white/15`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
