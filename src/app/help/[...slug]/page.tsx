
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Link } from '@/components/Link';
import * as mdxComponents from '@/components/Mdx';
import { Heading, Lead, Subheading } from '@/components/Text';
import { getHelpArticle, getHelpArticleContent, getAllHelpArticles, getHelpArticlesBySection } from '@/lib/content';
import type { HelpArticle } from '@/lib/content/types';
import { 
  ChevronRightIcon,
  TagIcon,
  ClockIcon,
  ArrowLeftIcon,
} from '@heroicons/react/16/solid';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{
    slug: string[]
  }>
}

export const dynamic = 'force-static';
export const revalidate = 0;

export async function generateStaticParams() {
  const articles = await getAllHelpArticles();
  
  return articles.map((article) => ({
    slug: article.slug.split('/'),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = await resolvedParams.slug.join('/');
  const article = await getHelpArticle(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

async function Breadcrumb({ article }: { article: HelpArticle }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
      <Link href="/help" className="hover:text-gray-900 transition-colors">
        Help Center
      </Link>
      <ChevronRightIcon className="size-4 text-gray-400" />
      <Link 
        href={`/help?section=${article.section}`} 
        className="hover:text-gray-900 transition-colors capitalize"
      >
        {article.section}
      </Link>
      {article.subsection && (
        <>
          <ChevronRightIcon className="size-4 text-gray-400" />
          <span className="capitalize text-gray-900">{article.subsection}</span>
        </>
      )}
    </nav>
  );
}

async function RelatedArticles({ article }: { article: HelpArticle }) {
  // Get other articles from the same section
  const sectionArticles = await getHelpArticlesBySection(article.section);
  const relatedArticles = sectionArticles
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 border-t border-gray-200 pt-16">
      <h2 className="text-xl font-semibold mb-6">Related Articles</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((relatedArticle) => (
          <div
            key={relatedArticle.slug}
            className="relative flex flex-col rounded-lg bg-gray-50 p-6 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-base font-medium leading-6">
              <Link href={`/help/${relatedArticle.slug}`}>
                <span className="absolute inset-0" />
                {relatedArticle.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {relatedArticle.excerpt}
            </p>
            
            {relatedArticle.tags && relatedArticle.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {relatedArticle.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-white text-gray-700 text-xs rounded-md"
                  >
                    <TagIcon className="size-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

async function TableOfContents({ content }: { content: string }) {
  // Extract headings from MDX content for table of contents
  // This is a simple regex-based approach - you might want to use a proper MDX parser
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].indexOf(' ') - 1;
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    headings.push({
      level,
      text,
      id,
    });
  }

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="lg:sticky lg:top-8">
      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          On this page
        </h3>
        <nav className="space-y-1">
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.id}`}
              className={clsx(
                'block text-sm hover:text-gray-900 transition-colors',
                heading.level === 2 ? 'text-gray-700' : 'text-gray-600 pl-4',
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default async function HelpArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = await resolvedParams.slug.join('/');
  const article = await getHelpArticle(slug);
  const content = await getHelpArticleContent(slug);
  
  if (!article || !content) {
    notFound();
  }
  
  return (
    <main className="overflow-hidden">
      <Container>
        <div className="mt-16">
          <Breadcrumb article={article} />
          
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <article>
              <header className="mb-8">
                <Subheading className="mb-4">Help Article</Subheading>
                <Heading as="h1" className="mb-4">
                  {article.title}
                </Heading>
                <Lead className="mb-6">
                  {article.excerpt}
                </Lead>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="size-4" />
                    <span>
                      Last updated {dayjs(article.lastUpdated).format('MMMM D, YYYY')}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <span>Section:</span>
                    <Link 
                      href={`/help?section=${article.section}`}
                      className="font-medium text-blue-600 hover:text-blue-800 capitalize"
                    >
                      {article.section}
                    </Link>
                  </div>
                </div>
                
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/help?tag=${tag}`}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors"
                        >
                          <TagIcon className="size-3" />
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </header>
              
              <div className="prose prose-lg max-w-none prose-headings:scroll-mt-8">
                <MDXRemote source={content} components={mdxComponents} />
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/help"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ArrowLeftIcon className="size-4" />
                  Back to Help Center
                </Link>
              </div>
              
              <RelatedArticles article={article} />
            </article>
            
            <aside className="lg:order-last">
              <TableOfContents content={content} />
            </aside>
          </div>
        </div>
      </Container>
      

    </main>
  );
}
