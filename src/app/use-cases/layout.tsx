// components/Layout.tsx
import { Container } from '@/components/container'
import { GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="overflow-hidden">
        <Container>
          <Navbar />
        </Container>
        <main >{children}</main>
        <div className="mb-12">
          <LogoCloud />
        </div>
      </div>
    </>
  )
}
