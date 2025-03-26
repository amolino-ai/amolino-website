import glob from 'fast-glob'
import type { MetadataRoute } from 'next'

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

  //return [...staticUrls, ...mdxUrls]
  return [...mdxUrls]
}
