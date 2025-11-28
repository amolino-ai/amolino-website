import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'The Physics of Pipeline Erosion | Amolino Resources',
  description: 'Why revenue forecasts fail and what CROs can do about it.',
};

export default function PipelineErosionLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbItems = [
    { label: 'Resources', href: '/resources' },
    { label: 'Pipeline Erosion', href: '/resources/pipeline-erosion' },
  ];

  return (
    <>
      <main className="flex-auto">
        <Container>
          <Breadcrumb items={breadcrumbItems} className="py-4" />
        </Container>
        {children}
        <SpeedInsights />
        <Analytics />
      </main>
    </>
  );
}
