import { clsx } from 'clsx';

/**
 * Screenshot component spacing constants.
 * The decorative shadow/ring extends outside the component bounds by this amount.
 * When using Screenshot in a constrained container, add padding equal to this value
 * to prevent overflow.
 */
export const SCREENSHOT_PADDING = 2; // spacing units (0.5rem = 8px in Tailwind)

export function Screenshot({
  width,
  height,
  src,
  className,
  fillContainer = false,
  cover = false,
  objectPosition = 'center',
}: {
  width: number
  height: number
  src: string
  className?: string
  fillContainer?: boolean
  cover?: boolean
  objectPosition?: 'center' | 'left' | 'right' | 'top' | 'bottom'
}) {
  return (
    <div
      style={{ '--width': width, '--height': height } as React.CSSProperties}
      className={clsx(
        className,
        'relative [--radius:var(--radius-xl)]',
        !cover && 'aspect-[var(--width)/var(--height)]',
      )}
    >
      <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] ring-1 shadow-xs ring-black/5 [--padding:--spacing(2)]" />
      <img
        alt=""
        src={src}
        className={clsx(
          'h-full w-full rounded-[var(--radius)] ring-1 shadow-2xl ring-black/10',
          (fillContainer || cover) && 'object-cover',
          objectPosition === 'left' && 'object-left',
          objectPosition === 'right' && 'object-right',
          objectPosition === 'top' && 'object-top',
          objectPosition === 'bottom' && 'object-bottom',
          objectPosition === 'center' && 'object-center',
        )}
      />
    </div>
  );
}