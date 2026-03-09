import BottomFeature from '@/app/features/components/BottomFeature';
import FeatureShowcase from '@/app/features/components/FeatureShowcase';
import Hero from '@/app/features/components/Hero';
import { getProductContent } from '@/lib/content';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { RelatedContentSection } from '@/components/RelatedContentSection';

export default async function TeamInsights() {
  const content = await getProductContent('team-insights');

  const breadcrumbItems = [
    { label: 'Features', href: '/features' },
    { label: content.hero.title },
  ];

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
      <Container>
        <Breadcrumb items={breadcrumbItems} className="py-4" />
      </Container>
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
      {content.relatedContent && <RelatedContentSection {...content.relatedContent} />}
    </>
  );
}
