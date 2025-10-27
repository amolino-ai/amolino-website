import { BenefitHero } from '../components/BenefitHero';
import { StatsShowcase } from '@/components/StatsShowcase';
import { BenefitFeatures } from '../components/BenefitFeatures';
import { ProcessWorkflow } from '@/components/ProcessWorkflow';
import { ComparisonTable } from '@/components/ComparisonTable';
import { WhoItsFor } from '../components/WhoItsFor';
import { FinalCTA } from '../components/FinalCTA';
import { getBenefitGroupContent } from '@/lib/content';

interface BenefitGroupPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate static params for all benefit group pages.
 * This enables SSG (Static Site Generation) at build time.
 *
 * NOTE: Uncomment additional slugs once their YAML files are created in
 * content/pages/benefit-groups/
 */
export function generateStaticParams() {
  return [
    { slug: 'make-every-rep-your-best-rep' },
    // { slug: 'explainable-ai-forecast' },
    // { slug: 'prevent-deal-slippage' },
  ];
}

/**
 * Dynamic benefit group page.
 * Displays content for various benefit groups like:
 * - make-every-rep-your-best-rep
 * - explainable-ai-forecast
 * - prevent-deal-slippage
 */
export default async function BenefitGroupPage({ params }: BenefitGroupPageProps) {
  const { slug } = await params;
  const content = await getBenefitGroupContent(slug);

  return (
    <main>
      <BenefitHero hero={content.hero} problems={content.problems} />

      <BenefitFeatures {...content.features} />
      <StatsShowcase {...content.stats} />
      <ProcessWorkflow {...content.howItWorks} />
      <ComparisonTable {...content.comparison} />
      <WhoItsFor {...content.whoItsFor} />
      <FinalCTA {...content.cta} />
    </main>
  );
}
