import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/Navbar'
import { NumbersSection } from './Numbers'

export function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-1 pb-24 sm:pt-24 sm:pb-32 md:pt-24 md:pb-48">
          <h1 className="font-display text-5xl/[1.1] font-semibold tracking-normal text-balance text-gray-950 sm:text-8xl/[1.05] md:text-8xl/[1.05] drop-shadow-sm">
          Real-Time Sales Forecasts That Stay on Track
          </h1>
          <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Sales leaders struggle with unreliable forecasts and missed revenue goals. Amolino provides real-time
            insights, identifying pipeline risks early and offering prescriptive actions to drive accurate, confident
            sales projections.
          </p>

          <div className="mt-12">
            <NumbersSection />
          </div>
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
