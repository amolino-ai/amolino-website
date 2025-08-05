// lib/blog.ts
import glob from 'fast-glob'
import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import { join } from 'path'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  isFeatured?: boolean
  mainImage?: {
    src: string
    alt: string
  }
  author?: {
    name: string
    image?: string
  }
  categories?: Array<{
    title: string
    slug: string
  }>
}

export interface BlogCategory {
  title: string
  slug: string
}

const CONTENT_PATH = 'content/blog' // Changed from src/app/blog

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    // Find all MDX files in the content directory
    const blogFiles = await glob('*.mdx', {
      cwd: CONTENT_PATH,
    })

    const posts = await Promise.all(
      blogFiles.map(async (file) => {
        // Extract slug from file name (e.g., "my-post.mdx" -> "my-post")
        const slug = file.replace('.mdx', '')
        const fullPath = join(process.cwd(), CONTENT_PATH, file)

        try {
          const fileContents = await readFile(fullPath, 'utf8')
          const { data } = matter(fileContents)

          return {
            slug,
            title: data.title || '',
            excerpt: data.excerpt || '',
            publishedAt: data.publishedAt || new Date().toISOString(),
            isFeatured: data.isFeatured || false,
            mainImage: data.mainImage || null,
            author: data.author || null,
            categories: data.categories || [],
          } as BlogPost
        } catch (error) {
          console.error(`Error reading ${file}:`, error)
          return null
        }
      }),
    )

    // Filter out null entries and sort by publishedAt descending
    const validPosts = posts.filter(Boolean) as BlogPost[]
    return validPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = join(process.cwd(), CONTENT_PATH, `${slug}.mdx`)
    const fileContents = await readFile(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      publishedAt: data.publishedAt || new Date().toISOString(),
      isFeatured: data.isFeatured || false,
      mainImage: data.mainImage || null,
      author: data.author || null,
      categories: data.categories || [],
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

// Helper function to get MDX content
export async function getBlogPostContent(slug: string): Promise<string | null> {
  try {
    const fullPath = join(process.cwd(), CONTENT_PATH, `${slug}.mdx`)
    const fileContents = await readFile(fullPath, 'utf8')
    const { content } = matter(fileContents)
    return content
  } catch (error) {
    console.error(`Error reading blog post content ${slug}:`, error)
    return null
  }
}

// Keep your existing functions
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.filter((post) => post.isFeatured).slice(0, limit)
}

export async function getPosts(startIndex: number = 0, endIndex: number = 5, category?: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts()
  let filteredPosts = allPosts

  if (category) {
    filteredPosts = allPosts.filter((post) => post.categories?.some((cat) => cat.slug === category))
  }

  if (!category) {
    filteredPosts = filteredPosts.filter((post) => !post.isFeatured)
  }

  return filteredPosts.slice(startIndex, endIndex)
}

export async function getPostsCount(category?: string): Promise<number> {
  const allPosts = await getAllBlogPosts()

  if (category) {
    return allPosts.filter((post) => post.categories?.some((cat) => cat.slug === category)).length
  }

  return allPosts.filter((post) => !post.isFeatured).length
}

export async function getCategories(): Promise<BlogCategory[]> {
  const allPosts = await getAllBlogPosts()
  const categoryMap = new Map<string, string>()

  allPosts.forEach((post) => {
    post.categories?.forEach((category) => {
      categoryMap.set(category.slug, category.title)
    })
  })

  return Array.from(categoryMap.entries())
    .map(([slug, title]) => ({ slug, title }))
    .sort((a, b) => a.title.localeCompare(b.title))
}

export async function getPostsForFeed(): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts()
  // Return all posts for feed, featured first
  return allPosts.sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1
    if (!a.isFeatured && b.isFeatured) return 1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}
