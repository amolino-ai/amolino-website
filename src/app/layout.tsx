import glob from 'fast-glob'
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { PostHogProvider } from '@/components/PostHogProvider'
import { type Section } from '@/components/SectionProvider'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Protocol API Reference',
    default: 'Protocol API Reference',
  },
}

export async function layoutA({ children }: { children: React.ReactNode }) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)*page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      {/* <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900"> */}
      <body
        className="h-full text-gray-950 antialiased"
        suppressHydrationWarning
      >
        <PostHogProvider>
          <Providers>
            <div className="w-full">
              <Layout allSections={allSections}>{children}</Layout>
            </div>
          </Providers>
        </PostHogProvider>
      </body>
    </html>
  )
}

export async function layoutB({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return layoutA({ children })
}
