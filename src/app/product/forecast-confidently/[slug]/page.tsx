import FeatureShowcase from '@/app/product/components/FeatureShowcase';
import BottomFeature from '@/app/product/components/BottomFeature';
import Hero from '@/app/product/components/Hero';
import { getProductContent } from '@/lib/content';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';

/**
 * Generate static params for all features in "Explainable AI Forecast" pillar
 * Dynamically scans the benefit folder for all YAML files
 */
export async function generateStaticParams() {
  const benefitDir = path.join(process.cwd(), 'content', 'pages', 'product', 'forecast-confidently');
  const files = fs.readdirSync(benefitDir).filter(f => f.endsWith('.yaml'));

  return files.map((file) => ({
    slug: file.replace('.yaml', ''),
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
  const content = await getProductContent('forecast-confidently', slug);

  // Use metadata from YAML if available, otherwise fall back to hero content
  const title = content.metadata?.title || content.hero.title;
  const description = content.metadata?.description || content.hero.description;
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
 * Dynamic product feature page component for Explainable AI Forecast pillar
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const content = await getProductContent('forecast-confidently', slug);

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
