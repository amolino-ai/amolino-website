import clsx from 'clsx';
import Link from 'next/link';
import { Heading } from '@/components/Heading';
import { Prose } from '@/components/Prose';
import { Button } from '@/components/Button';
import { Code as code, CodeGroup, Pre as pre } from '@/components/Code';

// Re-exports
export const a = Link;
export { Button, code, CodeGroup, pre };

// Wrapper
export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-4xl mx-auto py-16 px-6 lg:px-8 flex flex-col min-h-screen">
      <Prose className="flex-grow prose lg:prose-lg dark:prose-invert prose-gray">
        {children}
      </Prose>
      <footer className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-700">
        {/* <Feedback /> */}
      </footer>
    </article>
  );
}

// Heading (h1)
export const h1 = ({ id, children, ...props }: { id: string; children: React.ReactNode }) => (
  <h1
    {...props}
    className="mt-10 text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight scroll-mt-24"
  >
    <Link href={`#${id}`} className="group inline-flex items-center no-underline">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 mr-2">
        #
      </span>
      {children}
    </Link>
  </h1>
);

// Heading (h2)
export const h2 = (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
  <Heading level={2} {...props} />
);

// InfoIcon
const InfoIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    className="w-5 h-5 text-blue-500"
    fill="currentColor"
    {...props}
  >
    <circle cx="8" cy="8" r="8" opacity="0.15" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.75 7.75h1.5v3.5"
    />
    <circle cx="8" cy="4" r=".5" fill="currentColor" />
  </svg>
);

// Note
export const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 flex gap-3 items-start rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 p-4 shadow-sm">
    <InfoIcon className="mt-0.5 flex-none" />
    <div className="prose-sm prose-blue dark:prose-invert">{children}</div>
  </div>
);

// Row & Col
export const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="grid gap-8 md:grid-cols-2 items-start">{children}</div>
);

export const Col = ({ children, sticky = false }: { children: React.ReactNode; sticky?: boolean }) => (
  <div
    className={clsx('space-y-6', {
      'md:sticky md:top-24': sticky,
    })}
  >
    {children}
  </div>
);

// Properties & Property
export const Properties = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg shadow-inner p-4">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">{children}</ul>
  </div>
);

export const Property = ({ name, type, children }: { name: string; type?: string; children: React.ReactNode }) => (
  <li className="py-3">
    <dl className="grid grid-cols-1 gap-y-1 sm:grid-cols-3 sm:gap-x-4 items-center">
      <dt className="text-sm font-medium text-gray-900 dark:text-gray-200 sm:col-span-1">
        <code className="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-700 font-mono text-gray-800 dark:text-gray-100">
          {name}
        </code>
      </dt>
      {type && (
        <dd className="text-xs text-gray-500 dark:text-gray-400 font-mono sm:col-span-1">
          {type}
        </dd>
      )}
      <dd className="text-sm text-gray-600 dark:text-gray-300 sm:col-span-3">
        {children}
      </dd>
    </dl>
  </li>
);
