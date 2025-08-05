/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // we are not deploying to www. www is 308 redirected to amolino.ai
  siteUrl: process.env.SITE_URL || 'https://amolino.ai',
  generateRobotsTxt: true, // (optional)
  // Add any additional paths that aren't automatically captured
  additionalPaths: async (config) => {
    // Fetch all blog posts from Sanity
    const query = `*[_type == "post"] {
      "slug": slug.current,
      _updatedAt
    }`

    return [await config.transform(config, '/blog')]
  },
  // Exclude paths you don't want in sitemap
  exclude: ['/studio/*', '/api/*', '/login', '/mdx'],
}
