'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Screenshot } from '@/components/Screenshot';

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
      <Link
        href={href}
        className="group block rounded-xl bg-white shadow-md ring-1 ring-gray-900/5 transition-all hover:shadow-xl hover:ring-gray-900/10"
      >
        <div className="overflow-hidden rounded-t-xl">
          <div className="transform transition-transform duration-300 group-hover:scale-105">
            <Screenshot
              src={screenshot.src}
              width={screenshot.width}
              height={screenshot.height}
              fillContainer={screenshot.fillContainer}
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-base text-gray-600 line-clamp-3">
            {description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
            Learn more
            <svg
              className="ml-1 size-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
