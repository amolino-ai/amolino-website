import { Prose } from '@/components/Prose';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { RelatedContentSection } from '@/components/RelatedContentSection';
import { getQBRGuidePageContent, getQBRSummary } from '@/lib/content';
import GuideNavigation from './GuideNavigation';
import GuideHeader from './GuideHeader';
import Introduction from './Introduction';
import TeamParticipation from './TeamParticipation';
import Preparation from './Prepration';
import RunningQBR from './RunningQBR';
import PostQBR from './PostQBR';
import Metrics from './Metrics';
import Challenges from './Challenges';
import BestPractices from './BestPractices';
import RevOpsRole from './RevOpsRole';
import AdditionalTips from './AdditionalTips';
import Summary from './Summary';
import AskingGoodQuestions from './AskingGoodQuestions';

export async function generateMetadata() {
  const pageContent = await getQBRGuidePageContent();

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
  };
}

export default async function GuidePage() {
  const pageContent = await getQBRGuidePageContent();
  const summaryContent = await getQBRSummary();
  const breadcrumbItems = [
    { label: 'Resources', href: '/resources' },
    { label: 'Guides', href: '/resources/guides' },
    { label: 'QBR Guide' },
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <Container>
        <Breadcrumb items={breadcrumbItems} className="py-4" />
      </Container>
      <GuideHeader
        subheading={pageContent.hero.subheading}
        heading={pageContent.hero.heading}
        description={pageContent.hero.description}
      />

      <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:gap-8">
        <GuideNavigation sections={pageContent.sections} />

        <div className="prose lg:prose-lg max-w-full overflow-hidden">
          <Prose>
            <div className="space-y-12">
              <Introduction />
              <TeamParticipation />
              <Preparation />
              <RunningQBR />
              <PostQBR />
              <Metrics />
              <AskingGoodQuestions />
              <Challenges />
              <BestPractices />
              <RevOpsRole />
              <AdditionalTips />
              <Summary />
            </div>
          </Prose>
        </div>
      </div>

      {summaryContent.relatedContent && <RelatedContentSection {...summaryContent.relatedContent} />}
    </div>
  );
}
