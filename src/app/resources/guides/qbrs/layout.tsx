'use client'

import { Navbar } from '@/components/Navbar'

export default function QBRGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-auto">
        <div className="flex min-h-screen">
          <main className="flex-1 p-8">{children}</main>
        </div>
      </main>
    </>
  )
}
