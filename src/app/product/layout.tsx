// components/Layout.tsx
import { Container } from '@/components/container'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="relative">
      {/* <Container> */}
        <Navbar />


        <main className="relative">{children}</main>
        <div className="mb-12 z-10">
          <LogoCloud />
        </div>
        {/* </Container> */}
      </div>
    </>
  )
}
