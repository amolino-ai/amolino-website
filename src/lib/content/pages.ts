import { loadYAML } from './loaders';
import { buildNavbarProductsFromContent } from './navbar-generator';
import { generateFooterBenefitSections } from './footer-generator';
import { getBenefitSlugs } from './navigation';
import fs from 'fs';
import path from 'path';
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
  FeaturesOverviewContent,
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
  SecurityHero,
  SecurityCertifications,
  SecurityDataProtection,
  SecurityAccessControls,
  SecurityInfrastructure,
  SecurityPractices,
  SecurityContact,
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
 * Get features overview page content
 */
export async function getFeaturesOverviewContent(): Promise<FeaturesOverviewContent> {
  return loadYAML<FeaturesOverviewContent>('pages/features/overview.yaml');
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
  const filePath = slug
    ? `pages/features/${benefitOrSlug}/${slug}.yaml`  // nested path (new structure)
    : `pages/features/${benefitOrSlug}.yaml`;          // root path (legacy/root-level products)
  return loadYAML<ProductPageContent>(filePath);
}

/**
 * Get all products for a specific benefit pillar
 */
export async function getProductsByBenefit(benefit: string): Promise<Array<ProductPageContent & { slug: string }>> {
  const benefitDir = path.join(process.cwd(), 'content', 'pages', 'product', benefit);

  // Check if directory exists
  if (!fs.existsSync(benefitDir)) {
    return [];
  }

  const files = fs.readdirSync(benefitDir).filter(f => f.endsWith('.yaml'));

  const products = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace('.yaml', '');
      const content = await getProductContent(benefit, slug);
      return {
        ...content,
        slug,
      };
    })
  );

  return products;
}

/**
 * Get all products grouped by benefit pillar
 */
export async function getAllProductsGroupedByBenefit() {
  const benefits = await getBenefitSlugs();

  const groupedProducts = await Promise.all(
    benefits.map(async (benefit) => {
      const products = await getProductsByBenefit(benefit);
      const benefitContent = await getBenefitGroupContent(benefit);

      return {
        benefit,
        benefitTitle: benefitContent.hero.title,
        benefitSubtitle: benefitContent.hero.subtitle,
        benefitDescription: benefitContent.hero.description,
        badgeText: benefitContent.hero.badgeText,
        products,
      };
    })
  );

  return groupedProducts;
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

/**
 * Get security page content
 */
export async function getSecurityHero(): Promise<SecurityHero> {
  return loadYAML<SecurityHero>('pages/security/hero.yaml');
}

export async function getSecurityCertifications(): Promise<SecurityCertifications> {
  return loadYAML<SecurityCertifications>('pages/security/certifications.yaml');
}

export async function getSecurityDataProtection(): Promise<SecurityDataProtection> {
  return loadYAML<SecurityDataProtection>('pages/security/data-protection.yaml');
}

export async function getSecurityAccessControls(): Promise<SecurityAccessControls> {
  return loadYAML<SecurityAccessControls>('pages/security/access-controls.yaml');
}

export async function getSecurityInfrastructure(): Promise<SecurityInfrastructure> {
  return loadYAML<SecurityInfrastructure>('pages/security/infrastructure.yaml');
}

export async function getSecurityPractices(): Promise<SecurityPractices> {
  return loadYAML<SecurityPractices>('pages/security/practices.yaml');
}

export async function getSecurityContact(): Promise<SecurityContact> {
  return loadYAML<SecurityContact>('pages/security/contact.yaml');
}
