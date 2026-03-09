import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'CRM Pipeline Design Resource | Amolino',
  description:
    'A comprehensive practitioner guide to CRM pipeline design — for revenue leaders, sales operations professionals, and CRM administrators.',
};

export default function CRMPipelineDesignLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbItems = [
    { label: 'Resources', href: '/resources' },
    { label: 'Frameworks', href: '/resources/frameworks' },
    { label: 'CRM Pipeline Design', href: '/resources/frameworks/crm-pipeline-design' },
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
