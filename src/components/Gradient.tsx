import { clsx } from 'clsx';

export function Gradient({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145',
      )}
    />
  );
}

// you can do hidden md:block if you want to hide on smaller screens. Add that 
// to the clxs className below

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 right-0 md:-right-60 h-60 w-[36rem] transform-gpu',
          'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]',
          'z-0 rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  );
}
