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
