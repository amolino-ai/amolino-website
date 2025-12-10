import FeatureShowcase from '@/app/features/components/FeatureShowcase';
import BottomFeature from '@/app/features/components/BottomFeature';
import Hero from '@/app/features/components/Hero';
import { getProductContent } from '@/lib/content';

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
// export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const content = await getProductContent(slug);

//   // Use metadata from YAML if available, otherwise fall back to hero content
//   // Note: TITLE_SUFFIX is already applied by root layout's title template
//   const title = content.metadata?.title || content.hero.title;
//   const description = content.metadata?.description || content.hero.description;
//   const image = content.metadata?.image;

//   // Debug logging
//   console.log('Product metadata debug:', {
//     slug,
//     hasMetadata: !!content.metadata,
//     metadataTitle: content.metadata?.title,
//     heroTitle: content.hero.title,
//     finalTitle: title,
//   });

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'website',
//       ...(image && { images: [{ url: image }] }),
//     },
//     // twitter: {
//     //   card: 'summary_large_card',
//     //   title,
//     //   description,
//     //   ...(image && { images: [image] }),
//     // },
//   };
// }

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
