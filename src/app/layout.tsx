import { Providers } from '@/app/providers'
import { GradientBackground } from '@/components/gradient'
import { Layout } from '@/components/Layout'
import { PostHogProvider } from '@/components/PostHogProvider'
import { type Section } from '@/components/SectionProvider'
import '@/styles/tailwind.css'
import '@mantine/core/styles.css'
import glob from 'fast-glob'
import { type Metadata } from 'next'
import { Inter, JetBrains_Mono, Lexend } from 'next/font/google'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

// Next.js built-in metadata
export const metadata: Metadata = {
  title: {
    template: '%s - Amolino | Transform Pipeline Visibility, Forecast Accuracy & Deal Execution',
    default: 'Amolino | Transform Pipeline Visibility, Forecast Accuracy & Deal Execution',
  },
  description: 'Transform your pipeline visibility, forecast accuracy, and deal execution with Amolino.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amolino.com/',
    siteName: 'AmolinoAI',
    images: [
      {
        url: 'https://amolino.ai/screenshots/Dashboard%20-%20Sales%20Rep%20-%20Feb%202025.png',
        width: 940,
        height: 767,
        alt: 'AmolinoAI Dashboard',
      },
    ],
  },
}


export async function LayoutA({ children }: { children: React.ReactNode }) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)*page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html
      lang="en"
      className={`h-full ${inter.variable} ${lexend.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="h-full text-gray-950 antialiased" suppressHydrationWarning>
        <PostHogProvider>
          <Providers>
            {/* Add DefaultSeo component here */}
            {/* <DefaultSeo {...SEO} useAppDir={true} /> */}
            <GradientBackground />
            <div className="w-full">
              <Layout allSections={allSections}>{children}</Layout>
            </div>
          </Providers>
        </PostHogProvider>
      </body>
    </html>
  )
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return <LayoutA>{children}</LayoutA>
}
