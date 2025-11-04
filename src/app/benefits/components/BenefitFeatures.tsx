import { Bento } from '@/components/Bento';
import type { BenefitGroupFeatures, BentoItem } from '@/lib/content/types';

/**
 * Wrapper component that selects the appropriate Bento grid layout
 * based on the layout prop specified in the content.
 * Maps BenefitGroupFeature to BentoItem format.
 */
export function BenefitFeatures({ title, subtitle, layout, items }: BenefitGroupFeatures) {
  // Map BenefitGroupFeature to BentoItem
  const bentoItems: BentoItem[] = items.map(feature => ({
    title: feature.name,
    description: feature.description,
    category: feature.category,
    screenshot: feature.screenshot,
    href: feature.link,
    ctaText: feature.ctaText,
  }));

  return (
    <Bento
      layout={layout}
      title={title}
      subtitle={subtitle}
      tagline="Features"
      items={bentoItems}
    />
  );
}
