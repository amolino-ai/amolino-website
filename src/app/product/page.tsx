import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { getAllProductsGroupedByBenefit } from '@/lib/content';
import { BenefitSection } from './components/BenefitSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Product Features | AmolinoAI | ',
  description: 'Explore all AmolinoAI product features organized by strategic benefits: Make Every Rep Your Best Rep, Forecast Confidently, and Prevent Deal Slippage.',
};

export default async function ProductOverview() {
  const groupedProducts = await getAllProductsGroupedByBenefit();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              AI-Powered Sales Intelligence Platform
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              Transform your sales organization with comprehensive features across forecasting, execution, and deal protection.
            </p>
            <div className="mt-8">
              <Button href="https://app.amolino.ai">Try AmolinoAI</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefit Sections */}
      {groupedProducts.map((group, index) => (
        <BenefitSection
          key={group.benefit}
          benefit={group.benefit}
          benefitTitle={group.benefitTitle}
          benefitSubtitle={group.benefitSubtitle}
          benefitDescription={group.benefitDescription}
          badgeText={group.badgeText}
          products={group.products}
          index={index}
        />
      ))}
    </>
  );
}
