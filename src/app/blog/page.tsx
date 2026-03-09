import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Link } from '@/components/Link';
import { Heading, Lead, Subheading } from '@/components/Text';
import {
  getBlogPageContent,
  getCategories,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
  getFooterContent,
} from '@/lib/content';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from '@heroicons/react/16/solid';
import { clsx } from 'clsx';
import Image from 'next/image';
import dayjs from 'dayjs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getBlogPageContent();

  return {
    title: content.metadata?.title ?? 'Blog',
    description: content.metadata?.description,
  };
}

const postsPerPage = 5;

async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts(3);

  if (featuredPosts.length === 0) {
    return;
  }

  return (
    <div className="mt-16 bg-linear-to-t from-neutral-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 ring-1 shadow-md shadow-black/5 ring-black/5"
            >
              {post.mainImage && (
                <Image
                  alt={post.mainImage.alt || ''}
                  src={post.mainImage.src}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                  width={post.mainImage.width}
                  height={post.mainImage.height}
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-neutral-700">
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-neutral-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <Image
                        alt=""
                        src={post.author.image}
                        width={24}
                        height={24}
                        className="aspect-square size-6 rounded-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="text-sm/5 text-neutral-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

async function Categories({ selected }: { selected?: string }) {
  const categories = await getCategories();

  if (categories.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            'All categories'}
          <ChevronUpDownIcon className="size-4 fill-neutral-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 ring-1 shadow-lg ring-neutral-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-neutral-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">All categories</p>
            </Link>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-neutral-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-selected:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS Feed
      </Button>
    </div>
  );
}

async function Posts({ page, category }: { page: number; category?: string }) {
  const posts = await getPosts(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category,
  );

  if (posts.length === 0 && (page > 1 || category)) {
    notFound();
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-neutral-500">No posts found.</p>;
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-neutral-100 py-10 first:border-t first:border-t-neutral-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-neutral-700 sm:font-medium">
              {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <Image
                    alt=""
                    src={post.author.image}
                    width={24}
                    height={24}
                    className="aspect-square size-6 rounded-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="text-sm/5 text-neutral-700">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-neutral-500">{post.excerpt}</p>
            <div className="mt-4">
              <Button href={`/blog/${post.slug}`} variant="text" arrow="right">
                <span className="absolute inset-0" />
                Read more
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function Pagination({
  page,
  category,
}: {
  page: number
  category?: string
}) {
  function url(page: number) {
    const params = new URLSearchParams();

    if (category) params.set('category', category);
    if (page > 1) params.set('page', page.toString());

    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog';
  }

  const totalPosts = await getPostsCount(category);
  const hasPreviousPage = page - 1;
  const previousPageUrl = hasPreviousPage ? url(page - 1) : undefined;
  const hasNextPage = page * postsPerPage < totalPosts;
  const nextPageUrl = hasNextPage ? url(page + 1) : undefined;
  const pageCount = Math.ceil(totalPosts / postsPerPage);

  if (pageCount < 2) {
    return;
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-hover:bg-neutral-100',
              'data-active:ring-1 data-active:shadow-sm data-active:ring-black/10',
              'data-active:data-hover:bg-neutral-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

export default async function Blog(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }
) {
  const blogPageContent = await getBlogPageContent();
  const searchParams = await props.searchParams;
  const page =
    'page' in searchParams
      ? typeof searchParams.page === 'string' && parseInt(searchParams.page) > 1
        ? parseInt(searchParams.page)
        : notFound()
      : 1;

  const category =
    typeof searchParams.category === 'string'
      ? searchParams.category
      : undefined;

  const footerContent = await getFooterContent();

  return (
    <main className="overflow-hidden">
      <Container>
        <Subheading className="mt-16">{blogPageContent.listing.subheading}</Subheading>
        <Heading as="h1" className="mt-2">
          {blogPageContent.listing.heading}
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          {blogPageContent.listing.description}
        </Lead>
      </Container>
      {page === 1 && !category && <FeaturedPosts />}
      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>
      <Footer content={footerContent} />
    </main>
  );
}
