'use client';

import { motion } from 'framer-motion';
import { Link } from '@/components/Link';
import type { NavbarBenefit } from '@/lib/content/types';

/**
 * Props for the MobileDropdown component
 */
export interface MobileDropdownProps {
  /** Array of benefit groups to display */
  benefits: NavbarBenefit[];
}

/**
 * A mobile dropdown component for the navbar that displays benefit names.
 * Shows simplified list of benefit group links with staggered animations on mount.
 *
 * @param props - The component props
 * @returns A styled list of benefit links with animations
 */
export function MobileDropdown({ benefits }: MobileDropdownProps) {
  return (
    <div className="space-y-3">
      <div className="font-medium text-gray-950">Product</div>
      {benefits.map((benefit: NavbarBenefit, index: number) => (
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: index * 0.1 },
          }}
          key={benefit.href}
          className="pl-4"
        >
          <Link href={benefit.href}>
            <div className="text-base font-medium text-gray-950">{benefit.name}</div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
