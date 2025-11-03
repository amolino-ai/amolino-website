import fs from 'fs';
import path from 'path';
import { loadYAML } from './loaders';
import type { FooterSection, ProductPageContent } from './types';

/**
 * Benefit slug to display name mapping
 */
const BENEFIT_NAMES: Record<string, string> = {
  'make-every-rep-your-best-rep': 'Make Every Rep Your Best Rep',
  'forecast-confidently': 'Forecast Confidently',
  'prevent-deal-slippage': 'Prevent Deal Slippage',
};

/**
 * Scan a directory for YAML files and return their slugs
 */
function scanYamlFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);
  return files
    .filter(file => file.endsWith('.yaml'))
    .map(file => file.replace('.yaml', ''));
}

/**
 * Build footer benefit sections from product YAML files at build time
 * Scans all product files and generates footer sections with ALL products
 */
export async function generateFooterBenefitSections(): Promise<FooterSection[]> {
  const contentDir = path.join(process.cwd(), 'content', 'pages', 'features');
  const sections: FooterSection[] = [];

  // Scan each benefit folder
  for (const benefitSlug of Object.keys(BENEFIT_NAMES)) {
    const benefitDir = path.join(contentDir, benefitSlug);
    const slugs = scanYamlFiles(benefitDir);

    const links: { label: string; href: string }[] = [];

    // Load each feature and include ALL products in the footer
    for (const slug of slugs) {
      try {
        const content = await loadYAML<ProductPageContent>(`pages/features/${benefitSlug}/${slug}.yaml`);

        // Include all products in footer (no filtering)
        links.push({
          label: content.options.featureName,
          href: `/features/${benefitSlug}/${slug}`,
        });
      } catch (error) {
        console.warn(`Failed to load product file: ${benefitSlug}/${slug}.yaml`, error);
      }
    }

    // Only add benefit section if it has products to show
    if (links.length > 0) {
      sections.push({
        heading: BENEFIT_NAMES[benefitSlug],
        links,
      });
    }
  }

  return sections;
}
