import { loadYAML } from './loaders';
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
 */
export async function getFooterContent(): Promise<FooterContent> {
  return loadYAML<FooterContent>('global/footer.yaml');
}

/**
 * Get use case page content
 */
export async function getUseCaseContent(slug: string): Promise<UseCasePageContent> {
  return loadYAML<UseCasePageContent>(`pages/use-cases/${slug}.yaml`);
}

/**
 * Get product page content
 */
export async function getProductContent(slug: string): Promise<ProductPageContent> {
  return loadYAML<ProductPageContent>(`pages/product/${slug}.yaml`);
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
 */
export async function getNavbarProducts(): Promise<NavbarProductsContent> {
  return loadYAML<NavbarProductsContent>('navbar/products.yaml');
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
  return loadYAML<BenefitGroupContent>(`pages/benefit-groups/${slug}.yaml`);
}
