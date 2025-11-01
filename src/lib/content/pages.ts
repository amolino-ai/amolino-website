import { loadYAML } from './loaders';
import { buildNavbarProductsFromContent } from './navbar-generator';
import { generateFooterBenefitSections } from './footer-generator';
import type {
  HeroContent,
  ProblemContent,
  OutcomeContent,
  NumbersContent,
  BentoSectionContent,
  DarkBentoSectionContent,
  BlindSalesSectionContent,
  SecuritySectionContent,
  FeatureSectionContent,
  IntegrationsSectionContent,
  PricingPageContent,
  FooterContent,
  UseCasePageContent,
  ProductPageContent,
  QBRIntroduction,
  QBRBestPractices,
  QBRSummary,
  NavbarProductsContent,
  NavbarLinksContent,
  BenefitGroupContent,
  ComparisonPageContent,
} from './types';

/**
 * Get hero section content for the home page
 */
export async function getHeroContent(): Promise<HeroContent> {
  return loadYAML<HeroContent>('pages/home/hero.yaml');
}

/**
 * Get problem section content for the home page
 */
export async function getProblemContent(): Promise<ProblemContent> {
  return loadYAML<ProblemContent>('pages/home/problem.yaml');
}

/**
 * Get outcome section content for the home page
 */
export async function getOutcomeContent(): Promise<OutcomeContent> {
  return loadYAML<OutcomeContent>('pages/home/outcome.yaml');
}

/**
 * Get numbers section content for the home page
 */
export async function getNumbersContent(): Promise<NumbersContent> {
  return loadYAML<NumbersContent>('pages/home/numbers.yaml');
}

/**
 * Get bento section content for the home page
 */
export async function getBentoSectionContent(): Promise<BentoSectionContent> {
  return loadYAML<BentoSectionContent>('pages/home/bento-section.yaml');
}

/**
 * Get dark bento section content for the home page
 */
export async function getDarkBentoSectionContent(): Promise<DarkBentoSectionContent> {
  return loadYAML<DarkBentoSectionContent>('pages/home/dark-bento-section.yaml');
}

/**
 * Get blind sales section content for the home page
 */
export async function getBlindSalesSectionContent(): Promise<BlindSalesSectionContent> {
  return loadYAML<BlindSalesSectionContent>('pages/home/blind-sales-section.yaml');
}

/**
 * Get security section content for the home page
 */
export async function getSecuritySectionContent(): Promise<SecuritySectionContent> {
  return loadYAML<SecuritySectionContent>('pages/home/security-section.yaml');
}

/**
 * Get feature section content for the home page
 */
export async function getFeatureSectionContent(): Promise<FeatureSectionContent> {
  return loadYAML<FeatureSectionContent>('pages/home/feature-section.yaml');
}

/**
 * Get integrations section content for the home page
 */
export async function getIntegrationsSectionContent(): Promise<IntegrationsSectionContent> {
  return loadYAML<IntegrationsSectionContent>('pages/home/integrations.yaml');
}

/**
 * Get pricing page content
 */
export async function getPricingPageContent(): Promise<PricingPageContent> {
  return loadYAML<PricingPageContent>('pages/pricing.yaml');
}

/**
 * Get footer content
 * Merges static footer content with dynamically-generated benefit sections
 */
export async function getFooterContent(): Promise<FooterContent> {
  const staticContent = await loadYAML<FooterContent>('global/footer.yaml');
  const benefitSections = await generateFooterBenefitSections();

  return {
    ...staticContent,
    sections: [...staticContent.sections, ...benefitSections],
  };
}

/**
 * Get use case page content
 */
export async function getUseCaseContent(slug: string): Promise<UseCasePageContent> {
  return loadYAML<UseCasePageContent>(`pages/use-cases/${slug}.yaml`);
}

/**
 * Get product page content
 * Supports both nested (benefit/slug) and flat (slug) paths
 */
export async function getProductContent(benefitOrSlug: string, slug?: string): Promise<ProductPageContent> {
  const path = slug
    ? `pages/product/${benefitOrSlug}/${slug}.yaml`  // nested path (new structure)
    : `pages/product/${benefitOrSlug}.yaml`;          // root path (legacy/root-level products)
  return loadYAML<ProductPageContent>(path);
}

/**
 * Get QBR guide introduction content
 */
export async function getQBRIntroduction(): Promise<QBRIntroduction> {
  return loadYAML<QBRIntroduction>('pages/qbr-guide/introduction.yaml');
}

/**
 * Get QBR guide best practices content
 */
export async function getQBRBestPractices(): Promise<QBRBestPractices> {
  return loadYAML<QBRBestPractices>('pages/qbr-guide/best-practices.yaml');
}

/**
 * Get QBR guide summary content
 */
export async function getQBRSummary(): Promise<QBRSummary> {
  return loadYAML<QBRSummary>('pages/qbr-guide/summary.yaml');
}

/**
 * Get navbar products content
 * Dynamically builds navbar from product files at build time
 */
export async function getNavbarProducts(): Promise<NavbarProductsContent> {
  return buildNavbarProductsFromContent();
}

/**
 * Get navbar links content
 */
export async function getNavbarLinks(): Promise<NavbarLinksContent> {
  return loadYAML<NavbarLinksContent>('navbar/links.yaml');
}

/**
 * Get benefit group content
 */
export async function getBenefitGroupContent(slug: string): Promise<BenefitGroupContent> {
  return loadYAML<BenefitGroupContent>(`pages/benefits/${slug}.yaml`);
}

/**
 * Get comparison page content (e.g., Amolino vs HubSpot)
 */
export async function getComparisonPageContent(slug: string): Promise<ComparisonPageContent> {
  return loadYAML<ComparisonPageContent>(`pages/learn/${slug}.yaml`);
}
