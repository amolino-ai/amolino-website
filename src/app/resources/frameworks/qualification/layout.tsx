import { Navbar } from '@/components/Navbar'
import { Breadcrumbs, Anchor } from '@mantine/core';
import Link from 'next/link';

export const metadata = {
  title: 'Sales Qualification Frameworks',
  description:
    'Explore proven sales qualification frameworks like BANT, MEDDIC, SPICED, and more to improve your sales process and close more deals.',
}

export default function QualificationFrameworksLayout({ children }: { children: React.ReactNode }) {
  const items = [
    { title: 'Home', href: '/' },
    { title: 'Resources', href: '/resources/frameworks/qualification' },
    { title: 'Frameworks', href: '/resources/frameworks/qualification' },
    { title: 'Qualification', href: '/resources/frameworks/qualification' },
  ].map((item, index) => (
    <Anchor component={Link} href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Navbar />
      <main className="flex-auto">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-6 relative z-10">
          <Breadcrumbs separator="→" separatorMargin="md">
            {items}
          </Breadcrumbs>
        </div>
        {children}
      </main>
    </>
  )
}