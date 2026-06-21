import { Container } from '@/components/Container';
import { Link } from '@/components/Link';
import type { RelatedContentBlock } from '@/lib/content/types';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { clsx } from 'clsx';

interface RelatedContentSectionProps extends RelatedContentBlock {
  className?: string;
}

export function RelatedContentSection({
  eyebrow,
  title,
  description,
  ctaLabel,
  items,
  className,
}: RelatedContentSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={clsx('bg-neutral-50 py-16 sm:py-24', className)}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold tracking-wide text-primary-600 uppercase">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-lg text-neutral-600">{description}</p>}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.href}-${item.title}`}
              className="relative flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {item.eyebrow && (
                <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">{item.eyebrow}</p>
              )}
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                <Link href={item.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                  {item.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-base text-neutral-600">{item.description}</p>
              {(item.ctaLabel ?? ctaLabel) && (
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-600">
                  <span>{item.ctaLabel ?? ctaLabel}</span>
                  <ArrowRightIcon className="size-4" />
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
