import { Hero } from '../components/Hero';
import { Challenge } from '../components/Challenge';
import { Solution } from '../components/Solution';
import { Impact } from '../components/Impact';
import { BottomCTA } from '../components/BottomCTA';
import { getUseCaseContent } from '@/lib/content';


export default async function PipelineVisibility() {
  const content = await getUseCaseContent('pipeline-visibility');

  return (
    <main>
      <Hero {...content.hero} />
      <Challenge {...content.challenge} />
      <Solution {...content.solution} />
      <Impact {...content.impact} />
      <BottomCTA {...content.bottomCta} />
    </main>
  );
}
