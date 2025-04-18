import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'
import glob from 'fast-glob'
import { type Metadata } from 'next'
import { Inter, Lexend, JetBrains_Mono } from 'next/font/google'

import { Container } from '@/components/container'
import { GradientBackground } from '@/components/gradient'
import '@/styles/tailwind.css'
import '@mantine/core/styles.css'

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

export const metadata: Metadata = {
  title: {
    template: '%s - Amolino | Transform Pipeline Visibility, Forecast Accuracy & Deal Execution',
    default: 'Amolino | Transform Pipeline Visibility, Forecast Accuracy & Deal Execution',
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
      {/* <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900"> */}
      <body className="h-full text-gray-950 antialiased" suppressHydrationWarning>
          <Providers>
            {/* <Container> */}
              <GradientBackground />
              <div className="w-full">
                <Layout allSections={allSections}>{children}</Layout>
              </div>
            {/* </Container> */}
          </Providers>
      </body>
    </html>
  )
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return <LayoutA>{children}</LayoutA>
}
