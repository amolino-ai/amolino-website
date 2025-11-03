import { Hero } from '../components/Hero';
import { Challenge } from '../components/Challenge';
import { Solution } from '../components/Solution';
import { Impact } from '../components/Impact';
import { BottomCTA } from '../components/BottomCTA';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { getUseCaseContent } from '@/lib/content';


export default async function PipelineVisibility() {
  const content = await getUseCaseContent('pipeline-visibility');

  const breadcrumbItems = [
    { label: 'Use Cases', href: '/use-cases' },
    { label: content.hero.title },
  ];

  return (
    <main>
      <Container>
        <Breadcrumb items={breadcrumbItems} className="py-4" />
      </Container>
      <Hero {...content.hero} />
      <Challenge {...content.challenge} />
      <Solution {...content.solution} />
      <Impact {...content.impact} />
      <BottomCTA {...content.bottomCta} />
    </main>
  );
}
