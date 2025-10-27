'use client';

import { motion } from 'framer-motion';
import { Link } from '@/components/Link';
import type { NavbarProduct } from '@/lib/content/types';

/**
 * Props for the MobileDropdown component
 */
export interface MobileDropdownProps {
  /** Array of product items to display */
  products: NavbarProduct[];
}

/**
 * A mobile dropdown component for the navbar that displays products.
 * Displays products in a vertical list with staggered 3D rotation animations on mount.
 *
 * @param props - The component props
 * @returns A styled list of product links with animations
 */
export function MobileDropdown({ products }: MobileDropdownProps) {
  return (
    <div className="space-y-3">
      <div className="font-medium text-gray-950">Product</div>
      {products.map((product: NavbarProduct, index: number) => (
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
  );
}
