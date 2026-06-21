import { Link } from '@/components/Link';
import { Screenshot } from '@/components/Screenshot';
import type { BentoItem } from '@/lib/content/types';

export interface TwoRowBentoProps {
  title: string;
  subtitle: string;
  tagline: string;
  items: BentoItem[];
}

/**
 * Two-row bento grid layout with asymmetric columns (4-2, 2-4 pattern).
 * Expects 4 items with images at the top of each card.
 * Mobile: Single column with all items stacking vertically.
 */
export function TwoRowBento({ title, subtitle, tagline, items }: TwoRowBentoProps) {
  // Limit to 4 items for this layout
  const displayItems = items.slice(0, 4);

  return (
    <div className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary-600">{tagline}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
          {title}
        </p>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          {subtitle}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {displayItems.map((item, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;
            const isThird = index === 2;
            const isFourth = index === 3;

            const colSpan = isFirst || isFourth ? 'lg:col-span-4' : 'lg:col-span-2';
            const roundedClass = isFirst
              ? 'max-lg:rounded-t-4xl lg:rounded-tl-4xl'
              : isSecond
              ? 'lg:rounded-tr-4xl'
              : isThird
              ? 'lg:rounded-bl-4xl'
              : 'max-lg:rounded-b-4xl lg:rounded-br-4xl';

            const content = (
              <>
                <Screenshot
                  width={item.screenshot.width}
                  height={item.screenshot.height}
                  src={item.screenshot.src}
                  cover={true}
                  objectPosition="left"
                  className="h-80"
                />
                <div className="p-10">
                  {item.category && (
                    <h3 className="text-sm/4 font-semibold text-neutral-500">
                      {item.category}
                    </h3>
                  )}
                  <p className="mt-2 text-lg font-medium tracking-tight text-neutral-900">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-neutral-600">
                    {item.description}
                  </p>
                  {item.ctaText && (
                    <p className="mt-3 text-sm font-medium text-primary-600">
                      {item.ctaText} →
                    </p>
                  )}
                </div>
              </>
            );

            return (
              <div key={item.title} className={`flex p-px ${colSpan}`}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 ${roundedClass} transition-transform hover:scale-[1.02]`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className={`w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 ${roundedClass}`}>
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}