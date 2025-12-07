import { AnimatedNumber } from '@/components/AnimatedNumber';
import { Card } from '@/components/Card';
import { clsx } from 'clsx';

interface StatsCardProps {
  label: string
  value: number
  suffix?: string
  description?: string
  dark?: boolean
}

export function StatsCard({ label, value, suffix = '', description = '', dark = false }: StatsCardProps) {
  const textColor = dark ? 'text-gray-300' : 'text-gray-600';
  const valueColor = dark ? 'text-white' : 'text-gray-900';

  return (
    <Card dark={dark} padding="lg" as="div">
      <dt className={clsx('text-sm font-medium', textColor)}>{label}</dt>
      <dd className={clsx('mt-2 text-4xl font-medium tracking-tight', valueColor)}>
        <AnimatedNumber start={0} end={value} />
        {suffix}
      </dd>
      {description && <p className={clsx('mt-4 text-sm', textColor)}>{description}</p>}
    </Card>
  );
} 