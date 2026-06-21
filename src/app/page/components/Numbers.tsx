import { Subheading } from "@/components/Text";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import type { NumbersContent } from "@/lib/content/types";

interface NumbersSectionProps {
  content: NumbersContent;
}

export function NumbersSection({ content }: NumbersSectionProps) {
    return (
      <div className="max-lg:mt-16 lg:col-span-1">
        <Subheading>{content.title}</Subheading>
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
          {content.stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col gap-y-2 ${
                index === 1 ? 'max-sm:border-b max-sm:border-dotted max-sm:border-neutral-200 max-sm:pb-4' : ''
              }`}
            >
              <dt className="text-sm/6 text-neutral-600">{stat.label}</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={stat.value} decimals={stat.decimals} />
                {stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }