'use client';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/components/Link';
import { useState } from 'react';
import type { NavbarProduct } from '@/lib/content/types';

/**
 * Props for the DesktopDropdown component
 */
export interface DesktopDropdownProps {
  /** The featured "All Products" item displayed at the top of the dropdown */
  allProducts: NavbarProduct;
  /** Array of individual product items */
  products: NavbarProduct[];
}

/**
 * A desktop dropdown menu component for the navbar that displays products
 * with hover interactions and animated panel transitions.
 *
 * @param props - The component props
 * @returns A popover dropdown with product navigation links
 */
export function DesktopDropdown({ allProducts, products }: DesktopDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  return (
    <Popover className="relative h-full">
      {({ open }: { open: boolean }) => (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="h-full"
        >
          <PopoverButton
            className="flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%] outline-none h-full"
          >
            Product
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </PopoverButton>

          <AnimatePresence>
            {isOpen && (
              <PopoverPanel
                static
                className="absolute left-0 z-50 mt-1 w-screen max-w-sm rounded-2xl bg-white p-2 shadow-lg ring-1 ring-gray-950/5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="relative grid gap-2"
                >
                  <Link
                    href={allProducts.href}
                    onClick={handleLinkClick}
                    className="relative flex items-start gap-3 rounded-xl p-4 text-gray-950 transition-colors hover:bg-gray-50 border-b border-gray-100"
                  >
                    <img src={allProducts.icon} alt="" className="h-6 w-6 text-pink-600" />
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold">{allProducts.name}</span>
                      <span className="text-sm text-gray-600">{allProducts.description}</span>
                    </div>
                  </Link>
                  {products.map((product: NavbarProduct) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={handleLinkClick}
                      className="relative flex items-start gap-3 rounded-xl p-4 text-gray-950 transition-colors hover:bg-gray-50"
                    >
                      <img src={product.icon} alt="" className="h-6 w-6 text-pink-600" />
                      <div className="flex flex-col gap-1">
                        <span className="text-base font-semibold">{product.name}</span>
                        <span className="text-sm text-gray-600">{product.description}</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </PopoverPanel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Popover>
  );
}
