'use client';

import { motion } from 'framer-motion';
import { Screenshot } from '@/components/Screenshot';
import { Button } from '@/components/Button';

interface ProductFeatureCardProps {
  title: string;
  description: string;
  screenshot: {
    src: string;
    width: number;
    height: number;
    fillContainer?: boolean;
  };
  href: string;
  index: number;
}

export function ProductFeatureCard({
  title,
  description,
  screenshot,
  href,
  index,
}: ProductFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="rounded-xl bg-white shadow-md ring-1 ring-gray-900/5 transition-all hover:shadow-xl hover:ring-gray-900/10">
        <div className="overflow-hidden rounded-t-xl">
          <Screenshot
            src={screenshot.src}
            width={screenshot.width}
            height={screenshot.height}
            fillContainer={screenshot.fillContainer}
            className="aspect-video w-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <p className="mt-2 text-base text-gray-600 line-clamp-3">
            {description}
          </p>
          <div className="mt-4">
            <Button href={href} variant="text" arrow="right">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
