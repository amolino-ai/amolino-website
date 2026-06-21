import { Link } from '@/components/Link';
import { Screenshot } from '@/components/Screenshot';
import type { BentoItem } from '@/lib/content/types';

export interface TwoRowThreeColumnBentoProps {
  title: string;
  subtitle: string;
  tagline: string;
  items: BentoItem[];
}

/**
 * Two-row three-column bento grid layout with balanced distribution.
 * Expects 5 items: First row has 2 items (3 cols each), second row has 3 items (2 cols each).
 * Mobile: Single column with all items stacking vertically.
 */
export function TwoRowThreeColumnBento({ title, subtitle, tagline, items }: TwoRowThreeColumnBentoProps) {
  // Display up to 5 items for this layout
  const displayItems = items.slice(0, 5);

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
            // Determine column span based on position
            // First row (0-1): col-span-3 each, Second row (2-4): col-span-2 each
            const colSpan = index <= 1 ? 'lg:col-span-3' : 'lg:col-span-2';
            
            // Wider items (col-span-3) should have object-left
            const shouldHaveObjectLeft = index <= 1;

            let roundedClass = '';
            if (index === 0) roundedClass = 'max-lg:rounded-t-4xl lg:rounded-tl-4xl';
            else if (index === 1) roundedClass = 'lg:rounded-tr-4xl';
            else if (index === 2) roundedClass = 'lg:rounded-bl-4xl';
            else if (index === 4) roundedClass = 'max-lg:rounded-b-4xl lg:rounded-br-4xl';

            const content = (
              <>
                <Screenshot
                  width={item.screenshot.width}
                  height={item.screenshot.height}
                  src={item.screenshot.src}
                  cover={true}
                  objectPosition={shouldHaveObjectLeft ? 'left' : 'center'}
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