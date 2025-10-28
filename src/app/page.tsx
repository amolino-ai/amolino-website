import { Container } from '@/components/Container';
import { FeatureSection } from '@/components/FeatureSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { LogoCloud } from '@/components/LogoCloud';
import OutcomeSection from '@/components/OutcomeSection';
import ProblemSection from '@/components/ProblemSection';
import SplitHeroWithImage from '@/components/SplitHeroWithImage';
import {
  getHeroContent,
  getProblemContent,
  getOutcomeContent,
  getNumbersContent,
  getBentoSectionContent,
  getDarkBentoSectionContent,
  getBlindSalesSectionContent,
  getSecuritySectionContent,
  getFeatureSectionContent,
  getIntegrationsSectionContent,
} from '@/lib/content';
import type { Metadata } from 'next';
import { BentoSection } from './page/components/bento-section';
import { DarkBentoSection } from './page/components/dark-bento-section';
import { SecuritySection } from './page/components/security-section';

export const metadata: Metadata = {
  description: 'Amolino helps you sell more by revealing sensitive information about your customers.',
};

export default async function Home() {
  const heroContent = await getHeroContent();
  const problemContent = await getProblemContent();
  const outcomeContent = await getOutcomeContent();
  const numbersContent = await getNumbersContent();
  const bentoSectionContent = await getBentoSectionContent();
  const darkBentoSectionContent = await getDarkBentoSectionContent();
  const securitySectionContent = await getSecuritySectionContent();
  const featureSectionContent = await getFeatureSectionContent();
  const integrationsSectionContent = await getIntegrationsSectionContent();

  return (
    <div className="overflow-hidden">
      {/* Hero section - full width background with contained content */}
      <SplitHeroWithImage content={heroContent} />

      {/* Hero with Numbers section */}
       {/*<Hero numbersContent={numbersContent} /> */}

      {/* Problem section - full width with teal gradient background */}
      <ProblemSection content={problemContent} />

      {/* Outcome section - full width */}
      <OutcomeSection content={outcomeContent} />


      <main>
        {/* Logo cloud - contained */}
        <Container className="mt-10">
          <LogoCloud />
        </Container>

        {/* Feature section - full width background with contained content */}
        {/* <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection content={featureSectionContent} /> */}
          {/* <BentoSection content={bentoSectionContent} /> */}
        {/* </div> */}

        {/* Dark bento section - likely full width */}
        {/* <DarkBentoSection content={darkBentoSectionContent} /> */}

        {/* Integrations section - likely full width */}
        <IntegrationsSection content={integrationsSectionContent} />
      </main>

      {/* Security section - likely full width */}
      <SecuritySection content={securitySectionContent} />
    </div>
  );
}