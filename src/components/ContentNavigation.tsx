'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface ContentNavigationProps {
  sections: {
    id: string;
    title: string;
  }[];
}

export function ContentNavigation({ sections }: ContentNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden w-full text-left px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-between"
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

      {/* Navigation Tree */}
      <nav
        className={`lg:fixed lg:top-48 lg:right-8 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:block ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 lg:p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            On this page
          </h3>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`${pathname}#${section.id}`}
                  className={`block py-1 px-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
} 