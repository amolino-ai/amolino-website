import { Badge } from '@/components/Badge';
import { Container } from '@/components/Container';
import Link from 'next/link';
import { ProductFeatureCard } from './ProductFeatureCard';
import type { ProductPageContent } from '@/lib/content/types';

interface BenefitSectionProps {
  benefit: string;
  benefitTitle: string;
  benefitSubtitle: string;
  benefitDescription: string;
  badgeText?: string;
  products: Array<ProductPageContent & { slug: string }>;
  index: number;
}

export function BenefitSection({
  benefit,
  benefitTitle,
  benefitSubtitle,
  benefitDescription,
  badgeText,
  products,
  index,
}: BenefitSectionProps) {
  // Alternate background colors
  const bgColors = ['bg-white', 'bg-gray-50', 'bg-blue-50'];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <section className={`${bgColor} py-16 sm:py-24`}>
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          {badgeText && (
            <div className="mb-6 flex justify-center">
              <Badge text={badgeText} variant="ring-glow" />
            </div>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {benefitTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {benefitSubtitle}
          </p>
          <p className="mt-6 text-base text-gray-600 line-clamp-3">
            {benefitDescription}
          </p>
          <div className="mt-6">
            <Link
              href={`/benefits/${benefit}`}
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              Learn more about {benefitTitle} →
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {products.map((product, productIndex) => (
            <ProductFeatureCard
              key={product.slug}
              title={product.hero.title}
              description={product.hero.description}
              screenshot={product.hero.screenshot}
              href={`/product/${benefit}/${product.slug}`}
              index={productIndex}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
