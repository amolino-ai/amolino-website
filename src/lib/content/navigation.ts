import { loadYAML } from './loaders';

/**
 * Navigation configuration types
 */
export interface BenefitConfig {
  slug: string;
  oldSlug?: string;
  displayName: string;
  description?: string;
  features: string[];
}

export interface NavigationConfig {
  benefits: BenefitConfig[];
}

/**
 * Load the centralized navigation configuration
 */
export async function getNavigationConfig(): Promise<NavigationConfig> {
  return loadYAML<NavigationConfig>('navigation.yaml');
}

/**
 * Get all benefit slugs from navigation config
 */
export async function getBenefitSlugs(): Promise<string[]> {
  const config = await getNavigationConfig();
  return config.benefits.map((b) => b.slug);
}

/**
 * Get a specific benefit config by slug
 */
export async function getBenefitConfig(slug: string): Promise<BenefitConfig | undefined> {
  const config = await getNavigationConfig();
  return config.benefits.find((b) => b.slug === slug);
}

/**
 * Get display name for a benefit slug
 */
export async function getBenefitDisplayName(slug: string): Promise<string> {
  const benefit = await getBenefitConfig(slug);
  return benefit?.displayName || slug;
}

/**
 * Get benefit href (URL path)
 */
export function getBenefitHref(slug: string): string {
  return `/benefits/${slug}`;
}

/**
 * Get feature href (URL path)
 */
export function getFeatureHref(benefitSlug: string, featureSlug: string): string {
  return `/features/${benefitSlug}/${featureSlug}`;
}

/**
 * Create a map of benefit slugs to display names
 */
export async function getBenefitNameMap(): Promise<Record<string, string>> {
  const config = await getNavigationConfig();
  return config.benefits.reduce(
    (acc, benefit) => {
      acc[benefit.slug] = benefit.displayName;
      return acc;
    },
    {} as Record<string, string>,
  );
}

/**
 * Create a map of benefit slugs to hrefs
 */
export async function getBenefitHrefMap(): Promise<Record<string, string>> {
  const config = await getNavigationConfig();
  return config.benefits.reduce(
    (acc, benefit) => {
      acc[benefit.slug] = getBenefitHref(benefit.slug);
      return acc;
    },
    {} as Record<string, string>,
  );
}
