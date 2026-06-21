'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';

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
      <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-md ring-1 ring-neutral-900/5 transition-all hover:shadow-xl hover:ring-neutral-900/10">
        {/* Badge */}
        {badgeText && (
          <div className="mb-6">
            <Badge text={badgeText} variant="gradient-shine" />
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-semibold text-neutral-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-base text-neutral-600 line-clamp-4">
          {description}
        </p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-100 pt-6">
            {stats.slice(0, 4).map((stat, statIndex) => (
              <div key={statIndex}>
                <div className="text-2xl font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8">
          <Button href={`/benefits/${slug}`} variant="text" arrow="right">
            Learn more
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
