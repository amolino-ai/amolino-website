import { Providers } from '@/app/providers';
import { GradientBackground } from '@/components/Gradient';
import { Layout } from '@/components/Layout';
import { PostHogProvider } from '@/lib/posthog';
import { type Section } from '@/components/SectionProvider';
import { Navbar } from '@/components/Navbar';
import { Container } from '@/components/Container';
import { getFooterContent, getNavbarProducts, getNavbarLinks } from '@/lib/content';
import '@/styles/tailwind.css';
import '@mantine/core/styles.css';
import glob from 'fast-glob';
import { type Metadata } from 'next';
import { Inter, JetBrains_Mono, Lexend, Manrope } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import { RB2BScript, ApolloScript, InstantlyScript, HappierLeadsScript } from '@/components/TrackingScripts';


// Font configurations
// Manrope is the AmolinoAI Design System v2 typeface; --font-sans points at it
// in src/styles/tailwind.css, so it applies document-wide via Tailwind preflight.
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});


const WEBSITE_URL = process.env.WEBSITE_URL || 'https://amolino.ai';
const TITLE_SUFFIX = process.env.TITLE_SUFFIX || ' | AmolinoAI | Transform Pipeline Visibility, Forecast Accuracy & Deal Execution';

// Next.js built-in metadata
export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    template: `%s${TITLE_SUFFIX}`,
    default: `AmolinoAI | ${TITLE_SUFFIX}`,
  },
  description: 'Transform your pipeline visibility, forecast accuracy, and deal execution with Amolino.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: WEBSITE_URL,
    siteName: 'AmolinoAI',
    images: [
      {
        url: 'https://amolino.ai/screenshots/opportunity-details-compass.png',
        width: 1440,
        height: 900,
        alt: 'AmolinoAI Dashboard',
      },
    ],
  },
};



export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pages = await glob('**/*.mdx', { cwd: 'src/app' });
  const allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)*page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>;
  const allSections = Object.fromEntries(allSectionsEntries);
  const footerContent = await getFooterContent();
  const navbarProducts = await getNavbarProducts();
  const navbarLinks = await getNavbarLinks();
  const rb2bId = process.env.RB2B_ID;

  if (!rb2bId) {
    console.error('RB2B_ID environment variable is not defined');
  }

  return (
    <html
      lang="en"
      className={`h-full ${manrope.variable} ${inter.variable} ${lexend.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="h-full font-sans text-neutral-950 antialiased" suppressHydrationWarning>
        {rb2bId && <RB2BScript rb2bId={rb2bId} />}
        <ApolloScript appId="67bc851a9bad43001da9ade8" />
        <InstantlyScript pid="1yBt6e3kBBth7Eka1" />
        <HappierLeadsScript clientId="568kQ16Wk7YDHk6HZaWyD2" />
        <PostHogProvider>
          <Providers>
            {/* Add DefaultSeo component here */}
            {/* <DefaultSeo {...SEO} useAppDir={true} /> */}
            <GradientBackground />
            <div className="w-full">
              <Container>
            <Navbar
              allProducts={navbarProducts.allProducts}
              benefits={navbarProducts.benefits || []}
              links={navbarLinks.links}
            />
            </Container>
              <Layout allSections={allSections} footerContent={footerContent}>{children}</Layout>
            </div>
          </Providers>
        </PostHogProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
