interface FeatureCardProps {
  title: string
  children: React.ReactNode
}

export function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <div className="mt-4 text-gray-600">{children}</div>
    </div>
  )
} 