// Barrel export file for content module
// This allows imports like: import { getHeroContent, BlogPost } from '@/lib/content'

// Type exports
export type {
  BaseContent,
  BlogPost,
  BlogCategory,
  HelpArticle,
  HelpSection,
  HeroContent,
  HeroStat,
  HeroCTAs,
  HeroImage,
  HeroImages,
  ProblemContent,
  ProblemStat,
  Testimonial,
  TestimonialAuthor,
  OutcomeContent,
  OutcomeCard,
  OutcomeCTA,
  NumbersContent,
  NumberStat,
  BentoSectionContent,
  DarkBentoSectionContent,
  BentoCard,
  BlindSalesSectionContent,
  BlindSalesProblem,
  SecuritySectionContent,
  SecurityFeature,
  FeatureSectionContent,
  FeatureTab,
  IntegrationsSectionContent,
  IntegrationCategory,
  Integration,
  PricingPageContent,
  PricingTier,
  PricingFeature,
  PricingHighlight,
  PricingHeader,
  PricingTestimonial,
  PricingFAQ,
} from './types';

// Loader utilities (exported for advanced use cases)
export { loadYAML, getContentFromPath, getSingleContent, getMDXContent, CONTENT_ROOT, BLOG_PATH, HELP_PATH } from './loaders';

// Blog functions
export {
  getAllBlogPosts,
  getBlogPost,
  getBlogPostContent,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
  getCategories,
  getPostsForFeed,
} from './blog';

// Help functions
export {
  getAllHelpArticles,
  getHelpArticle,
  getHelpArticleContent,
  getHelpSections,
  getHelpArticlesBySection,
  getHelpArticlesByTag,
  getHelpTags,
} from './help';

// Page content functions
export {
  getHeroContent,
  getProblemContent,
  getOutcomeContent,
  getNumbersContent,
  getBentoSectionContent,
  getDarkBentoSectionContent,
  getBlindSalesSectionContent,
  getSecuritySectionContent,
  getFeatureSectionContent,
  getIntegrationsSectionContent,
  getPricingPageContent,
} from './pages';
