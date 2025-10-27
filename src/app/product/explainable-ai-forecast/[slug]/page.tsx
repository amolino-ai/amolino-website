import FeatureShowcase from '@/app/product/components/FeatureShowcase';
import BottomFeature from '@/app/product/components/BottomFeature';
import Hero from '@/app/product/components/Hero';
import { getProductContent } from '@/lib/content';

// Define all feature slugs for this pillar
const FEATURE_SLUGS = [
  'ai-forecast',
  'signal-based-predictions',
  'risk-factors',
  'pipeline-analytics',
  'forecast-transparency',
  'predictive-models',
  'data-driven-insights',
] as const;

/**
 * Generate static params for all features in "Explainable AI Forecast" pillar
 */
export async function generateStaticParams() {
  return FEATURE_SLUGS.map((slug) => ({
    slug,
  }));
}

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Dynamic product feature page component for Explainable AI Forecast pillar
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
        screenshotSrc={content.showcase.screenshotSrc}
        comparisonTitle={content.showcase.comparisonTitle}
        comparisonSubtitle={content.showcase.comparisonSubtitle}
        traditionalPoints={content.showcase.traditionalPoints}
        aiPoweredPoints={content.showcase.aiPoweredPoints}
      />
      <BottomFeature {...content.bottomFeature} />
    </>
  );
}
