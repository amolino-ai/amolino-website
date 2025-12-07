import { clsx } from 'clsx';

// Re-export heading components from headings folder
export { Heading } from './headings/Heading';
export { Subheading } from './headings/Subheading';

export function Lead({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return <p className={clsx(className, 'text-2xl font-medium text-gray-500')} {...props} />;
}
