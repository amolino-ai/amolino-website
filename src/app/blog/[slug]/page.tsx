import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import * as mdxComponents from '@/components/mdx'
import { getBlogPost, getBlogPostContent } from '@/lib/blog'
import { cn } from '@/lib/utils' // or import clsx from 'clsx'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import styles from '../blog.module.css'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  const content = await getBlogPostContent(slug)

  if (!post || !content) {
    notFound()
  }

  return (
    <main className="overflow-hidden">
      <Container className="relative">
        <div className={cn(styles.blogContent, 'pb-24')}>
          <div className={styles.blogHeader}>
            <p className={cn(styles.blogSubheading, 'mt-16')}>{dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}</p>
            <h1 className={cn(styles.blogTitle, 'mt-2')}>{post.title}</h1>
          </div>

          <div className={styles.blogMeta}>
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img alt="" src={post.author.image} className="aspect-square size-8 rounded-full object-cover" />
                )}
                <div className={styles.blogAuthor}>{post.author.name}</div>
              </div>
            )}

            {Array.isArray(post.categories) && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span key={category.slug} className={styles.blogCategory}>
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.mainImage && (
            <img
              alt={post.mainImage.alt || ''}
              src={post.mainImage.src}
              className="mt-10 mb-12 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
            />
          )}

          <div className={styles.blogProse}>
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          <div className={styles.blogBackButton}>
            <Button variant="outline" href="/blog">
              <ChevronLeftIcon className="size-4" />
              Back to blog
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
