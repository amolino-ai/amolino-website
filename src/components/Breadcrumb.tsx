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

/**
 * Truncate text in the middle with ellipsis
 * Shows beginning and end of text with "..." in the middle
 */
function MiddleTruncate({ text, maxLength = 40 }: { text: string; maxLength?: number }) {
  if (text.length <= maxLength) {
    return <>{text}</>;
  }

  const charsToShow = maxLength - 3; // Account for "..."
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return (
    <>
      {text.substring(0, frontChars)}
      <span className="select-none">...</span>
      {text.substring(text.length - backChars)}
    </>
  );
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`${className}`}>
      <ol className="flex flex-col items-start space-y-1 text-sm text-gray-600 sm:flex-row sm:items-center sm:space-x-1 sm:space-y-0">
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
                  className="ml-1 font-medium text-gray-600 transition-colors hover:text-gray-900 block max-w-[calc(100vw-3rem)] overflow-hidden sm:max-w-none"
                >
                  <MiddleTruncate text={item.label} maxLength={40} />
                </Link>
              ) : (
                <span className="ml-1 font-medium text-gray-900 block max-w-[calc(100vw-3rem)] overflow-hidden sm:max-w-none" aria-current="page">
                  <MiddleTruncate text={item.label} maxLength={40} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
