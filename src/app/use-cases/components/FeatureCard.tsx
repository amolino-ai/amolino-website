import { Card, CardHeader } from '@/components/Card';

interface FeatureCardProps {
  title: string
  children: React.ReactNode
}

export function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader title={title} />
      <div className="mt-4 text-neutral-600">{children}</div>
    </Card>
  );
} 