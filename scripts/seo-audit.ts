/**
 * Post-build SEO audit script
 * Validates sitemap, canonical URLs, and robots meta tags
 * Run with: npx tsx scripts/seo-audit.ts
 */

import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://amolino.ai';
const BUILD_DIR = '.next/server/app';

interface AuditError {
  type: 'error' | 'warning';
  message: string;
}

const errors: AuditError[] = [];

function error(message: string) {
  errors.push({ type: 'error', message });
}

function warning(message: string) {
  errors.push({ type: 'warning', message });
}

/**
 * Check sitemap for duplicates and excluded pages
 */
function auditSitemap() {
  console.log('\nAuditing sitemap...');

  const sitemapPath = path.join(BUILD_DIR, 'sitemap.xml.body');
  if (!fs.existsSync(sitemapPath)) {
    error('Sitemap not found at ' + sitemapPath);
    return;
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = sitemap.match(/<loc>(.*?)<\/loc>/g)?.map(m => m.replace(/<\/?loc>/g, '')) || [];

  // Check for duplicates
  const seen = new Set<string>();
  for (const url of urls) {
    if (seen.has(url)) {
      error(`Duplicate URL in sitemap: ${url}`);
    }
    seen.add(url);
  }

  // Check for pages that shouldn't be in sitemap
  const excludedPaths = ['/login', '/mdx'];
  for (const url of urls) {
    const urlPath = url.replace(BASE_URL, '');
    for (const excluded of excludedPaths) {
      if (urlPath === excluded || urlPath.startsWith(excluded + '/')) {
        error(`Excluded page found in sitemap: ${url}`);
      }
    }
  }

  console.log(`  Found ${urls.length} URLs in sitemap`);
}

/**
 * Check that dynamic routes have generateMetadata with canonical
 */
function auditDynamicRoutes() {
  console.log('\nAuditing dynamic routes for generateMetadata...');

  const appDir = 'src/app';
  const dynamicRoutes = findDynamicRoutes(appDir);

  for (const route of dynamicRoutes) {
    const content = fs.readFileSync(route, 'utf-8');

    // Check for generateMetadata
    if (!content.includes('export async function generateMetadata')) {
      error(`Dynamic route missing generateMetadata: ${route}`);
      continue;
    }

    // Check for canonical in generateMetadata
    if (!content.includes('alternates:') || !content.includes('canonical:')) {
      error(`Dynamic route missing canonical URL: ${route}`);
    }
  }

  console.log(`  Checked ${dynamicRoutes.length} dynamic routes`);
}

/**
 * Find all dynamic route page files ([slug], [...slug], etc.)
 */
function findDynamicRoutes(dir: string): string[] {
  const routes: string[] = [];

  function scan(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.name === 'page.tsx') {
        // Check if any parent directory is a dynamic segment
        if (fullPath.includes('[') && fullPath.includes(']')) {
          routes.push(fullPath);
        }
      }
    }
  }

  scan(dir);
  return routes;
}

/**
 * Check that sensitive pages have noindex
 */
function auditNoIndexPages() {
  console.log('\nAuditing noindex pages...');

  const noIndexPages = [
    'src/app/login/page.tsx',
  ];

  for (const pagePath of noIndexPages) {
    if (!fs.existsSync(pagePath)) {
      warning(`Expected noindex page not found: ${pagePath}`);
      continue;
    }

    const content = fs.readFileSync(pagePath, 'utf-8');

    if (!content.includes('index: false') && !content.includes('noindex')) {
      error(`Page should have robots noindex: ${pagePath}`);
    }
  }

  console.log(`  Checked ${noIndexPages.length} pages`);
}

/**
 * Check root layout has metadataBase and canonical
 */
function auditRootLayout() {
  console.log('\nAuditing root layout...');

  const layoutPath = 'src/app/layout.tsx';
  if (!fs.existsSync(layoutPath)) {
    error('Root layout not found');
    return;
  }

  const content = fs.readFileSync(layoutPath, 'utf-8');

  if (!content.includes('metadataBase')) {
    error('Root layout missing metadataBase');
  }

  if (!content.includes('alternates:') || !content.includes('canonical:')) {
    error('Root layout missing default canonical URL');
  }

  console.log('  Root layout checked');
}

// Run all audits
console.log('Running SEO audit...\n');

auditRootLayout();
auditDynamicRoutes();
auditNoIndexPages();
auditSitemap();

// Report results
console.log('\n' + '='.repeat(50));

const errorCount = errors.filter(e => e.type === 'error').length;
const warningCount = errors.filter(e => e.type === 'warning').length;

if (errors.length === 0) {
  console.log('All SEO checks passed.\n');
  process.exit(0);
} else {
  console.log(`\nFound ${errorCount} error(s) and ${warningCount} warning(s):\n`);

  for (const err of errors) {
    const prefix = err.type === 'error' ? 'ERROR' : 'WARN';
    console.log(`  [${prefix}] ${err.message}`);
  }

  console.log('');
  process.exit(errorCount > 0 ? 1 : 0);
}
