'use client'

import { usePathname } from 'next/navigation'

import { Footer } from '@/components/footer'
import { type Section, SectionProvider } from '@/components/SectionProvider'

export function Layout({
  children,
  allSections,
}: {
  children: React.ReactNode
  allSections: Record<string, Array<Section>>
}) {
  let pathname = usePathname()

  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      {/* MDX Layout */}
      {/* <div className="h-full lg:ml-72 xl:ml-80">  */}
      <div className="h-full">
        {/* <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-6" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header> */}

        {/* We have removed the pt-14 from the following class MDX Layout */}
        <div className="relative flex h-full flex-col px-4 sm:px-6 lg:px-8">
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
