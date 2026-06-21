import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Link } from '@/components/Link';
import { Heading, Lead, Subheading } from '@/components/Text';
import { getResourceHubContent } from '@/lib/content';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getResourceHubContent('frameworks');

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function FrameworksPage() {
  const content = await getResourceHubContent('frameworks');

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

        {content.cards.map((framework) => (
          <article
            key={framework.href}
            className="relative mt-12 flex max-w-3xl flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            {framework.eyebrow && (
              <p className="text-xs font-semibold tracking-wide text-primary-600 uppercase">{framework.eyebrow}</p>
            )}
            <h2 className="mt-3 text-3xl font-semibold text-neutral-900">
              <Link href={framework.href}>
                <span className="absolute inset-0 rounded-3xl" />
                {framework.title}
              </Link>
            </h2>
            <p className="mt-4 text-base text-neutral-600">{framework.description}</p>
            <div className="mt-6">
              <Button href={framework.href} variant="text" arrow="right">
                {framework.ctaLabel}
              </Button>
            </div>
          </article>
        ))}
      </Container>
    </main>
  );
}
