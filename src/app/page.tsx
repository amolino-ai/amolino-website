import { Container } from '@/components/Container';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { LogoCloud } from '@/components/LogoCloud';
import OutcomeSection from '@/components/OutcomeSection';
import ProblemSection from '@/components/ProblemSection';
import SplitHeroWithImage from '@/components/SplitHeroWithImage';
import {
  getHeroContent,
  getProblemContent,
  getOutcomeContent,
  getSecuritySectionContent,
  getIntegrationsSectionContent,
} from '@/lib/content';
import type { Metadata } from 'next';
import { SecuritySection } from './page/components/security-section';

export const metadata: Metadata = {
  description: 'Amolino helps you sell more by revealing sensitive information about your customers.',
};

export default async function Home() {
  const heroContent = await getHeroContent();
  const problemContent = await getProblemContent();
  const outcomeContent = await getOutcomeContent();
  const securitySectionContent = await getSecuritySectionContent();
  const integrationsSectionContent = await getIntegrationsSectionContent();

  return (
    <>
      {/* Hero section - full width background with contained content */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <SplitHeroWithImage content={heroContent} />
      </div>

      {/* Hero with Numbers section */}
       {/*<Hero numbersContent={numbersContent} /> */}

      {/* Problem section - full width with teal gradient background */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
        <ProblemSection content={problemContent} />
      </div>

      {/* Outcome section - full width */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
        <OutcomeSection content={outcomeContent} />
      </div>

      <div className="overflow-hidden">


      <main>
        {/* Logo cloud - contained */}
        <Container className="mt-10">
          <LogoCloud />
        </Container>

        {/* Feature section - full width background with contained content */}
        {/* <div className="bg-linear-to-b from-white from-50% to-neutral-100 py-32">
          <FeatureSection content={featureSectionContent} /> */}
          {/* <BentoSection content={bentoSectionContent} /> */}
        {/* </div> */}

        {/* Dark bento section - use dark prop: <BentoSection content={darkBentoSectionContent} dark /> */}

        {/* Integrations section - likely full width */}
        <IntegrationsSection content={integrationsSectionContent} />
      </main>

      {/* Security section - likely full width */}
      <SecuritySection content={securitySectionContent} />
      </div>
    </>
  );
}