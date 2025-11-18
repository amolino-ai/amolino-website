import { BenefitHero } from '../components/BenefitHero';
import { FeatureHero } from '../components/FeatureHero';
import { StatsShowcase } from '@/components/StatsShowcase';
import { BenefitFeatures } from '../components/BenefitFeatures';
import { ProcessWorkflow } from '@/components/ProcessWorkflow';
import { ComparisonTable } from '@/components/ComparisonTable';
import { WhoItsFor } from '../components/WhoItsFor';
import { getBenefitGroupContent } from '@/lib/content';
import { getBenefitSlugs } from '@/lib/content/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import type { Metadata } from 'next';

interface BenefitGroupPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate static params for all benefit group pages.
 * This enables SSG (Static Site Generation) at build time.
 */
export async function generateStaticParams() {
  const slugs = await getBenefitSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate metadata for SEO optimization.
 * Uses content from YAML files to populate title, description, and OpenGraph tags.
 */
export async function generateMetadata({ params }: BenefitGroupPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getBenefitGroupContent(slug);

  // Use metadata from YAML if available, otherwise fall back to hero content
  // Note: TITLE_SUFFIX is already applied by root layout's title template
  const title = content.metadata?.title || content.hero.title;
  const description = content.metadata?.description || content.hero.subtitle;
  const image = content.metadata?.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      ...(image && { images: [{ url: image }] }),
    },
    // twitter: {
    //   card: 'summary_large_card',
    //   title,
    //   description,
    //   ...(image && { images: [image] }),
    // },
  };
}

/**
 * Dynamic benefit group page.
 * Displays content for various benefit groups like:
 * - next-best-action-to-win
 * - accurate-forecasting
 * - prevent-deal-slippage
 */
export default async function BenefitGroupPage({ params }: BenefitGroupPageProps) {
  const { slug } = await params;
  const content = await getBenefitGroupContent(slug);

  const breadcrumbItems = [
    { label: 'Benefits', href: '/benefits' },
    { label: content.hero.badgeText || content.hero.title },
  ];

  return (
    <main>
      <Container>
        <Breadcrumb items={breadcrumbItems} className="py-4" />
      </Container>
      {content.featureHero && <FeatureHero {...content.featureHero} />}
      <BenefitHero hero={content.hero} problems={content.problems} />
      <BenefitFeatures {...content.features} />
      <StatsShowcase {...content.stats} />
      <ProcessWorkflow {...content.howItWorks} />
      <ComparisonTable {...content.comparison} />
      <WhoItsFor {...content.whoItsFor} />
    </main>
  );
}
