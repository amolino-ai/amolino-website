import { loadYAML } from './loaders';
import type { HeroContent, ProblemContent, OutcomeContent } from './types';

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
