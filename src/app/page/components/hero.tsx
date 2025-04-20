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
          <p className="text-lg font-medium text-gray-950/75 mb-4">
            Quarter‑Ends without Pipeline Panic
          </p>
          <h1 className="font-display text-5xl/[1.1] font-semibold tracking-normal text-balance text-gray-950 drop-shadow-sm sm:text-6xl/[1.05] md:text-6xl/[1.05]">
            The AI Platform for Sales Forecasting, Pipeline Visibility, and Deal Execution.
          </h1>
          <p className="mt-8 max-w-3xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Deal-level telemetry —spot risk before you lose a deal, improve forecast
            accuracy, and guide every rep to close faster.
          </p>

          <div className="mt-6 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Try Amolino Free</Button>
            <Button variant="secondary" href="/demo">
              Book a demo
            </Button>
          </div>

          <div className="mt-12">
            <NumbersSection />
          </div>
          {/* <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://app.amolino.ai">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div> */}
        </div>
      </Container>
    </div>
  )
}
