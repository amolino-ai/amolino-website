import { Container } from '@/components/container'
import { FeatureSection } from '@/components/feature-section'
import { IntegrationsSection } from '@/components/integrations-section'
import { LogoCloud } from '@/components/logo-cloud'
import type { Metadata } from 'next'
import { BentoSection } from './page/components/bento-section'
import { DarkBentoSection } from './page/components/dark-bento-section'
import { Hero } from './page/components/hero'
import { SecuritySection } from './page/components/security-section'

export const metadata: Metadata = {
  description: 'Amolino helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero section - full width background with contained content */}
      <Hero />
      
      <main>
        {/* Logo cloud - contained */}
        <Container className="mt-10">
          <LogoCloud />
        </Container>

        {/* Feature section - full width background with contained content */}
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>

        {/* Dark bento section - likely full width */}
        <DarkBentoSection />
        
        {/* Integrations section - likely full width */}
        <IntegrationsSection />
      </main>
      
      {/* Security section - likely full width */}
      <SecuritySection />
    </div>
  )
}