import { Link } from '@/components/Link';
import { Screenshot } from '@/components/Screenshot';
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
    <div className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-primary-600">
          {tagline}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-5xl">
          {title}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
          {subtitle}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Showcase Item - Tall left column */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            {showcaseItem.href ? (
              <Link
                href={showcaseItem.href}
                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] transition-transform hover:scale-[1.02]"
              >
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-neutral-950 max-lg:text-center">
                    {showcaseItem.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 max-lg:text-center">
                    {showcaseItem.description}
                  </p>
                  {showcaseItem.ctaText && (
                    <p className="mt-3 text-sm font-medium text-primary-600 max-lg:text-center">
                      {showcaseItem.ctaText} →
                    </p>
                  )}
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-neutral-900/10 bg-neutral-900 shadow-2xl">
                    <Screenshot
                      width={showcaseItem.screenshot.width}
                      height={showcaseItem.screenshot.height}
                      src={showcaseItem.screenshot.src}
                      cover={true}
                      objectPosition="top"
                      className="size-full"
                    />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-neutral-950 max-lg:text-center">
                    {showcaseItem.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 max-lg:text-center">
                    {showcaseItem.description}
                  </p>
                  {showcaseItem.ctaText && (
                    <p className="mt-3 text-sm font-medium text-primary-600 max-lg:text-center">
                      {showcaseItem.ctaText} →
                    </p>
                  )}
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-neutral-900/10 bg-neutral-900 shadow-2xl">
                    <Screenshot
                      width={showcaseItem.screenshot.width}
                      height={showcaseItem.screenshot.height}
                      src={showcaseItem.screenshot.src}
                      cover={true}
                      objectPosition="top"
                      className="size-full"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
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
                  <p className="mt-2 text-lg font-medium tracking-tight text-neutral-950 max-lg:text-center">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 max-lg:text-center">
                    {item.description}
                  </p>
                  {item.ctaText && (
                    <p className="mt-3 text-sm font-medium text-primary-600 max-lg:text-center">
                      {item.ctaText} →
                    </p>
                  )}
                </div>
                {/* Note: Original has separate light/dark mode images which aren't supported here */}
                <div className={`${isMiddle ? '@container flex flex-1 items-center max-lg:py-6 lg:pb-2' : 'flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2'}`}>
                  <Screenshot
                    width={item.screenshot.width}
                    height={item.screenshot.height}
                    src={item.screenshot.src}
                    cover={isMiddle}
                    className={isMiddle ? 'h-[min(152px,40cqw)]' : 'w-full max-lg:max-w-xs'}
                  />
                </div>
              </>
            );

            return (
              <div
                key={item.title}
                className={`relative ${gridClass}`}
              >
                <div className={`absolute inset-px rounded-lg bg-white ${roundedClass}`} />
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
                <div className={`pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 ${roundedClass}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}