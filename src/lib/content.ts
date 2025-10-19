// lib/content.ts
import glob from 'fast-glob';
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import path, { join, dirname, basename } from 'path';


const CONTENT_ROOT = path.join(process.cwd(), 'content');
const BLOG_PATH = path.join(CONTENT_ROOT, 'blog');
const HELP_PATH = path.join(CONTENT_ROOT, 'help');

// Generic YAML loader function
/**
 * Load and parse a YAML file from the content directory
 * @param filePath - Relative path from content/ directory (e.g., 'pages/home/hero.yaml') or absolute path
 * @returns Parsed YAML content as typed object
 */
export async function loadYAML<T>(filePath: string): Promise<T> {
  try {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.join(CONTENT_ROOT, filePath);
    const fileContents = await readFile(fullPath, 'utf8');
    const parsed = yaml.load(fileContents) as T;
    return parsed;
  } catch (error) {
    console.error(`Error loading YAML file ${filePath}:`, error);
    throw error;
  }
}

// Hero content interfaces
export interface HeroStat {
  value: string;
  description: string;
}

export interface HeroCTAs {
  primaryUrl: string;
  secondaryUrl: string;
  tertiaryUrl: string;
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroImages {
  light: HeroImage;
  dark: HeroImage;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  stats: HeroStat[];
  ctas: HeroCTAs;
  images: HeroImages;
}

// Hero content loader
export async function getHeroContent(): Promise<HeroContent> {
  return loadYAML<HeroContent>('pages/home/hero.yaml');
}

// Base content interface
export interface BaseContent {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
}

// Blog-specific interface (extends base)
export interface BlogPost extends BaseContent {
  isFeatured?: boolean
  mainImage?: {
    src: string
    alt: string
  }
  author?: {
    name: string
    image?: string
  }
  categories?: Array<{
    title: string
    slug: string
  }>
}

// Help article interface (extends base)
export interface HelpArticle extends BaseContent {
  section: string // e.g., "integrations", "product"
  subsection?: string // e.g., "microsoft", "features"
  order?: number // for ordering within sections
  tags?: string[]
  lastUpdated?: string
}

export interface BlogCategory {
  title: string
  slug: string
}

export interface HelpSection {
  title: string
  slug: string
  articles: HelpArticle[]
}

// Generic content fetching functions
async function getContentFromPath<T extends BaseContent>(
  contentPath: string,
  pattern: string = '**/*.mdx',
  transformFn: (slug: string, data: any, fullPath: string) => T
): Promise<T[]> {
  try {
    const files = await glob(pattern, {
      cwd: contentPath,
      absolute: true,
      onlyFiles: true,
    });

    const content = await Promise.all(
      files.map(async (file) => {
        const fullPath = path.isAbsolute(file) ? file : path.join(contentPath, file);
        
        try {
          const fileContents = await readFile(fullPath, 'utf8');
          const { data } = matter(fileContents);
          
          // FIXED: Create slug from relative path, not absolute path
          const relativePath = path.relative(contentPath, fullPath);
          const slug = relativePath.replace(/\.mdx?$/, '').replace(/\\/g, '/');
          
          return transformFn(slug, data, fullPath);
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
          return null;
        }
      })
    );

    return content.filter(Boolean) as T[];
  } catch (error) {
    console.error(`Error reading content from ${contentPath}:`, error);
    return [];
  }
}

async function getSingleContent<T extends BaseContent>(
  contentPath: string,
  slug: string,
  transformFn: (slug: string, data: any, fullPath: string) => T
): Promise<T | null> {
  try {
    const fullPath = path.isAbsolute(slug) ? slug : path.join(contentPath, `${slug}.mdx`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return transformFn(slug, data, fullPath);
  } catch (error) {
    console.error(`Error reading content ${slug}:`, error);
    return null;
  }
}

async function getMDXContent(contentPath: string, slug: string): Promise<string | null> {
  try {
    const fullPath = path.isAbsolute(slug) ? slug : path.join(contentPath, `${slug}.mdx`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { content } = matter(fileContents);
    return content;
  } catch (error) {
    console.error(`Error reading content ${slug}:`, error);
    return null;
  }
}



const transformBlogPost = (slug: string, data: any): BlogPost => ({
  slug,
  title: data.title || '',
  excerpt: data.excerpt || '',
  publishedAt: data.publishedAt || new Date().toISOString(),
  isFeatured: data.isFeatured || false,
  mainImage: data.mainImage || null,
  author: data.author || null,
  categories: data.categories || [],
});

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getContentFromPath(BLOG_PATH, '*.mdx', transformBlogPost);
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return getSingleContent(BLOG_PATH, slug, transformBlogPost);
}

export async function getBlogPostContent(slug: string): Promise<string | null> {
  return getMDXContent(BLOG_PATH, slug);
}

export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.isFeatured).slice(0, limit);
}

export async function getPosts(startIndex: number = 0, endIndex: number = 5, category?: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  let filteredPosts = allPosts;

  if (category) {
    filteredPosts = allPosts.filter((post) => post.categories?.some((cat) => cat.slug === category));
  }

  if (!category) {
    filteredPosts = filteredPosts.filter((post) => !post.isFeatured);
  }

  return filteredPosts.slice(startIndex, endIndex);
}

export async function getPostsCount(category?: string): Promise<number> {
  const allPosts = await getAllBlogPosts();

  if (category) {
    return allPosts.filter((post) => post.categories?.some((cat) => cat.slug === category)).length;
  }

  return allPosts.filter((post) => !post.isFeatured).length;
}

export async function getCategories(): Promise<BlogCategory[]> {
  const allPosts = await getAllBlogPosts();
  const categoryMap = new Map<string, string>();

  allPosts.forEach((post) => {
    post.categories?.forEach((category) => {
      categoryMap.set(category.slug, category.title);
    });
  });

  return Array.from(categoryMap.entries())
    .map(([slug, title]) => ({ slug, title }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getPostsForFeed(): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}


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
      })
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

// Utility function to get all unique tags from help articles
export async function getHelpTags(): Promise<string[]> {
  const allArticles = await getAllHelpArticles();
  const tagsSet = new Set<string>();
  
  allArticles.forEach((article) => {
    article.tags?.forEach((tag) => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet).sort();
}