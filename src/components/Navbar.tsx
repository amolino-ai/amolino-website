'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { PlusGrid, PlusGridItem, PlusGridRow } from './PlusGrid';
import type { NavbarProduct, NavbarBenefit, NavbarLink } from '@/lib/content/types';
import { DesktopDropdown } from './Navbar/DesktopDropdown';
import { MobileDropdown } from './Navbar/MobileDropdown';

interface DesktopNavProps {
  allProducts: NavbarProduct;
  benefits: NavbarBenefit[];
  links: NavbarLink[];
}

function DesktopNav({ allProducts, benefits, links }: DesktopNavProps) {
  return (
    <nav className="relative hidden lg:flex z-30">
      <div className="flex items-center">
        <DesktopDropdown allProducts={allProducts} benefits={benefits} />
      </div>
      {links.map(({ href, label }) => (
        <div key={href} className="flex items-center">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  );
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  );
}

interface MobileNavProps {
  benefits: NavbarBenefit[];
  links: NavbarLink[];
}

function MobileNav({ benefits, links }: MobileNavProps) {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <MobileDropdown benefits={benefits} />
        {links.map(({ href, label }: NavbarLink, linkIndex: number) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: (linkIndex + benefits.length) * 0.1 },
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
  );
}

interface NavbarProps {
  banner?: React.ReactNode;
  allProducts: NavbarProduct;
  benefits: NavbarBenefit[];
  links: NavbarLink[];
}

export function Navbar({ banner, allProducts, benefits, links }: NavbarProps) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16 relative z-50">
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
          <DesktopNav allProducts={allProducts} benefits={benefits} links={links} />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav benefits={benefits} links={links} />
    </Disclosure>
  );
}
