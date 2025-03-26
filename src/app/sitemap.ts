import glob from 'fast-glob'
import type { MetadataRoute } from 'next'
import { getPostsForFeed } from '@/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get your base URL from environment variable
  const baseUrl = process.env.SITE_URL || 'https://amolino.ai'

  // Get all MDX pages, excluding login page
  const mdxPages = await glob('**/*.mdx', {
    cwd: 'src/app',
  })
  const mdxUrls = mdxPages.map((page) => ({
    url: `${baseUrl}/${page.replace(/(^|\/)page\.mdx$/, '')}`,
    lastModified: new Date(),
  }))

  // Define static routes
  const staticUrls = [
    '',
    '/blog',
    '/company',
    '/company/terms',
    '/company/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  // Get all blog posts from Sanity
  const posts = await getPostsForFeed()
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
  }))

  return [ ...mdxUrls, ...blogUrls]
}
