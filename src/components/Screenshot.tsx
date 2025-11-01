import { clsx } from 'clsx';

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