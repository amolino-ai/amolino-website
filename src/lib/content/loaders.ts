import glob from 'fast-glob';
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import path from 'path';
import type { BaseContent } from './types';

export const CONTENT_ROOT = path.join(process.cwd(), 'content');
export const BLOG_PATH = path.join(CONTENT_ROOT, 'blog');
export const HELP_PATH = path.join(CONTENT_ROOT, 'help');

/**
 * Load and parse a YAML file from the content directory
 * @param filePath - Relative path from content/ directory (e.g., 'pages/home/hero.yaml') or absolute path
 * @returns Parsed YAML content as typed object
 */
export async function loadYAML<T>(filePath: string): Promise<T> {
  try {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.join(CONTENT_ROOT, filePath);
    const fileContents = await readFile(fullPath, 'utf8');
    const parsed = yaml.load(fileContents) as T;
    return parsed;
  } catch (error) {
    console.error(`Error loading YAML file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Generic function to get multiple MDX content items from a path
 */
export async function getContentFromPath<T extends BaseContent>(
  contentPath: string,
  pattern: string = '**/*.mdx',
  transformFn: (slug: string, data: any, fullPath: string) => T,
): Promise<T[]> {
  try {
    const files = await glob(pattern, {
      cwd: contentPath,
      absolute: true,
      onlyFiles: true,
    });

    const content = await Promise.all(
      files.map(async (file) => {
        const fullPath = path.isAbsolute(file) ? file : path.join(contentPath, file);

        try {
          const fileContents = await readFile(fullPath, 'utf8');
          const { data } = matter(fileContents);

          // Create slug from relative path, not absolute path
          const relativePath = path.relative(contentPath, fullPath);
          const slug = relativePath.replace(/\.mdx?$/, '').replace(/\\/g, '/');

          return transformFn(slug, data, fullPath);
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
          return null;
        }
      }),
    );

    return content.filter(Boolean) as T[];
  } catch (error) {
    console.error(`Error reading content from ${contentPath}:`, error);
    return [];
  }
}

/**
 * Generic function to get a single MDX content item
 */
export async function getSingleContent<T extends BaseContent>(
  contentPath: string,
  slug: string,
  transformFn: (slug: string, data: any, fullPath: string) => T,
): Promise<T | null> {
  try {
    const fullPath = path.isAbsolute(slug) ? slug : path.join(contentPath, `${slug}.mdx`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return transformFn(slug, data, fullPath);
  } catch (error) {
    console.error(`Error reading content ${slug}:`, error);
    return null;
  }
}

/**
 * Get MDX content body (without frontmatter)
 */
export async function getMDXContent(contentPath: string, slug: string): Promise<string | null> {
  try {
    const fullPath = path.isAbsolute(slug) ? slug : path.join(contentPath, `${slug}.mdx`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { content } = matter(fileContents);
    return content;
  } catch (error) {
    console.error(`Error reading content ${slug}:`, error);
    return null;
  }
}
