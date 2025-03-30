import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/Navbar'
import { Subheading } from '@/components/text'

function NumbersSection() {
  return (
    <div className="max-lg:mt-16 lg:col-span-1">
      <Subheading>The Numbers</Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
          <dt className="text-sm/6 text-gray-600">Raised</dt>
          <dd className="order-first text-6xl font-medium tracking-tight">
            $<AnimatedNumber start={100} end={150} />M
          </dd>
        </div>

        <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
          <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
          <dd className="order-first text-6xl font-medium tracking-tight">
            <AnimatedNumber start={0.9} end={1.5} decimals={1} />M
          </dd>
        </div>
        <div className="flex flex-col gap-y-2">
          <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
          <dd className="order-first text-6xl font-medium tracking-tight">
            <AnimatedNumber start={150} end={200} />M
          </dd>
        </div>
      </dl>
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-1 pb-24 sm:pt-24 sm:pb-32 md:pt-24 md:pb-48">
          <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-8xl/[0.8]">
            Sales Pipeline Analytics and Revenue Forecasting
          </h1>
          <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Deep pipeline analysis uncovers red flags before sales reps see them and delivers prescriptive actions to
            keep revenue on track
          </p>

          <NumbersSection />
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://app.amolino.ai">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 