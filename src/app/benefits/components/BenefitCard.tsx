'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/Badge';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface BenefitCardProps {
  slug: string;
  badgeText?: string;
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  index: number;
}

export function BenefitCard({
  slug,
  badgeText,
  title,
  description,
  stats,
  index,
}: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/benefits/${slug}`}
        className="group block h-full rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-900/5 transition-all hover:shadow-xl hover:ring-gray-900/10"
      >
        {/* Badge */}
        {badgeText && (
          <div className="mb-6">
            <Badge text={badgeText} variant="gradient-shine" />
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-base text-gray-600 line-clamp-4">
          {description}
        </p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
            {stats.slice(0, 4).map((stat, statIndex) => (
              <div key={statIndex}>
                <div className="text-2xl font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
          Learn more
          <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
