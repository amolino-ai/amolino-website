import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { IntegrationsSection } from '@/components/integrations-section'
import { Logo } from '@/components/Logo'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          // banner={
          //   <Link
          //     href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
          //     className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
          //   >
          //     Radiant raises $100M Series A from Tailwind Ventures
          //     <ChevronRightIcon className="size-4" />
          //   </Link>
          //}
        />
        <div className="pt-1 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            AI-powered Revenue Forecasting
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
          Deep pipeline analysis uncovers red flags before sales reps see them and delivers prescriptive actions to keep revenue on track
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://app.amolino.ai">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
        From Pipeline Surprises to Pipeline Clarity.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/pipeline_radar_forecast_analysis_march2025.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>AI-powered Revenue Forecasting</Subheading>
      <Heading as="h3" className="mt-2 max-w-5xl">
      From Pipeline Surprises to Pipeline Clarity.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Pipeline Radar"
          title="Know which deals are at risk"
          description="Know which deals are healthy and highest value vs low-value/low health deals. Improve chances of your pipeline by identifying high-value / low health deals."
          graphic={
            <div className="h-80 bg-[url(/screenshots/pipeline_radar_heatmap_march2025.png)] bg-[size:1000px_360px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Pushed Opportunities"
          title="Know which opportunities have been pushed and which opps are about to be pushed"
          description="Keep track of which opportinities have been pushed from one quarter to the next and get advance notice on which opportunities are about to be pushed, so you can take corrective action."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/pipeline_radar_pushed_opportunities_march2025.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Quarterly Target Atttainment Forecasting"
          title="Know how you're doing vs your quarterly targets"
          description="Accurately forecast your quarterly target attainment by knowing which deals are at risk and which are on track.."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/pipeline_radar_forecast_analysis_march2025.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />

        {/* <BentoCard
          eyebrow="Quarterly Target Atttainment Forecasting"
          title="Know how you're doing vs your quarterly targets"
          description="Accurately forecast your quarterly target attainment by knowing which deals are at risk and which are on track."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        /> */}
        {/* <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        /> */}
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Guided Selling</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-4xl">
        Proactive Insights That Shorten Sales Cycles.
        </Heading>
        <div className="mt-4 text-gray-400 max-w-4xl">
        Turn complex deals into winning strategies. Opportunity Planner creates AI-powered action plans with clear milestones and stakeholder maps. Get proven next steps automatically, keeping your deals on track to close.
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Opportunity Health"
            title="Know the health of your opportunities"
            description="Know which opportunities are at risk and which are on track to close."
            graphic={
              <div className="h-80 bg-[url(/screenshots/sales_compass_deal_health_march_2025.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />

          <BentoCard
            dark
            eyebrow="Sales Playbooks"
            title="BANT and MEDDIC Briefs"
            description="Get proven next steps automatically, keeping your deals on track to close."
            // graphic={<LogoTimeline />}
            graphic={
              <div className="h-80 bg-[url(/screenshots/sales_compass_bant_brief_march2025.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Closing Insights"
            title="Understand Next Steps and Blockers"
            description="Get insights into next steps and blockers for each opportunity."
            // graphic={<LinkedAvatars />}
            graphic={
              <div className="h-80 bg-[url(/screenshots/sales_compass_insights_march_2025.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Contact Insights"
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

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
       
        <DarkBentoSection />
        <IntegrationsSection />
      </main>
      <Testimonials />
   
    </div>
  )
}
