'use client';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/components/Link';
import { useState, useEffect, useRef } from 'react';
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
  const [useVerticalLayout, setUseVerticalLayout] = useState<boolean>(false);
  const [hideAllProducts, setHideAllProducts] = useState<boolean>(false);
  const [position, setPosition] = useState<{ top: number; left: number; translateX: string }>({
    top: 0,
    left: 0,
    translateX: '-50%',
  });
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  // Check if viewport is too narrow for horizontal layout
  useEffect(() => {
    const checkLayout = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Use vertical layout on smaller desktop screens (1024px-1366px)
      // where horizontal 3-column layout might look cramped
      // Desktop mode is >= 1024px (lg breakpoint)
      // Below 1024px, mobile nav takes over
      const shouldUseVertical = viewportWidth >= 1024 && viewportWidth < 1250;
      setUseVerticalLayout(shouldUseVertical);

      // If using vertical layout, check if there's enough height for All Products section
      if (shouldUseVertical) {
        // Estimate required height for vertical layout:
        // - All Products section: ~100px (icon + text + padding + border)
        // - Each benefit: ~200-250px (header + 2-4 features + "All features" link)
        // - 3 benefits: ~600-750px
        // - Panel padding: 48px (p-6 top and bottom)
        // - Navbar height from top + spacing: ~150px
        // Total minimum: ~750-900px
        // We use 800px as a reasonable threshold for most laptop screens
        const estimatedMinHeight = 600;
        const navbarAndSpacing = 150; // Navbar height + margin
        const availableHeight = viewportHeight - navbarAndSpacing;

        // Debug logging
        console.log('Height check:', {
          viewportWidth,
          viewportHeight,
          availableHeight,
          estimatedMinHeight,
          shouldHide: availableHeight < estimatedMinHeight,
          useVertical: shouldUseVertical,
        });

        if (availableHeight < estimatedMinHeight) {
          setHideAllProducts(true);
        } else {
          setHideAllProducts(false);
        }
      } else {
        setHideAllProducts(false);
      }
    };

    // Check on mount and window resize
    checkLayout();
    window.addEventListener('resize', checkLayout);

    return () => {
      window.removeEventListener('resize', checkLayout);
    };
  }, []);

  // Debug: Log when hideAllProducts changes
  useEffect(() => {
    console.log('hideAllProducts state changed to:', hideAllProducts);
  }, [hideAllProducts]);

  // Calculate position for fixed positioning with edge detection
  useEffect(() => {
    if (!isOpen || !buttonRef.current) {
      return;
    }

    const calculatePosition = () => {
      const button = buttonRef.current;
      const panel = panelRef.current;
      if (!button) return;

      const buttonRect = button.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const padding = 16; // 1rem padding from viewport edges

      // Calculate button center in viewport coordinates
      const buttonCenter = buttonRect.left + buttonRect.width / 2;
      const top = buttonRect.bottom + 4; // mt-1 = 4px

      let left = buttonCenter;
      let translateX = '-50%'; // Center the flyout under the button

      // If panel is rendered, check for edge overflow
      if (panel) {
        const panelRect = panel.getBoundingClientRect();
        const panelHalfWidth = panelRect.width / 2;

        // Check for left edge overflow
        const leftOverflow = buttonCenter - panelHalfWidth;
        const rightOverflow = buttonCenter + panelHalfWidth - viewportWidth;

        if (leftOverflow < padding) {
          // Would overflow left edge - align to left padding
          left = panelHalfWidth + padding;
          translateX = '-50%';
        } else if (rightOverflow > -padding) {
          // Would overflow right edge - align to right padding
          left = viewportWidth - panelHalfWidth - padding;
          translateX = '-50%';
        }
      }

      setPosition({ top, left, translateX });
    };

    // Calculate immediately and after a short delay to account for panel rendering
    calculatePosition();
    const timeoutId = setTimeout(calculatePosition, 10);

    // Recalculate on window resize
    window.addEventListener('resize', calculatePosition);
    window.addEventListener('scroll', calculatePosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [isOpen]);

  return (
    <Popover className="relative h-full">
      {({ open: _open }: { open: boolean }) => (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="h-full"
        >
          <PopoverButton
            ref={buttonRef}
            className="flex items-center gap-1 px-4 py-3 text-base font-medium text-neutral-950 bg-blend-multiply data-hover:bg-black/[2.5%] outline-none h-full"
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
                ref={panelRef}
                className="fixed z-50 w-screen max-w-4xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-neutral-950/5"
                style={{
                  top: `${position.top}px`,
                  left: `${position.left}px`,
                  transform: `translateX(${position.translateX})`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* All Products Link - Hidden when vertical layout has insufficient height */}
                  {!hideAllProducts && (
                    <Link
                      href={allProducts.href}
                      onClick={handleLinkClick}
                      className="relative flex items-start gap-3 rounded-xl p-4 text-neutral-950 transition-colors hover:bg-neutral-50 border-b border-neutral-100 mb-4"
                    >
                      <img src={allProducts.icon} alt="" className="h-6 w-6 text-pink-600" />
                      <div className="flex flex-col gap-1">
                        <span className="text-base font-semibold">{allProducts.name}</span>
                        <span className="text-sm text-neutral-600">{allProducts.description}</span>
                      </div>
                    </Link>
                  )}

                  {/* 3-Column Benefits Grid (or vertical on narrow viewports) */}
                  <div className={`grid ${useVerticalLayout ? 'grid-cols-1' : 'grid-cols-3'} gap-6`}>
                    {benefits.map((benefit: NavbarBenefit) => (
                      <div key={benefit.href} className="flex flex-col">
                        {/* Benefit Name as Header */}
                        <Link
                          href={benefit.href}
                          onClick={handleLinkClick}
                          className="text-base font-semibold text-neutral-950 hover:text-primary-600 transition-colors mb-3"
                        >
                          {benefit.name}
                        </Link>

                        {/* Core Features - Hidden when height is constrained (similar to mobile) */}
                        {!hideAllProducts && (
                          <>
                            <div className="space-y-3 mb-4">
                              {benefit.features.map((feature, index) => (
                                feature.href ? (
                                  <Link
                                    key={index}
                                    href={feature.href}
                                    onClick={handleLinkClick}
                                    className="block text-sm rounded-lg p-2 -mx-2 hover:bg-neutral-50 transition-colors"
                                  >
                                    <div className="font-medium text-neutral-900 hover:text-primary-600 transition-colors">
                                      {feature.name}
                                    </div>
                                    <div className="text-neutral-600">{feature.description}</div>
                                  </Link>
                                ) : (
                                  <div key={index} className="text-sm">
                                    <div className="font-medium text-neutral-900">{feature.name}</div>
                                    <div className="text-neutral-600">{feature.description}</div>
                                  </div>
                                )
                              ))}
                            </div>

                            {/* All Features Link */}
                            <Link
                              href={benefit.href}
                              onClick={handleLinkClick}
                              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors mt-auto"
                            >
                              All {benefit.totalFeatureCount} features →
                            </Link>
                          </>
                        )}
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
