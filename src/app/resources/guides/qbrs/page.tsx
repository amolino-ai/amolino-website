import { Container } from '@mantine/core'
import { Prose } from '@/components/Prose'
import type { Metadata } from 'next'
import GuideNavigation from './GuideNavigation'
import GuideHeader from './GuideHeader'
import Introduction from './Introduction'
import TeamParticipation from './TeamParticipation'
import Preparation from './Prepration'
import RunningQBR from './RunningQBR'
import PostQBR from './PostQBR'
import Metrics from './Metrics'
import Challenges from './Challenges'
import BestPractices from './BestPractices'
import RevOpsRole from './RevOpsRole'
import AdditionalTips from './AdditionalTips'
import Summary from './Summary'
import AskingGoodQuestions from './AskingGoodQuestions'

export const metadata = {
  title: 'Ultimate Guide to Quarterly Business Reviews (QBRs)',
  description: 'A comprehensive guide to preparing, running, and following up on effective Quarterly Business Reviews.',
}

const sections = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Team Participation', id: 'team-participation' },
  { title: 'Preparation', id: 'preparation' },
  { title: 'Running the QBR', id: 'running-qbr' },
  { title: 'Post-QBR', id: 'post-qbr' },
  { title: 'Metrics to Track', id: 'metrics' },
  { title: 'Asking Good Questions', id: 'asking-good-questions' },
  { title: 'Challenges and Solutions', id: 'challenges' },
  { title: 'Best Practices', id: 'best-practices' },
  { title: 'RevOps Role', id: 'revops-role' },
  { title: 'Additional Tips', id: 'additional-tips' },
  { title: 'Summary', id: 'summary' },
]

export default function GuidePage() {
  return (
    <Container className="mt-16 sm:mt-20">
      <div className="mx-auto max-w-7xl">
        <GuideHeader />

        <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:gap-8">
          <GuideNavigation sections={sections} />

          <div className="prose dark:prose-invert lg:prose-lg max-w-none">
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
      </div>
    </Container>
  )
}