import { getContentFromPath, getMDXContent, getSingleContent, HELP_PATH } from './loaders';
import type { HelpArticle, HelpSection } from './types';

const transformHelpArticle = (slug: string, data: any): HelpArticle => {
  // Extract section and subsection from slug path
  const pathParts = slug.split('/');
  const section = pathParts[0] || '';
  const subsection = pathParts[1] || undefined;

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    publishedAt: data.publishedAt || new Date().toISOString(),
    section,
    subsection,
    order: data.order || 0,
    tags: data.tags || [],
    lastUpdated: data.lastUpdated || data.publishedAt || new Date().toISOString(),
  };
};

export async function getAllHelpArticles(): Promise<HelpArticle[]> {
  // Help uses nested structure (**/*.mdx) - supports folder hierarchy
  const articles = await getContentFromPath(HELP_PATH, '**/*.mdx', transformHelpArticle);
  return articles.sort((a, b) => {
    // Sort by section, then by order, then by title
    if (a.section !== b.section) {
      return a.section.localeCompare(b.section);
    }
    if (a.order !== b.order) {
      return (a.order || 0) - (b.order || 0);
    }
    return a.title.localeCompare(b.title);
  });
}

export async function getHelpArticle(slug: string): Promise<HelpArticle | null> {
  return getSingleContent(HELP_PATH, slug, transformHelpArticle);
}

export async function getHelpArticleContent(slug: string): Promise<string | null> {
  return getMDXContent(HELP_PATH, slug);
}

export async function getHelpSections(): Promise<HelpSection[]> {
  const allArticles = await getAllHelpArticles();
  const sectionsMap = new Map<string, HelpArticle[]>();

  // Group articles by section
  allArticles.forEach((article) => {
    if (!sectionsMap.has(article.section)) {
      sectionsMap.set(article.section, []);
    }
    sectionsMap.get(article.section)!.push(article);
  });

  // Convert to HelpSection array
  return Array.from(sectionsMap.entries())
    .map(([slug, articles]) => ({
      title: slug.charAt(0).toUpperCase() + slug.slice(1), // Capitalize first letter
      slug,
      articles: articles.sort((a, b) => {
        if (a.order !== b.order) {
          return (a.order || 0) - (b.order || 0);
        }
        return a.title.localeCompare(b.title);
      }),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getHelpArticlesBySection(section: string): Promise<HelpArticle[]> {
  const allArticles = await getAllHelpArticles();
  return allArticles.filter((article) => article.section === section);
}

export async function getHelpArticlesByTag(tag: string): Promise<HelpArticle[]> {
  const allArticles = await getAllHelpArticles();
  return allArticles.filter((article) => article.tags?.includes(tag));
}

export async function getHelpTags(): Promise<string[]> {
  const allArticles = await getAllHelpArticles();
  const tagsSet = new Set<string>();

  allArticles.forEach((article) => {
    article.tags?.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}
