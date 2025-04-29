'use client'

import { useSectionStore } from '@/components/SectionProvider'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface GuideNavigationProps {
  sections: {
    id: string
    title: string
  }[]
}

export default function GuideNavigation({ sections }: GuideNavigationProps) {
  const pathname = usePathname()
  const visibleSections = useSectionStore((state) => state.visibleSections)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden w-full text-left px-4 py-2 bg-gray-50 rounded-lg mb-4 flex items-center justify-between"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="font-medium">Table of Contents</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isMobileMenuOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Navigation Container */}
      <nav className={cn(
        "sticky top-0 h-screen w-64 overflow-y-auto border-r border-gray-200 bg-white p-6",
        !isMobileMenuOpen && "hidden lg:block"
      )}>
        <div className="space-y-1">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`${pathname}#${section.id}`}
              className={cn(
                'block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                visibleSections.includes(section.id) && 'bg-gray-50 text-gray-900'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {section.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
} 