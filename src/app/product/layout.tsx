// components/Layout.tsx
import { LogoCloud } from '@/components/logo-cloud'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="relative">
        <main className="relative">{children}</main>
        <div className="z-10 mb-12">
          <LogoCloud />
        </div>
      </div>
    </>
  )
}
