import glob from 'fast-glob';
import type { MetadataRoute } from 'next';
import { getPostsForFeed } from '@/lib/content';

// Pages to exclude from sitemap (test pages, internal pages, etc.)
const EXCLUDED_PATHS = ['/mdx'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get your base URL from environment variable
  const baseUrl = process.env.SITE_URL || 'https://amolino.ai';

  // Get all MDX pages
  const mdxPages = await glob('**/*.mdx', {
    cwd: 'src/app',
  });
  const mdxUrls = mdxPages.map((page) => ({
    url: `${baseUrl}/${page.replace(/(^|\/)page\.mdx$/, '')}`,
    lastModified: new Date(),
  }));

  // Define static routes (non-MDX pages)
  const staticUrls = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const posts = await getPostsForFeed();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
  }));

  // Combine all URLs, deduplicate by URL, and filter excluded paths
  const allUrls = [...staticUrls, ...mdxUrls, ...blogUrls];
  const seen = new Set<string>();
  const deduped = allUrls.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });

  // Filter out excluded paths
  return deduped.filter((entry) => {
    const path = entry.url.replace(baseUrl, '');
    return !EXCLUDED_PATHS.includes(path);
  });
}
