import { Container } from '@/components/container'
import { FeatureSection } from '@/components/feature-section'
import { IntegrationsSection } from '@/components/integrations-section'
import { LogoCloud } from '@/components/logo-cloud'
import { Testimonials } from '@/components/testimonials'
import type { Metadata } from 'next'
import { BentoSection } from './page/bento-section'
import { DarkBentoSection } from './page/dark-bento-section'
import { Hero } from './page/hero'
import { SecuritySection } from './page/security-section'

export const metadata: Metadata = {
  description: 'Amolino helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>

        <DarkBentoSection />
        <IntegrationsSection />
      </main>
      <Testimonials />
      <SecuritySection />
    </div>
  )
}
