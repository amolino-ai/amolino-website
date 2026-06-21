import Link from 'next/link';
import { Container } from '@/components/Container';
import { getCRMPipelineDesignContent } from '@/lib/content';
import type { CRMPipelineArticle, CRMPipelineLayer } from '@/lib/content';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCRMPipelineDesignContent();
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

const colorClasses = {
  blue: {
    text: 'text-primary-600',
    bgGradient: 'from-primary-50 to-primary-100/50',
    number: 'text-primary-600',
  },
  purple: {
    text: 'text-tertiary-600',
    bgGradient: 'from-tertiary-50 to-tertiary-100/50',
    number: 'text-tertiary-600',
  },
  emerald: {
    text: 'text-success-600',
    bgGradient: 'from-success-50 to-success-100/50',
    number: 'text-success-600',
  },
  amber: {
    text: 'text-warning-600',
    bgGradient: 'from-warning-50 to-warning-100/50',
    number: 'text-warning-600',
  },
};

function ArticleCard({ article, layerColor }: { article: CRMPipelineArticle; layerColor: CRMPipelineLayer['color'] }) {
  const isPublished = article.status === 'published';
  const colors = colorClasses[layerColor];

  return (
    <div
      className={`relative bg-white rounded-xl border border-neutral-200 p-6 ${
        isPublished ? 'hover:shadow-lg hover:border-neutral-300 cursor-pointer' : 'opacity-75'
      } transition-all duration-200`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center ${colors.number} font-bold text-lg`}>
          {article.number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {!isPublished && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-600">
                Coming Soon
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            {isPublished ? (
              <Link href={`/resources/frameworks/crm-pipeline-design/${article.id}`} className="hover:text-primary-600">
                {article.title}
              </Link>
            ) : (
              article.title
            )}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed">
            {article.description}
          </p>
          {isPublished && (
            <Link
              href={`/resources/frameworks/crm-pipeline-design/${article.id}`}
              className="inline-flex items-center mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Read article
              <svg className="ml-1.5 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function LayerSection({ layer }: { layer: CRMPipelineLayer }) {
  const colors = colorClasses[layer.color];

  return (
    <section className="mb-16">
      <div className={`bg-gradient-to-r ${colors.bgGradient} rounded-2xl p-8 mb-6`}>
        <h2 className={`text-2xl font-bold ${colors.text} mb-2`}>{layer.name}</h2>
        <p className="text-neutral-700 leading-relaxed">{layer.description}</p>
      </div>
      <div className="space-y-4">
        {layer.articles.map((article) => (
          <ArticleCard key={article.id} article={article} layerColor={layer.color} />
        ))}
      </div>
    </section>
  );
}

export default async function CRMPipelineDesignResource() {
  const content = await getCRMPipelineDesignContent();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="py-12 md:py-20">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-50">
              <span className="text-sm font-medium tracking-wide text-primary-600">
                {content.hero.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              {content.hero.heading}
            </h1>

            <div className="prose prose-lg max-w-none text-neutral-600">
              {content.introContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`mb-6 ${index === 2 || index === 4 ? 'font-medium text-neutral-900' : ''} ${index === 0 ? 'text-xl leading-relaxed' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* What This Resource Covers */}
          <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl border border-neutral-200 p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">{content.whatThisCovers.heading}</h2>
            {content.whatThisCovers.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-600 mb-4 leading-relaxed last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Navigation */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Jump to a section</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.layers.map((layer) => {
                const colors = colorClasses[layer.color];
                return (
                  <a
                    key={layer.id}
                    href={`#${layer.id}`}
                    className={`block p-4 rounded-xl bg-gradient-to-br ${colors.bgGradient} border border-neutral-200 hover:shadow-md transition-all`}
                  >
                    <div className={`font-semibold ${colors.text} mb-1`}>{layer.name.replace(' Layer', '')}</div>
                    <div className="text-sm text-neutral-600">{layer.articles.length} articles</div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Articles by Layer */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">The Articles</h2>
            {content.layers.map((layer) => (
              <div key={layer.id} id={layer.id}>
                <LayerSection layer={layer} />
              </div>
            ))}
          </div>

          {/* Platform Coverage Note */}
          <div className="max-w-4xl mx-auto mb-16 bg-neutral-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">{content.platformNote.heading}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {content.platformNote.content}
            </p>
          </div>

          {/* Who Built This */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-primary-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">{content.whoBuiltThis.heading}</h2>
            {content.whoBuiltThis.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="mt-6">
              <Link
                href={content.whoBuiltThis.ctaHref}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                {content.whoBuiltThis.ctaText}
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
