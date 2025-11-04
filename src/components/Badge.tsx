'use client';

interface BadgeProps {
  text: string
  backgroundColor?: string
  textColor?: string
  variant?: 'ring-glow' | 'dot-glass' | 'gradient-shine' | '3d-elevated'
}

// Internal badge variant components (not exported)
function RingGlowBadge({ text, backgroundColor, textColor }: Omit<BadgeProps, 'variant'>) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm ring-1 ring-white/30 ${backgroundColor}`}
      style={{
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)',
      }}
    >
      <span className={`font-semibold ${textColor}`}>{text}</span>
    </div>
  );
}

function DotGlassBadge({ text, backgroundColor, textColor }: Omit<BadgeProps, 'variant'>) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm backdrop-blur-sm ${backgroundColor}`}
    >
      <span className="size-2 rounded-full bg-white/80 animate-pulse" />
      <span className={`font-semibold ${textColor}`}>{text}</span>
    </div>
  );
}

function GradientShineBadge({ text, textColor }: Omit<BadgeProps, 'variant' | 'backgroundColor'>) {
  return (
    <div className="relative inline-flex items-center overflow-hidden rounded-full px-4 py-1.5 text-sm">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/30" />

      {/* Shine effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{
          animation: 'shine 3s ease-in-out infinite',
        }}
      />

      {/* Text */}
      <span className={`relative z-10 font-semibold ${textColor}`}>{text}</span>

      {/* Inline style for animation */}
      <style jsx>{`
        @keyframes shine {
          0%, 100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function ElevatedBadge({ text, backgroundColor, textColor }: Omit<BadgeProps, 'variant'>) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm ${backgroundColor}`}
      style={{
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <span className={`font-semibold ${textColor}`}>{text}</span>
    </div>
  );
}

export function Badge({
  text,
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-600',
  variant = 'ring-glow',
}: BadgeProps) {
  switch (variant) {
    case 'ring-glow':
      return <RingGlowBadge text={text} backgroundColor={backgroundColor} textColor={textColor} />;
    case 'dot-glass':
      return <DotGlassBadge text={text} backgroundColor={backgroundColor} textColor={textColor} />;
    case 'gradient-shine':
      return <GradientShineBadge text={text} textColor={textColor} />;
    case '3d-elevated':
      return <ElevatedBadge text={text} backgroundColor={backgroundColor} textColor={textColor} />;
    default:
      return <GradientShineBadge text={text} textColor={textColor} />;
  }
} 
