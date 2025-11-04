import { ThreeColumnBento } from './Bento/ThreeColumnBento';
import { TwoRowBento } from './Bento/TwoRowBento';
import { TwoRowThreeColumnBento } from './Bento/TwoRowThreeColumnBento';
import type { BentoProps } from '@/lib/content/types';

/**
 * Bento wrapper component that selects the appropriate layout based on the layout prop.
 *
 * Available layouts:
 * - 'three-column': 3-column grid with tall showcase on left (4 items)
 * - 'two-row': 2-row asymmetric grid with 4-2-2-4 pattern (4 items)
 * - 'two-row-three-column': 2-row 3-column balanced grid (6 items)
 */
export function Bento({ layout, title, subtitle, tagline, items }: BentoProps) {
  const props = {
    title,
    subtitle,
    tagline,
    items,
  };

  switch (layout) {
    case 'three-column':
      return <ThreeColumnBento {...props} />;
    case 'two-row':
      return <TwoRowBento {...props} />;
    case 'two-row-three-column':
      return <TwoRowThreeColumnBento {...props} />;
    default:
      return <ThreeColumnBento {...props} />;
  }
}
