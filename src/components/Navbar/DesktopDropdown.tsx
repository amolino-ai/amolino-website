'use client';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/components/Link';
import { useState } from 'react';
import type { NavbarProduct, NavbarBenefit } from '@/lib/content/types';

/**
 * Props for the DesktopDropdown component
 */
export interface DesktopDropdownProps {
  /** The featured "All Products" item displayed at the top of the dropdown */
  allProducts: NavbarProduct;
  /** Array of benefit groups with their core features */
  benefits: NavbarBenefit[];
}

/**
 * A desktop dropdown menu component for the navbar that displays benefits
 * in a 3-column grid layout with hover interactions and animated panel transitions.
 *
 * @param props - The component props
 * @returns A popover dropdown with benefit navigation links
 */
export function DesktopDropdown({ allProducts, benefits }: DesktopDropdownProps) {
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
                className="absolute right-0 z-50 mt-1 w-screen max-w-4xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-950/5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* All Products Link */}
                  <Link
                    href={allProducts.href}
                    onClick={handleLinkClick}
                    className="relative flex items-start gap-3 rounded-xl p-4 text-gray-950 transition-colors hover:bg-gray-50 border-b border-gray-100 mb-4"
                  >
                    <img src={allProducts.icon} alt="" className="h-6 w-6 text-pink-600" />
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold">{allProducts.name}</span>
                      <span className="text-sm text-gray-600">{allProducts.description}</span>
                    </div>
                  </Link>

                  {/* 3-Column Benefits Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {benefits.map((benefit: NavbarBenefit) => (
                      <div key={benefit.href} className="flex flex-col">
                        {/* Benefit Name as Header */}
                        <Link
                          href={benefit.href}
                          onClick={handleLinkClick}
                          className="text-base font-semibold text-gray-950 hover:text-indigo-600 transition-colors mb-3"
                        >
                          {benefit.name}
                        </Link>

                        {/* Core Features */}
                        <div className="space-y-3 mb-4">
                          {benefit.features.map((feature, index) => (
                            feature.href ? (
                              <Link
                                key={index}
                                href={feature.href}
                                onClick={handleLinkClick}
                                className="block text-sm rounded-lg p-2 -mx-2 hover:bg-gray-50 transition-colors"
                              >
                                <div className="font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                                  {feature.name}
                                </div>
                                <div className="text-gray-600">{feature.description}</div>
                              </Link>
                            ) : (
                              <div key={index} className="text-sm">
                                <div className="font-medium text-gray-900">{feature.name}</div>
                                <div className="text-gray-600">{feature.description}</div>
                              </div>
                            )
                          ))}
                        </div>

                        {/* All Features Link */}
                        <Link
                          href={benefit.href}
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors mt-auto"
                        >
                          All features →
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </PopoverPanel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Popover>
  );
}
