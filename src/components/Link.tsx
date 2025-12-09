import NextLink, { type LinkProps } from 'next/link';

// React 19: ref can be passed as a regular prop
export function Link({
  ref,
  ...props
}: LinkProps & React.ComponentPropsWithoutRef<'a'> & { ref?: React.Ref<HTMLAnchorElement> }) {
  return <NextLink ref={ref} {...props} />;
}
