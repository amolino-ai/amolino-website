import FeatureShowcase from '@/app/features/components/FeatureShowcase';
import BottomFeature from '@/app/features/components/BottomFeature';
import Hero from '@/app/features/components/Hero';
import { getProductContent } from '@/lib/content';
import type { Metadata } from 'next';

// Define product slugs for root-level products only
// (New features are organized under pillar subfolders)
const PRODUCT_SLUGS = [
  'customer-360',
  'guided-selling',
  'revenue-analytics',
  'team-insights',
] as const;

/**
 * Generate static params for all product feature pages at build time
 */
export async function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({
    slug,
  }));
}

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}




/**
 * Generate metadata for SEO optimization.
 * Uses content from YAML files to populate title, description, and OpenGraph tags.
 */
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getProductContent(slug);

  const title = content.metadata?.title || content.hero.title;
  const description = content.metadata?.description || content.hero.description;
  const image = content.metadata?.image;

  return {
    title,
    description,
    alternates: {
      canonical: `/product/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      ...(image && { images: [{ url: image }] }),
    },
  };
}

/**
 * Dynamic product feature page component
 * Loads content from YAML and renders with shared layout
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const content = await getProductContent(slug);

  // Convert iconPath strings to React elements
  const features = content.showcase.features.map((feature) => ({
    ...feature,
    icon: (
      <svg
        className="h-5 w-5 text-pink-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={feature.iconPath}
        />
      </svg>
    ),
  }));

  return (
    <>
      <Hero {...content.hero} />
      <FeatureShowcase
        title={content.showcase.title}
        features={features}
        screenshot={content.showcase.screenshot}
        comparisonTitle={content.showcase.comparisonTitle}
        comparisonSubtitle={content.showcase.comparisonSubtitle}
        traditionalPoints={content.showcase.traditionalPoints}
        aiPoweredPoints={content.showcase.aiPoweredPoints}
      />
      <BottomFeature {...content.bottomFeature} />
    </>
  );
}
