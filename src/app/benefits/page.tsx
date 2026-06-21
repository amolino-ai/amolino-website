import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { getBenefitGroupContent } from '@/lib/content';
import { getBenefitSlugs } from '@/lib/content/navigation';
import { BenefitCard } from './components/BenefitCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Benefits',
  description: 'Discover how AmolinoAI helps you make every rep your best rep, forecast confidently, and prevent deal slippage with AI-powered sales intelligence.',
};

export default async function BenefitsOverview() {
  // Fetch all benefit slugs from navigation config
  const benefitSlugs = await getBenefitSlugs();

  // Fetch all benefit group contents
  const benefits = await Promise.all(
    benefitSlugs.map(async (slug) => {
      const content = await getBenefitGroupContent(slug);
      return {
        slug,
        ...content,
      };
    })
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Three Strategic Benefits, One Powerful Platform
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-600">
              AmolinoAI transforms your entire revenue organization with AI-powered intelligence
              that improves rep performance, forecast accuracy, and deal execution.
            </p>
            <div className="mt-8">
              <Button href="https://app.amolino.ai">Try AmolinoAI</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="bg-neutral-50 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.slug}
                slug={benefit.slug}
                badgeText={benefit.hero.badgeText}
                title={benefit.hero.title}
                description={benefit.hero.description}
                stats={benefit.stats.metrics}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Ready to Transform Your Revenue Organization?
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              See how AmolinoAI can help your team execute better, forecast accurately, and win more deals.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="https://app.amolino.ai">Get Started</Button>
              <Button href="/demo" variant="outline">Book a Demo</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
