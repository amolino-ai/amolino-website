import type { NextConfig } from 'next';
import nextMDX from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';

// Add bundle analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Add frontmatter processing to MDX
// In Next.js 16, plugins must be passed as strings for Turbopack compatibility
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      ['remark-frontmatter', ['yaml', 'toml']],
      'remark-gfm', // Add this for table support
      'remark-images',
    ],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  // Enable React Compiler for automatic memoization
  reactCompiler: true,

  // Enable Turbopack file system cache for faster dev builds
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/**/*': ['./src/app/**/*.mdx'],
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/benefits/next-best-action-to-win',
        destination: '/benefits/win-more-deals',
        permanent: true,
      },
      {
        source: '/benefits/prevent-deal-slippage',
        destination: '/benefits/close-deals-faster',
        permanent: true,
      },
      {
        source: '/features/next-best-action-to-win/:slug*',
        destination: '/features/win-more-deals/:slug*',
        permanent: true,
      },
      {
        source: '/features/prevent-deal-slippage/:slug*',
        destination: '/features/close-deals-faster/:slug*',
        permanent: true,
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default withBundleAnalyzer(withMDX(nextConfig));
