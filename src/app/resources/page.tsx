import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Link } from '@/components/Link';
import { Heading, Lead, Subheading } from '@/components/Text';
import { getResourceHubContent } from '@/lib/content';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getResourceHubContent('overview');

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function ResourcesPage() {
  const content = await getResourceHubContent('overview');

  return (
    <main className="bg-white py-16 sm:py-24">
      <Container>
        <Subheading>{content.hero.subheading}</Subheading>
        <Heading as="h1" className="mt-2">
          {content.hero.heading}
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          {content.hero.description}
        </Lead>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.cards.map((resource) => (
            <article
              key={resource.href}
              className="relative flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold tracking-wide text-primary-600 uppercase">{resource.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900">
                <Link href={resource.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                  {resource.title}
                </Link>
              </h2>
              <p className="mt-4 flex-1 text-base text-neutral-600">{resource.description}</p>
              <div className="mt-6">
                <Button href={resource.href} variant="text" arrow="right">
                  {resource.ctaLabel}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
