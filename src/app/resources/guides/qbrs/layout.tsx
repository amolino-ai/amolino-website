'use client'

export default function QBRGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-auto">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  )
}
