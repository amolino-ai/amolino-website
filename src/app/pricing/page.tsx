import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, MinusIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Companies all over the world have closed millions of deals with Amolino. Sign up today and start selling smarter.',
}

const tiers = [
  {
    name: 'Starter' as const,
    slug: 'starter',
    description: 'Complete overview of your customers throughout their lifecycle.',
    priceMonthly: 59,
    href: '#',
    highlights: [
      { description: 'Customer 360' },
      { description: 'Guided Selling', disabled: true },
      { description: 'Team insights', disabled: true },
      { description: 'Revenue Analytics', disabled: true },
    ],
    features: [
      { section: 'Customer 360', name: 'Overall Opportunity Summary', value: true },
      { section: 'Customer 360', name: 'Number of Opportunities', value: '\u221E' },
      { section: 'Customer 360', name: 'Automatic Timeline', value: true },
      { section: 'Customer 360', name: 'Rapid Actions', value: true },
      { section: 'Customer 360', name: 'Opportunity Contacts Updated', value: true },
      { section: 'Customer 360', name: 'Ask Amolino', value: true },
      { section: 'CRM', name: '2-way HubSpot Sync', value: true },
      { section: 'CRM', name: '2-way SalesForce Sync', value: true },
      { section: 'Email Integrations', name: 'Google Mail', value: true },
      { section: 'Email Integrations', name: 'Microsoft 365 Email', value: true },
      { section: 'Messaging Integrations', name: 'Slack', value: true },
      { section: 'Messaging Integrations', name: 'Microsoft Teams', value: true },
      { section: 'Conversational Intelligence', name: 'Google Meet', value: false },
      { section: 'Conversational Intelligence', name: 'Zoom', value: false },
      { section: 'Conversational Intelligence', name: 'Microsoft Teams', value: false },
      { section: 'Conversational Intelligence', name: 'Cisco Webex', value: false },
      { section: 'Guided Selling', name: 'Sales Playbook Checks', value: false },
      { section: 'Guided Selling', name: 'Customer Sentiment over email / meetings', value: false },
      { section: 'Guided Selling', name: 'Opportunity Health', value: false },
      { section: 'Team Insights', name: 'Sales Performance', value: false },
      { section: 'Team Insights', name: 'Competitive Overview', value: false },
      { section: 'Team Insights', name: 'Team Pipeline Overview', value: false },
      { section: 'Team Insights', name: 'Real-time Coaching', value: false },
      { section: 'Revenue Analytics and Forecasting', name: 'Real-time insights into deals', value: false },
    ],
  },
  {
    name: 'Professional' as const,
    slug: 'growth',
    description: 'All the extras for your growing team.',
    priceMonthly: 99,
    href: '#',
    highlights: [
      { description: 'Customer 360' },
      { description: 'Guided Selling' },
      { description: 'Team insights', disabled: false },
      { description: 'Revenue Analytics', disabled: true },
    ],
    features: [
      { section: 'Customer 360', name: 'Overall Opportunity Summary', value: true },
      { section: 'Customer 360', name: 'Number of Opportunities', value: '\u221E' },
      { section: 'Customer 360', name: 'Automatic Timeline', value: true },
      { section: 'Customer 360', name: 'Rapid Actions', value: true },
      { section: 'Customer 360', name: 'Opportunity Contacts Updated', value: true },
      { section: 'Customer 360', name: 'Ask Amolino', value: true },
      { section: 'CRM', name: '2-way HubSpot Sync', value: true },
      { section: 'CRM', name: '2-way SalesForce Sync', value: true },
      { section: 'Email Integrations', name: 'Google Mail', value: true },
      { section: 'Email Integrations', name: 'Microsoft 365 Email', value: true },
      { section: 'Messaging Integrations', name: 'Slack', value: true },
      { section: 'Messaging Integrations', name: 'Microsoft Teams', value: true },
      { section: 'Conversational Intelligence', name: 'Google Meet', value: true },
      { section: 'Conversational Intelligence', name: 'Zoom', value: true },
      { section: 'Conversational Intelligence', name: 'Microsoft Teams', value: true },
      { section: 'Conversational Intelligence', name: 'Cisco Webex', value: true },
      { section: 'Guided Selling', name: 'Sales Playbook Checks', value: true },
      { section: 'Guided Selling', name: 'Customer Sentiment over email / meetings', value: true },
      { section: 'Guided Selling', name: 'Opportunity Health', value: true },
      { section: 'Team Insights', name: 'Sales Performance', value: true },
      { section: 'Team Insights', name: 'Competitive Overview', value: true },
      { section: 'Team Insights', name: 'Team Pipeline Overview', value: true },
      { section: 'Team Insights', name: 'Real-time Coaching', value: true },
      { section: 'Revenue Analytics and Forecasting', name: 'Real-time insights into deals', value: false },
    ],
  },
  {
    name: 'Business' as const,
    slug: 'business',
    description: 'Added flexibility to close deals at scale.',
    priceMonthly: 199,
    href: '#',
    highlights: [
      { description: 'Customer 360' },
      { description: 'Guided Selling' },
      { description: 'Team insights', disabled: false },
      { description: 'Revenue Analytics', disabled: false },
    ],
    features: [
      { section: 'Customer 360', name: 'Overall Opportunity Summary', value: true },
      { section: 'Customer 360', name: 'Number of Opportunities', value: '\u221E' },
      { section: 'Customer 360', name: 'Automatic Timeline', value: true },
      { section: 'Customer 360', name: 'Rapid Actions', value: true },
      { section: 'Customer 360', name: 'Opportunity Contacts Updated', value: true },
      { section: 'Customer 360', name: 'Ask Amolino', value: true },
      { section: 'CRM', name: '2-way HubSpot Sync', value: true },
      { section: 'CRM', name: '2-way SalesForce Sync', value: true },
      { section: 'Email Integrations', name: 'Google Mail', value: true },
      { section: 'Email Integrations', name: 'Microsoft 365 Email', value: true },
      { section: 'Messaging Integrations', name: 'Slack', value: true },
      { section: 'Messaging Integrations', name: 'Microsoft Teams', value: true },
      { section: 'Conversational Intelligence', name: 'Google Meet', value: true },
      { section: 'Conversational Intelligence', name: 'Zoom', value: true },
      { section: 'Conversational Intelligence', name: 'Microsoft Teams', value: true },
      { section: 'Conversational Intelligence', name: 'Cisco Webex', value: true },
      { section: 'Guided Selling', name: 'Sales Playbook Checks', value: true },
      { section: 'Guided Selling', name: 'Customer Sentiment over email / meetings', value: true },
      { section: 'Guided Selling', name: 'Opportunity Health', value: true },
      { section: 'Team Insights', name: 'Sales Performance', value: true },
      { section: 'Team Insights', name: 'Competitive Overview', value: true },
      { section: 'Team Insights', name: 'Team Pipeline Overview', value: true },
      { section: 'Team Insights', name: 'Real-time Coaching', value: true },
      { section: 'Revenue Analytics and Forecasting', name: 'Real-time insights into deals', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pricing that grows with your team size.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Smart companies all over the world reduce their sales cycle by 30% and increase their revenue by 20% by using
        Amolino. Sign up today and start selling smarter.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">${tier.priceMonthly}</div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href="https://app.amolino.ai">21 day free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">Accelerate your sales with:</h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({ selectedTier }: { selectedTier: (typeof tiers)[number] }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={tier === selectedTier ? true : undefined}
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href="https://app.amolino.ai" target="_blank">
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href="https://app.amolino.ai" target="_blank">
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map((section) => (
          <tbody key={section} className="group">
            <tr>
              <th scope="colgroup" colSpan={4} className="px-0 pt-10 pb-0 group-first-of-type:pt-5">
                <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">{section}</div>
              </th>
            </tr>
            {tiers[0].features
              .filter((feature) => feature.section === section)
              .map(({ name }) => (
                <tr key={name} className="border-b border-gray-100 last:border-none">
                  <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600">
                    {name}
                  </th>
                  {tiers.map((tier) => {
                    let value = tier.features.find(
                      (feature) => feature.section === section && feature.name === name,
                    )?.value

                    return (
                      <td
                        key={tier.slug}
                        data-selected={selectedTier === tier ? true : undefined}
                        className="p-4 data-selected:table-cell max-sm:hidden"
                      >
                        {value === true ? (
                          <>
                            <CheckIcon className="size-4 fill-green-600" />
                            <span className="sr-only">Included in {tier.name}</span>
                          </>
                        ) : value === false || value === undefined ? (
                          <>
                            <MinusIcon className="size-4 fill-gray-400" />
                            <span className="sr-only">Not included in {tier.name}</span>
                          </>
                        ) : (
                          <div className="text-sm/6">{value}</div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </Container>
  )
}

function FeatureItem({ description, disabled = false }: { description: string; disabled?: boolean }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <img alt="" src="/testimonials/tina-yards.jpg" className="aspect-3/4 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['&quot;'] after:absolute after:content-['&quot;'] lg:text-4xl">
                  Thanks to AmolinoAI, we&apos;re finding new leads that we never would have found with legal methods.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white"></p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    Chief Revenue Office, Managing 50 people
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">Frequently asked questions</Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">What&apos;s included in the free trial?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              All customers get 21 days of free access to the Professional plan. This allows you to experience our
              complete suite of AI-powered sales tools, including guided selling, revenue analytics, and team insights.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">Can I upgrade or downgrade my plan later?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, you can change your plan at any time. When upgrading, you&apos;ll be prorated for the remainder of
              your billing cycle. When downgrading, the change will take effect at the start of your next billing cycle.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">How quickly can I see results?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Most of our customers start seeing value withing the first days. After the initial integration with email
              you&apos;ll start seeing data in your AmolinoAI dashboard. Many of our customers report that they see data
              that they never knew existing because it was never collected and updated in the CRM before.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">What kind of support do you offer?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              All plans include email support. Professional and Business plans include 24/7 call center support.
              Business plan customers also get a dedicated account manager for personalized assistance and strategic
              guidance.
            </dd>
          </dl>
          {/* <dl>
            <dt className="text-sm font-semibold">How does the competitor analysis feature work?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Our AI-powered competitor analysis provides insights into market positioning, pricing strategies, and
              competitive advantages. The Professional plan includes 5 analyses per month, while the Business plan
              offers unlimited analyses to help you stay ahead of the competition.
            </dd>
          </dl> */}
          {/* <dl>
            <dt className="text-sm font-semibold">What integrations are available?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              We integrate with major CRM platforms, sales tools, and data providers. The Professional and Business
              plans include access to our full suite of integrations, including AmolinoAI capabilities. Starter plan
              includes basic integrations with select platforms.
            </dd>
          </dl> */}
        </div>
      </section>
    </Container>
  )
}

export default async function Pricing(
  props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }
) {
  const searchParams = await props.searchParams;
  let tier = typeof searchParams.tier === 'string' ? tiers.find(({ slug }) => slug === searchParams.tier)! : tiers[0]

  return (
    <main className="overflow-hidden">
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      {/* <Testimonial /> */}
      <FrequentlyAskedQuestions />
      <LogoCloud />
    </main>
  )
}
