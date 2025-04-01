import clsx from 'clsx'
import Link from 'next/link'
import { Button } from './Button'
import { Code as code, CodeGroup, Pre as pre } from './Code'
import { Heading } from './Heading'
import { Prose } from './Prose'

// Re-exports
export const a = Link
export { Button, code, CodeGroup, pre }

// Wrapper
export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-20 lg:px-8">
      <Prose className="prose lg:prose-lg dark:prose-invert prose-gray prose-headings:font-display prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:transition-colors prose-a:duration-200 prose-a:no-underline hover:prose-a:underline flex-grow">
        {children}
      </Prose>
      <footer className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">{/* <Feedback /> */}</footer>
    </article>
  )
}

// Heading (h1)
export const h1 = ({ id, children, ...props }: { id: string; children: React.ReactNode }) => (
  <h1
    {...props}
    className="font-display mt-12 mb-6 scroll-mt-24 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100"
  >
    {children}
    {/* <Link href={`#${id}`} className="group inline-flex items-center no-underline">
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-blue-500 mr-2">
        #
      </span>
      {children}
    </Link> */}
  </h1>
)

// Heading (h2)
export const h2 = (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
  <div>
    <Heading level={2} className="mt-10 mb-4 text-3xl" {...props} />
  </div>
)

// Heading (h3)
export const h3 = (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
  <Heading level={3} className="mt-4 mb-4 text-2xl" {...props} />
)

// InfoIcon
const InfoIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-5 w-5 text-blue-500" fill="currentColor" {...props}>
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
)

export const strong = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className="font-bold " {...props} />
)

export const em = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className="italic" {...props} />
)

// Note
export const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 flex items-start gap-4 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-blue-500 dark:bg-blue-900/30">
    <InfoIcon className="mt-0.5 flex-none" />
    <div className="prose-sm prose-blue dark:prose-invert">{children}</div>
  </div>
)

// Row & Col
export const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="my-12 grid items-start gap-10 md:grid-cols-2">{children}</div>
)

export const Col = ({ children, sticky = false }: { children: React.ReactNode; sticky?: boolean }) => (
  <div
    className={clsx('space-y-8', {
      'md:sticky md:top-24': sticky,
    })}
  >
    {children}
  </div>
)

// Properties & Property
export const Properties = ({ children }: { children: React.ReactNode }) => (
  <div className="my-10 rounded-xl bg-gray-50 p-6 shadow-lg shadow-gray-200/50 dark:bg-gray-800/50 dark:shadow-gray-900/20">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">{children}</ul>
  </div>
)

export const Property = ({ name, type, children }: { name: string; type?: string; children: React.ReactNode }) => (
  <li className="rounded-lg px-2 py-4 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700">
    <dl className="grid grid-cols-1 items-center gap-y-2 sm:grid-cols-3 sm:gap-x-4">
      <dt className="text-sm font-medium text-gray-900 sm:col-span-1 dark:text-gray-200">
        <code className="rounded-md bg-gray-200 px-2 py-1 font-mono text-gray-800 dark:bg-gray-700 dark:text-gray-100">
          {name}
        </code>
      </dt>
      {type && <dd className="font-mono text-xs text-gray-500 sm:col-span-1 dark:text-gray-400">{type}</dd>}
      <dd className="text-sm text-gray-600 sm:col-span-3 dark:text-gray-300">{children}</dd>
    </dl>
  </li>
)

// Basic text elements
export const p = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className="my-6 leading-7 text-gray-600 dark:text-gray-300" {...props} />
)

export const blockquote = (props: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote className="my-6 border-l-4 border-gray-200 pl-4 italic text-gray-700 dark:border-gray-700 dark:text-gray-300" {...props} />
)

export const hr = (props: React.HTMLAttributes<HTMLHRElement>) => (
  <hr className="my-8 border-t border-gray-200 dark:border-gray-800" {...props} />
)

export const del = (props: React.HTMLAttributes<HTMLModElement>) => (
  <del className="text-gray-500 line-through dark:text-gray-400" {...props} />
)

// List elements
export const ul = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="my-6 list-disc pl-8 text-gray-600 dark:text-gray-300" {...props} />
)

export const ol = (props: React.HTMLAttributes<HTMLOListElement>) => (
  <ol className="my-6 list-decimal pl-8 text-gray-600 dark:text-gray-300" {...props} />
)

export const li = (props: React.HTMLAttributes<HTMLLIElement>) => (
  <li className="my-2" {...props} />
)

// Additional heading levels
export const h4 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4 className="mt-8 mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100" {...props} />
)

export const h5 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5 className="mt-8 mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100" {...props} />
)

export const h6 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h6 className="mt-8 mb-4 text-base font-semibold text-gray-900 dark:text-gray-100" {...props} />
)

// Image element
export const img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img 
    className="my-8 rounded-lg shadow-lg" 
    loading="lazy"
    {...props} 
  />
)

// Table elements
export const table = (props: React.TableHTMLAttributes<HTMLTableElement>) => (
  <div className="my-6 overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
  </div>
)

export const thead = (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
)

export const tbody = (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900" {...props} />
)

export const tr = (props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="transition hover:bg-gray-50 dark:hover:bg-gray-800" {...props} />
)

export const th = (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th 
    className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100" 
    {...props} 
  />
)

export const td = (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td 
    className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400" 
    {...props} 
  />
)
