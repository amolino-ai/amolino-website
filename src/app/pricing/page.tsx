import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Gradient } from '@/components/Gradient';
import { Link } from '@/components/Link';
import { LogoCloud } from '@/components/LogoCloud';
import { Heading, Lead, Subheading } from '@/components/Text';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, MinusIcon } from '@heroicons/react/16/solid';
import type { Metadata } from 'next';
import { getPricingPageContent } from '@/lib/content';
import type { PricingPageContent, PricingTier } from '@/lib/content/types';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Companies all over the world have closed millions of deals with Amolino. Sign up today and start selling smarter.',
};

function Header({ content }: { content: PricingPageContent }) {
  return (
    <Container className="mt-16">
      <Heading as="h1">{content.header.heading}</Heading>
      <Lead className="mt-6 max-w-3xl">
        {content.header.lead}
      </Lead>
    </Container>
  );
}

function PricingCards({ tiers }: { tiers: PricingTier[] }) {
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
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-neutral-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-neutral-950">${tier.priceMonthly}</div>
            <div className="text-sm/5 text-neutral-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href="https://app.amolino.ai">21 day free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-neutral-950">Accelerate your sales with:</h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-neutral-950">Accelerate your sales with:</h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingTable({ selectedTier, tiers }: { selectedTier: PricingTier; tiers: PricingTier[] }) {
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
                    <ChevronUpDownIcon className="size-4 fill-neutral-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-neutral-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={tier === selectedTier ? true : undefined}
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-neutral-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-neutral-900" />
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
                <div className="-mx-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm/6 font-semibold">{section}</div>
              </th>
            </tr>
            {tiers[0].features
              .filter((feature) => feature.section === section)
              .map(({ name }) => (
                <tr key={name} className="border-b border-neutral-100 last:border-none">
                  <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-neutral-600">
                    {name}
                  </th>
                  {tiers.map((tier) => {
                    const value = tier.features.find(
                      (feature) => feature.section === section && feature.name === name,
                    )?.value;

                    return (
                      <td
                        key={tier.slug}
                        data-selected={selectedTier === tier ? true : undefined}
                        className="p-4 data-selected:table-cell max-sm:hidden"
                      >
                        {value === true ? (
                          <>
                            <CheckIcon className="size-4 fill-success-600" />
                            <span className="sr-only">Included in {tier.name}</span>
                          </>
                        ) : value === false || value === undefined ? (
                          <>
                            <MinusIcon className="size-4 fill-neutral-400" />
                            <span className="sr-only">Not included in {tier.name}</span>
                          </>
                        ) : (
                          <div className="text-sm/6">{value}</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </Container>
  );
}

function FeatureItem({ description, disabled = false }: { description: string; disabled?: boolean }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-neutral-950/75 data-disabled:text-neutral-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-neutral-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  );
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  );
}

function FrequentlyAskedQuestions({ content }: { content: PricingPageContent }) {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">Frequently asked questions</Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          {content.faqs.map((faq, index) => (
            <dl key={index}>
              <dt className="text-sm font-semibold">{faq.question}</dt>
              <dd className="mt-4 text-sm/6 text-neutral-600">
                {faq.answer}
              </dd>
            </dl>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default async function Pricing(
  props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }
) {
  const searchParams = await props.searchParams;
  const content = await getPricingPageContent();

  const tier = typeof searchParams.tier === 'string'
    ? content.tiers.find(({ slug }) => slug === searchParams.tier)!
    : content.tiers[0];

  return (
    <main className="overflow-hidden">
      <Header content={content} />
      <PricingCards tiers={content.tiers} />
      <PricingTable selectedTier={tier} tiers={content.tiers} />
      {/* <Testimonial /> */}
      <FrequentlyAskedQuestions content={content} />
      <LogoCloud />
    </main>
  );
}
