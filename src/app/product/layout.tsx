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
      <GradientBackground />
      {/* <Container>
        <Navbar />
      </Container> */}
      <main className="overflow-hidden">{children}</main>
      <LogoCloud />
    </>
  )
}
