import { AnimatedNumber } from '@/components/animated-number'

interface StatsCardProps {
  label: string
  value: number
  suffix?: string
  description?: string
  dark?: boolean
}

export function StatsCard({ label, value, suffix = '', description = '', dark = false }: StatsCardProps) {
  const bgColor = dark ? 'bg-white/5' : 'bg-white'
  const textColor = dark ? 'text-gray-300' : 'text-gray-600'
  const valueColor = dark ? 'text-white' : 'text-gray-900'
  const ringColor = dark ? 'ring-white/10' : 'ring-gray-950/5'

  return (
    <div className={`rounded-2xl ${bgColor} p-8 shadow-sm ring-1 ${ringColor}`}>
      <dt className={`text-sm font-medium ${textColor}`}>{label}</dt>
      <dd className={`mt-2 text-4xl font-medium tracking-tight ${valueColor}`}>
        <AnimatedNumber start={0} end={value} />
        {suffix}
      </dd>
      {description && <p className={`mt-4 text-sm ${textColor}`}>{description}</p>}
    </div>
  )
} 