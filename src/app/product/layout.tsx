// components/Layout.tsx
import { GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'

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
      <div className="mb-12">
        <LogoCloud />
      </div>
    </>
  )
}
