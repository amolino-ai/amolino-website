import fs from 'fs';
import path from 'path';
import { loadYAML } from './loaders';
import { getNavigationConfig, getBenefitHref, getFeatureHref } from './navigation';
import type { NavbarProductsContent, NavbarBenefit, NavbarFeature, ProductPageContent } from './types';

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
 * Build navbar products content from product YAML files at build time
 * Scans all product files, filters by showInNavbar, and generates the navbar structure
 */
export async function buildNavbarProductsFromContent(): Promise<NavbarProductsContent> {
  const contentDir = path.join(process.cwd(), 'content', 'pages', 'features');
  const benefits: NavbarBenefit[] = [];

  // Load navigation config to get benefit slugs and names
  const navConfig = await getNavigationConfig();

  // Scan each benefit folder
  for (const benefit of navConfig.benefits) {
    const benefitSlug = benefit.slug;
    const benefitDir = path.join(contentDir, benefitSlug);
    const slugs = scanYamlFiles(benefitDir);

    const features: NavbarFeature[] = [];
    const totalFeatureCount = slugs.length; // Total count of all features in this benefit

    // Load each feature and check if it should be shown in navbar
    for (const slug of slugs) {
      try {
        const content = await loadYAML<ProductPageContent>(`pages/features/${benefitSlug}/${slug}.yaml`);

        if (content.options?.showInNavbar) {
          features.push({
            name: content.options.featureName,
            description: content.options.navbarDescription,
            href: getFeatureHref(benefitSlug, slug),
          });
        }
      } catch (error) {
        console.warn(`Failed to load product file: ${benefitSlug}/${slug}.yaml`, error);
      }
    }

    // Only add benefit if it has features to show
    if (features.length > 0) {
      benefits.push({
        name: benefit.displayName,
        href: getBenefitHref(benefitSlug),
        features,
        totalFeatureCount,
      });
    }
  }

  return {
    allProducts: {
      name: 'All features',
      href: '/features',
      description: 'See everything Amolino has to offer',
      icon: '/icons/all-products.svg',
    },
    benefits,
  };
}
