'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Screenshot } from '@/components/Screenshot';

interface Product {
  name: string
  description: string
  features: string[]
  screenshot: string
  screenshotWidth?: number
  screenshotHeight?: number
  href: string
}

interface ProductGridProps {
  products: Product[]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-24 grid gap-12 sm:grid-cols-2 lg:gap-16"
    >
      {products.map((product) => (
        <motion.div
          key={product.name}
          variants={item}
          className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg
                      className="mr-3 h-5 w-5 text-pink-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={product.href} variant="text" arrow="right">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl">
                <Screenshot
                  width={product.screenshotWidth || 800}
                  height={product.screenshotHeight || 600}
                  src={product.screenshot}
                  className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 