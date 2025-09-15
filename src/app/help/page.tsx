import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Heading, Lead, Subheading } from '@/components/text'
import { getHelpSections, getHelpTags } from '@/lib/content'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, DocumentTextIcon, TagIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import type { Metadata } from 'next'

export const dynamic = 'force-static';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Find guides, tutorials, and documentation to help you get the most out of our platform.',
}

async function HelpSections() {
  const sections = await getHelpSections()

  if (sections.length === 0) {
    return <p className="mt-6 text-gray-500">No help articles found.</p>
  }

  return (
    <div className="mt-6">
      {sections.map((section) => (
        <div key={section.slug} className="mb-12">
          <h2 className="mb-6 border-b border-gray-200 pb-2 text-xl font-semibold capitalize">{section.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.articles.map((article) => (
              <div
                key={article.slug}
                className="relative flex flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <DocumentTextIcon className="mt-0.5 size-5 flex-shrink-0 text-blue-600" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base leading-6 font-medium">
                      <Link href={`/help/${article.slug}`}>
                        <span className="absolute inset-0" />
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">{article.excerpt}</p>

                    {article.tags && article.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
                          >
                            <TagIcon className="size-3" />
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="text-xs text-gray-500">+{article.tags.length - 3} more</span>
                        )}
                      </div>
                    )}

                    <div className="mt-4 text-xs text-gray-500">
                      Last updated: {dayjs(article.lastUpdated).format('MMM D, YYYY')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

async function HelpFilters({ selectedTag }: { selectedTag?: string }) {
  const tags = await getHelpTags()

  if (tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {selectedTag ? `Tagged: ${selectedTag}` : 'All topics'}
          <ChevronUpDownIcon className="size-4 fill-gray-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="max-h-60 min-w-40 overflow-y-auto rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/help"
              data-selected={selectedTag === undefined ? true : undefined}
              className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">All topics</p>
            </Link>
          </MenuItem>
          {tags.map((tag) => (
            <MenuItem key={tag}>
              <Link
                href={`/help?tag=${tag}`}
                data-selected={tag === selectedTag ? true : undefined}
                className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-selected:block" />
                <p className="col-start-2 text-sm/6">{tag}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      <div className="flex gap-2">
        <Button variant="outline" href="/help/search" className="gap-1">
          Search Help
        </Button>
      </div>
    </div>
  )
}

async function FilteredHelpArticles({ tag }: { tag?: string }) {
  if (!tag) {
    return <HelpSections />
  }

  // If we have a tag filter, we'll need to import and use getHelpArticlesByTag
  const { getHelpArticlesByTag } = await import('@/lib/content')
  const articles = await getHelpArticlesByTag(tag)

  if (articles.length === 0) {
    return (
      <div className="mt-6 py-12 text-center">
        <TagIcon className="mx-auto size-12 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">No articles found</h3>
        <p className="mt-2 text-gray-500">
          No help articles are tagged with &ldquo;{tag}&rdquo;. Try browsing all topics or search for something else.
        </p>
        <Button href="/help" variant="outline" className="mt-4">
          Browse all topics
        </Button>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <h2 className="mb-6 border-b border-gray-200 pb-2 text-xl font-semibold">
        Articles tagged with &ldquo;{tag}&rdquo;
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
        <div
            key={article.slug}
            className="relative flex flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <DocumentTextIcon className="mt-0.5 size-5 flex-shrink-0 text-blue-600" />
              <div className="min-w-0 flex-1">
                <div className="mb-1 text-xs text-gray-500 capitalize">
                  {article.section} {article.subsection && `/ ${article.subsection}`}
                </div>
                <h3 className="text-base leading-6 font-medium">
                  <Link href={`/help/${article.slug}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{article.excerpt}</p>

                {article.tags && article.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {article.tags.slice(0, 3).map((articleTag) => (
                      <span
                        key={articleTag}
                        className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                          articleTag === tag ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <TagIcon className="size-3" />
                        {articleTag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="text-xs text-gray-500">+{article.tags.length - 3} more</span>
                    )}
                  </div>
                )}

                <div className="mt-4 text-xs text-gray-500">
                  Last updated: {dayjs(article.lastUpdated).format('MMM D, YYYY')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function HelpCenter(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams

  const selectedTag = typeof searchParams.tag === 'string' ? searchParams.tag : undefined

  return (
    <main className="overflow-hidden">
      <Container>
        <Subheading className="mt-16">Help Center</Subheading>
        <Heading as="h1" className="mt-2">
          Get the help you need.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Find guides, tutorials, and documentation to help you get the most out of our platform. Search by topic or
          browse through our organized help sections.
        </Lead>
      </Container>

      <Container className="mt-16 pb-24">
        <HelpFilters selectedTag={selectedTag} />
        <FilteredHelpArticles tag={selectedTag} />
      </Container>

    </main>
  )
}
