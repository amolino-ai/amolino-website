import BottomFeature from '@/app/product/components/BottomFeature';
import FeatureShowcase from '@/app/product/components/FeatureShowcase';
import Hero from '@/app/product/components/Hero';
import { getProductContent } from '@/lib/content';

export default async function GuidedSelling() {
  const content = await getProductContent('guided-selling');

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
