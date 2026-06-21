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
  /** Function to close the mobile menu */
  close: () => void;
}

// This determines whether to show features for each benefit in the mobile version
const SHOW_FEATURES = false;

/**
 * A mobile dropdown component for the navbar that displays benefit names.
 * Shows simplified list of benefit group links with staggered animations on mount.
 *
 * @param props - The component props
 * @returns A styled list of benefit links with animations
 */
export function MobileDropdown({ benefits, close }: MobileDropdownProps) {
  return (
    <div className="space-y-4">
      <div className="font-medium text-neutral-950">
        <Link href="/features" onClick={close}>All Products</Link>
      </div>
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
          <Link href={benefit.href} onClick={close}>
            <div className="text-base font-medium text-neutral-950 mb-2">{benefit.name}</div>
          </Link>
          {SHOW_FEATURES && benefit.features && benefit.features.length > 0 && (
            <div className="space-y-2 ml-2">
              {benefit.features.map((feature, featureIndex) => {
                return (
                  feature.href ? (
                    <Link
                      key={featureIndex}
                      href={feature.href}
                      className="block text-sm rounded-lg p-2 -mx-2 hover:bg-neutral-50 transition-colors"
                      onClick={close}
                    >
                      <div className="font-medium text-neutral-900 hover:text-primary-600 transition-colors">
                        {feature.name}
                      </div>
                      <div className="text-neutral-600 text-xs">{feature.description}</div>
                    </Link>
                  ) : (
                    <div key={featureIndex} className="text-sm">
                      <div className="font-medium text-neutral-900">{feature.name}</div>
                      <div className="text-neutral-600 text-xs">{feature.description}</div>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
