/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://amolino.ai',
  generateRobotsTxt: true, // (optional)
  // Add any additional paths that aren't automatically captured
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/company/terms'),
      await config.transform(config, '/company/privacy'),
      // Add other custom paths
    ]
  },
  // Exclude paths you don't want in sitemap
  exclude: ['/studio/*', '/api/*'],
}
