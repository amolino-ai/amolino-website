'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from './link'
import { Logo } from '@/components/Logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { useState } from 'react'

const products = [
  {
    name: 'AI Revenue Forecasting',
    href: '/product/revenue-analytics',
    description: 'Track pipeline, forecasts, and sales velocity. Make data-driven decisions to meet revenue goals',
  },
  {
    name: 'Guided Selling',
    href: '/product/guided-selling',
    description: 'AI-driven insights on deal health, customer sentiment, and next steps and competition',
  },
  {
    name: 'Team Insights',
    href: '/product/pipeline-visibility',
    description: 'Monitor team performance, and identify find coaching needs, for better sales outcomes',
  },
  {
    name: 'Customer 360',
    href: '/product/pipeline-visibility',
    description: 'All customer interactions, contacts, and documents in one place for faster collaboration',
  },
]

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: 'https://app.amolino.ai', label: 'Login' },
]

function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <PopoverButton 
            className="flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%] outline-none"
          >
            Product
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </PopoverButton>

          <AnimatePresence>
            {isOpen && (
              <PopoverPanel 
                static
                className="absolute left-0 z-[9999] mt-1 w-screen max-w-sm rounded-2xl bg-white p-2 shadow-lg ring-1 ring-gray-950/5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="relative grid gap-2 z-[9999]"
                >
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="relative flex flex-col gap-1 rounded-xl p-4 text-gray-950 transition-colors hover:bg-gray-50"
                    >
                      <span className="text-base font-semibold">{product.name}</span>
                      <span className="text-sm text-gray-600">{product.description}</span>
                    </Link>
                  ))}
                </motion.div>
              </PopoverPanel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Popover>
  )
}

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex z-[9999]">
      <PlusGridItem className="relative flex">
        <ProductDropdown />
      </PlusGridItem>
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <div className="space-y-3">
          <div className="font-medium text-gray-950">Product</div>
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
                rotateX: { duration: 0.3, delay: index * 0.1 },
              }}
              key={product.href}
              className="pl-4"
            >
              <Link href={product.href}>
                <div className="text-base font-medium text-gray-950">{product.name}</div>
                <div className="text-sm text-gray-600">{product.description}</div>
              </Link>
            </motion.div>
          ))}
        </div>
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: (linkIndex + products.length) * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
