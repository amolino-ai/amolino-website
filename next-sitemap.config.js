/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://amolino.ai',
  generateRobotsTxt: true, // (optional)
  // Add any additional paths that aren't automatically captured
  additionalPaths: async (config) => {
    // Fetch all blog posts from Sanity
    const query = `*[_type == "post"] {
      "slug": slug.current,
      _updatedAt
    }`;
    
    try {
      const posts = await fetch(
        `${process.env.NEXT_PUBLIC_SANITY_PROJECT_URL}/api/2024-03-21/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${encodeURIComponent(query)}`
      ).then(res => res.json());

      // Transform each blog post into a sitemap entry
      const blogPaths = posts.result.map((post) => ({
        loc: `/blog/${post.slug}`,
        lastmod: post._updatedAt,
        changefreq: 'weekly',
        priority: 0.7,
      }));

      return [
        await config.transform(config, '/blog'),
        ...blogPaths,
      ];
    } catch (error) {
      console.error('Error fetching blog posts for sitemap:', error);
      return [await config.transform(config, '/blog')];
    }
  },
  // Exclude paths you don't want in sitemap
  exclude: ['/studio/*', '/api/*', '/login', '/mdx'],
}
