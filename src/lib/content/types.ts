// Base content interface
export interface BaseContent {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
}

// Blog-specific interfaces
export interface BlogPost extends BaseContent {
  isFeatured?: boolean;
  mainImage?: {
    src: string;
    alt: string;
  };
  author?: {
    name: string;
    image?: string;
  };
  categories?: Array<{
    title: string;
    slug: string;
  }>;
}

export interface BlogCategory {
  title: string;
  slug: string;
}

// Help article interfaces
export interface HelpArticle extends BaseContent {
  section: string; // e.g., "integrations", "product"
  subsection?: string; // e.g., "microsoft", "features"
  order?: number; // for ordering within sections
  tags?: string[];
  lastUpdated?: string;
}

export interface HelpSection {
  title: string;
  slug: string;
  articles: HelpArticle[];
}

// Hero content interfaces
export interface HeroStat {
  value: string;
  description: string;
}

export interface HeroCTAs {
  primaryUrl: string;
  secondaryUrl: string;
  tertiaryUrl: string;
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroImages {
  light: HeroImage;
  dark: HeroImage;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  stats: HeroStat[];
  ctas: HeroCTAs;
  images: HeroImages;
}

// Problem section interfaces
export interface ProblemStat {
  percentage: string;
  statDescription: string;
  problemDescription: string;
}

export interface TestimonialAuthor {
  name: string;
  title: string;
  initials: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: TestimonialAuthor;
}

export interface ProblemContent {
  sectionLabel: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  problems: ProblemStat[];
  testimonial: Testimonial;
}

// Outcome section interfaces
export interface OutcomeCard {
  id: number;
  label: string;
  title: string;
  description: string;
  statBadge: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  bgColor: string;
  textColor: string;
  illustration: string;
}

export interface OutcomeCTA {
  text: string;
  url: string;
}

export interface OutcomeContent {
  eyebrow: string;
  headline: string;
  description: string;
  cta: OutcomeCTA;
  products: OutcomeCard[];
}

// Numbers section interfaces
export interface NumberStat {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}

export interface NumbersContent {
  title: string;
  stats: NumberStat[];
}

// Bento section interfaces
export interface BentoCard {
  eyebrow: string;
  title: string;
  description: string;
  graphic: {
    type: 'image' | 'background';
    src: string;
    size?: string;
    position?: string;
  };
  fade?: Array<'top' | 'bottom' | 'left' | 'right'>;
  className?: string;
}

export interface BentoSectionContent {
  subheading: string;
  heading: string;
  description: string;
  cards: BentoCard[];
}

// Dark Bento section interfaces (same structure as Bento but with dark prop)
export interface DarkBentoSectionContent {
  subheading: string;
  heading: string;
  description: string;
  cards: BentoCard[];
}

// Blind sales section interfaces
export interface BlindSalesProblem {
  title: string;
  description: string;
  iconPath: string;
}

export interface BlindSalesSectionContent {
  mainHeading: string;
  subheading: string;
  problems: BlindSalesProblem[];
  solutionHeading: string;
  solutionDescription: string;
}

// Security section interfaces
export interface SecurityFeature {
  title: string;
  description: string;
}

export interface SecuritySectionContent {
  heading: string;
  description: string;
  features: SecurityFeature[];
}

// Feature section interfaces
export interface FeatureTab {
  id: string;
  title: string;
  description: string;
  src: string;
}

export interface FeatureSectionContent {
  tabs: FeatureTab[];
}

// Integrations section interfaces
export interface Integration {
  name: string;
  src: string;
  alt?: string;
}

export interface IntegrationCategory {
  title: 'MEETINGS' | 'EMAIL' | 'MESSAGING' | 'CRM';
  integrations: Integration[];
}

export interface IntegrationsSectionContent {
  subheading: string;
  heading: string;
  description: string;
  tagline: string;
  categories: IntegrationCategory[];
  cta: {
    primaryText: string;
    primaryUrl: string;
  };
}

// Pricing page interfaces
export interface PricingHighlight {
  description: string;
  disabled?: boolean;
}

export interface PricingFeature {
  section: string;
  name: string;
  value: boolean | string;
}

export interface PricingTier {
  name: string;
  slug: string;
  description: string;
  priceMonthly: number;
  href: string;
  highlights: PricingHighlight[];
  features: PricingFeature[];
}

export interface PricingHeader {
  heading: string;
  lead: string;
}

export interface PricingTestimonial {
  quote: string;
  image: string;
  authorRole: string;
}

export interface PricingFAQ {
  question: string;
  answer: string;
}

export interface PricingPageContent {
  header: PricingHeader;
  tiers: PricingTier[];
  testimonial?: PricingTestimonial;
  faqs: PricingFAQ[];
}

// Footer interfaces
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  heading: string;
  links: FooterLink[];
}

export interface FooterCTA {
  subheading: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface FooterSocial {
  platform: 'linkedin' | 'facebook' | 'twitter';
  href: string;
  ariaLabel: string;
}

export interface FooterContent {
  cta: FooterCTA;
  sections: FooterSection[];
  socials: FooterSocial[];
  copyright: string;
}

// Use Case Page content interfaces
export interface UseCaseHero {
  badgeText: string;
  badgeBgColor: string;
  badgeTextColor: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface UseCaseStat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface UseCaseFeature {
  title: string;
  children: string;
}

export interface UseCaseChallenge {
  subheading: string;
  heading: string;
  description: string;
  stats: UseCaseStat[];
  features: UseCaseFeature[];
}

export interface UseCaseSolutionFeature {
  title: string;
  items: string[];
}

export interface UseCaseSolution {
  subheading: string;
  heading: string;
  features: UseCaseSolutionFeature[];
}

export interface UseCaseImpact {
  subheading: string;
  heading: string;
  description: string;
  stats: UseCaseStat[];
}

export interface UseCaseBottomCTA {
  heading: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface UseCasePageContent {
  hero: UseCaseHero;
  challenge: UseCaseChallenge;
  solution: UseCaseSolution;
  impact: UseCaseImpact;
  bottomCta: UseCaseBottomCTA;
}
