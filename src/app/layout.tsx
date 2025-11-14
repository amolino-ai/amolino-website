import { Providers } from '@/app/providers';
import { GradientBackground } from '@/components/Gradient';
import { Layout } from '@/components/Layout';
import { PostHogProvider } from '@/components/PostHogProvider';
import { type Section } from '@/components/SectionProvider';
import { Navbar } from '@/components/Navbar';
import { Container } from '@/components/Container';
import { getFooterContent, getNavbarProducts, getNavbarLinks } from '@/lib/content';
import '@/styles/tailwind.css';
import '@mantine/core/styles.css';
import glob from 'fast-glob';
import { type Metadata } from 'next';
import { Inter, JetBrains_Mono, Lexend } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';


// Font configurations
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
  title: {
    template: `%s${TITLE_SUFFIX}`,
    default: `AmolinoAI | ${TITLE_SUFFIX}`,
  },
  description: 'Transform your pipeline visibility, forecast accuracy, and deal execution with Amolino.',
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
  let pages = await glob('**/*.mdx', { cwd: 'src/app' });
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)*page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>;
  let allSections = Object.fromEntries(allSectionsEntries);
  const footerContent = await getFooterContent();
  const navbarProducts = await getNavbarProducts();
  const navbarLinks = await getNavbarLinks();

  return (
    <html
      lang="en"
      className={`h-full ${inter.variable} ${lexend.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="h-full text-gray-950 antialiased" suppressHydrationWarning>
        <Script
          id="reb2b-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("9NMMZHPQGVNW");`,
          }}
        />
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
