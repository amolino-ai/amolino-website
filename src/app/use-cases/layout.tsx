// components/Layout.tsx
import { Container } from '@/components/container'
import { Gradient, GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="overflow-hidden">
        {/* <Container> */}
          <Navbar />
          {/* <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" /> */}
        {/* </Container> */}
        <main >{children}</main>
        <div className="mb-12">
          <LogoCloud />
        </div>
      </div>
    </>
  )
}
