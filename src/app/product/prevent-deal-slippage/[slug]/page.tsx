import FeatureShowcase from '@/app/product/components/FeatureShowcase';
import BottomFeature from '@/app/product/components/BottomFeature';
import Hero from '@/app/product/components/Hero';
import { getProductContent } from '@/lib/content';
import fs from 'fs';
import path from 'path';

/**
 * Generate static params for all features in "Prevent Deal Slippage" pillar
 * Dynamically scans the benefit folder for all YAML files
 */
export async function generateStaticParams() {
  const benefitDir = path.join(process.cwd(), 'content', 'pages', 'product', 'prevent-deal-slippage');
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
 * Dynamic product feature page component for Prevent Deal Slippage pillar
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const content = await getProductContent('prevent-deal-slippage', slug);

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
