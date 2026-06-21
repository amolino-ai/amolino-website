import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading, Subheading } from '@/components/Text';
import { getUseCasesOverviewContent } from '@/lib/content';
import type { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getUseCasesOverviewContent();

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

interface UseCaseCardProps {
  title: string;
  description: string;
  imagePath: string;
  href: string;
  ctaLabel: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, imagePath, href, ctaLabel }) => {
  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-6 overflow-hidden rounded-lg bg-neutral-100">
        <div className="relative aspect-video w-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mb-4 flex-grow text-neutral-600">{description}</p>
      <div className="mt-auto">
        <Button href={href} variant="text" arrow="right">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};

export default async function UseCasesPage() {
  const content = await getUseCasesOverviewContent();

  return (
    <div className="relative min-h-screen bg-white">
      <Container className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h1" className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            {content.hero.heading}
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {content.hero.description}
          </p>
        </div>
      </Container>

      {/* Primary Use Cases Section */}
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.useCases.slice(0, 3).map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              imagePath={useCase.imagePath}
              href={useCase.href}
              ctaLabel={content.cardCtaLabel}
            />
          ))}
        </div>
      </Container>

      {/* Featured Use Case (Larger showcase) */}
      <div className="bg-primary-50 py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Subheading as="h3" className="mb-2 text-primary-600">
                {content.featuredUseCase.eyebrow}
              </Subheading>
              <Heading as="h2" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                {content.featuredUseCase.title}
              </Heading>
              <p className="mb-6 text-lg text-neutral-600">
                {content.featuredUseCase.description}
              </p>
              <p className="mb-8 text-lg text-neutral-600">
                {content.featuredUseCase.secondaryDescription}
              </p>
              <Button href={content.featuredUseCase.ctaHref} variant="primary">
                {content.featuredUseCase.ctaText}
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={content.featuredUseCase.imagePath}
                alt={content.featuredUseCase.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Secondary Use Cases Section */}
      <Container className="py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {content.useCases.slice(3, 5).map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              imagePath={useCase.imagePath}
              href={useCase.href}
              ctaLabel={content.cardCtaLabel}
            />
          ))}
        </div>
      </Container>

      {/* CTA Section */}
      <div className="bg-neutral-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Heading as="h2" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              {content.bottomCta.heading}
            </Heading>
            <p className="mb-8 text-lg text-neutral-600">
              {content.bottomCta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={content.bottomCta.primaryButtonHref} variant="primary">
                {content.bottomCta.primaryButtonText}
              </Button>
              <Button href={content.bottomCta.secondaryButtonHref} variant="secondary">
                {content.bottomCta.secondaryButtonText}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
