import { BLOG_PATH, getContentFromPath, getMDXContent, getSingleContent } from './loaders';
import type { BlogCategory, BlogPost, FrontmatterData } from './types';

const transformBlogPost = (slug: string, data: FrontmatterData): BlogPost => ({
  slug,
  title: data.title || '',
  excerpt: data.excerpt || '',
  publishedAt: data.publishedAt || new Date().toISOString(),
  isFeatured: data.isFeatured || false,
  mainImage: (data.mainImage as BlogPost['mainImage']) || undefined,
  author: (data.author as BlogPost['author']) || undefined,
  categories: (data.categories as BlogPost['categories']) || [],
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
