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
