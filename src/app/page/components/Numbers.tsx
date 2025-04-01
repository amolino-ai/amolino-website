import { Subheading } from "@/components/text";
import { AnimatedNumber } from "@/components/animated-number";

export function NumbersSection() {
    return (
      <div className="max-lg:mt-16 lg:col-span-1">
        <Subheading>The Numbers</Subheading>
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-y-2 ">
            <dt className="text-sm/6 text-gray-600">Increase in Pipeline</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={1} end={20} />%
            </dd>
          </div>
  
          <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
            <dt className="text-sm/6 text-gray-600">Hours Saved Each Day</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={0} end={2} decimals={1} /> hours
            </dd>
          </div>
          <div className="flex flex-col gap-y-2">
            <dt className="text-sm/6 text-gray-600">Increase in Forecast Accuracy</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={60} end={90} />%
            </dd>
          </div>
        </dl>
      </div>
    )
  }