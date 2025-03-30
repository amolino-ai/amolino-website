import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Guided Selling</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-4xl">
          Proactive Insights That Shorten Sales Cycles.
        </Heading>
        <div className="mt-4 max-w-4xl text-gray-400">
          Turn complex deals into winning strategies. Opportunity Planner creates AI-powered action plans with clear
          milestones and stakeholder maps. Get proven next steps automatically, keeping your deals on track to close.
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Opportunity Health"
            title="Know the health of your opportunities"
            description="Continuously evaluates opportunity health using AI analysis of engagement patterns, stakeholder involvement, and milestone achievement—comparing against successful deals to identify concerning deviations requiring attention.."
            graphic={
              <div className="h-80 bg-[url(/screenshots/sales_compass_deal_health_march_2025.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />

          <BentoCard
            dark
            eyebrow="Sales Playbooks"
            title="Apply proven BANT/MEDIC frameworks to every customer conversation"
            description="Automatically analyzes customer interactions to verify qualification status across Budget, Authority, Need, Timeline, or MEDIC criteria—highlighting gaps and providing targeted conversation guides to strengthen qualification.."
            graphic={
              <div className="h-80 bg-[url(/screenshots/sales_compass_bant_brief_march2025.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Closing Insights"
            title="Understand Next Steps and Blockers"
            description="Analyzes successful deal patterns to recommend specific, high-impact next actions tailored to your deal's current stage—eliminating guesswork and ensuring your team never misses crucial momentum-building activities.."
            graphic={
              <div className="h-80 bg-[url(/screenshots/sales_compass_insights_march_2025.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Sentiment Tracker"
            title="Get stakeholder insights"
            description="Get insights into the decision-makers and influencers for each opportunity."
            graphic={
              <div className="h-80 bg-[url(/screenshots/unified360_people_march_2025.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
} 