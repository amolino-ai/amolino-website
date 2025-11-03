import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`${className}`}>
      <ol className="flex items-center space-x-1 text-sm text-gray-600">
        {/* Home Icon */}
        <li>
          <Link
            href="/"
            className="flex items-center text-gray-500 transition-colors hover:text-gray-700"
            aria-label="Home"
          >
            <HomeIcon className="size-4" />
          </Link>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              <ChevronRightIcon className="size-4 shrink-0 text-gray-400" aria-hidden="true" />

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="ml-1 truncate font-medium text-gray-600 transition-colors hover:text-gray-900 max-w-[120px] sm:max-w-[200px] md:max-w-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="ml-1 truncate font-medium text-gray-900 max-w-[120px] sm:max-w-[200px] md:max-w-none" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
