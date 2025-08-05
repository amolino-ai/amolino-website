// components/Layout.tsx
import { LogoCloud } from '@/components/logo-cloud'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="overflow-hidden">
        <main>{children}</main>
        <div className="mb-12">
          <LogoCloud />
        </div>
      </div>
    </>
  )
}
