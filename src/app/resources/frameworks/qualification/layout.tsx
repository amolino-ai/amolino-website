import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: 'Sales Qualification Frameworks',
  description:
    'Explore proven sales qualification frameworks like BANT, MEDDIC, SPICED, and more to improve your sales process and close more deals.',
};

export default function QualificationFrameworksLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbItems = [
    { label: 'Resources', href: '/resources' },
    { label: 'Frameworks', href: '/resources/frameworks' },
    { label: 'Qualification', href: '/resources/frameworks/qualification' },
  ];

  return (
    <>
      <main className="flex-auto">
        <Container>
          <Breadcrumb items={breadcrumbItems} className="py-4" />
        </Container>
        {children}
        <SpeedInsights />
      </main>
    </>
  );
}