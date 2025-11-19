import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Screenshot } from '@/components/Screenshot';
import { Heading, Subheading } from '@/components/Text';
import { getComparisonPageContent } from '@/lib/content';
import type { ComparisonItem } from '@/lib/content/types';

function ComparisonCard({ title, amolino, hubspot }: ComparisonItem) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-950/5">
      <div className="border-b border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <div className="p-6">
          <div className="mb-4 flex items-center gap-x-3">
            <div className="flex-none rounded-full bg-pink-600/10 p-1">
              <div className="h-2 w-2 rounded-full bg-pink-600" />
            </div>
            <h4 className="font-medium text-pink-600">Amolino</h4>
          </div>
          <p className="text-gray-600">{amolino}</p>
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center gap-x-3">
            <div className="flex-none rounded-full bg-gray-600/10 p-1">
              <div className="h-2 w-2 rounded-full bg-gray-600" />
            </div>
            <h4 className="font-medium text-gray-600">HubSpot</h4>
          </div>
          <p className="text-gray-600">{hubspot}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-x-3">
      <svg className="h-6 w-5 flex-none text-pink-600" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-gray-300">{children}</span>
    </li>
  );
}

function Hero({ badge, title, subtitle, description }: { badge: string; title: string; subtitle: string; description: string }) {
  return (
    <div className="relative isolate overflow-hidden">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto text-center">
          <Badge text={badge} backgroundColor="bg-pink-50" textColor="text-pink-700" />
          <h1 className="mx-auto mt-6 max-w-5xl pb-12 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2>{subtitle}</h2>
          <p className="mt-6 text-left text-base/relaxed text-gray-600">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}

function Comparisons({ title, heading, items }: { title: string; heading: string; items: ComparisonItem[] }) {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>{title}</Subheading>
          <Heading as="h2">{heading}</Heading>
        </div>
        <div className="mt-16 space-y-8">
          {items.map((item, index) => (
            <ComparisonCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

function Analysis({ title, heading, description, scenarios, screenshot }: { title: string; heading: string; description: string; scenarios: { title: string; description: string }[]; screenshot: { src: string; width: number; height: number } }) {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>{title}</Subheading>
          <Heading as="h2">{heading}</Heading>
          <p className="mt-6 text-lg text-gray-600">
            {description}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <div key={index} className="rounded-2xl bg-pink-50 p-8">
              <h3 className="text-xl font-semibold text-pink-900">{scenario.title}</h3>
              <p className="mt-2 text-pink-700">{scenario.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Screenshot
            width={screenshot.width}
            height={screenshot.height}
            src={screenshot.src}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </Container>
    </div>
  );
}

function Benefits({ title, heading, items }: { title: string; heading: string; items: string[] }) {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Subheading>{title}</Subheading>
          <Heading as="h2">
            {heading}
          </Heading>
        </div>
        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FeatureCheck key={index}>{item}</FeatureCheck>
          ))}
        </ul>
      </Container>
    </div>
  );
}

function BottomCTA() {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl bg-gray-900 px-8 py-24 text-center sm:px-14">
          <Heading as="h2" className="mx-auto max-w-4xl">
            Ready to Upgrade Your Forecasting?
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Stop guessing and start forecasting with confidence. Choose Amolino for real-time, AI-powered insights that
            drive predictable growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/demo">Get Started Today</Button>
            <Button href="/contact" variant="secondary">
              Talk to Sales
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default async function AmolinoVsHubspot() {
  const content = await getComparisonPageContent('amolino-vs-hubspot');

  const breadcrumbItems = [
    { label: 'Learn', href: '/learn' },
    { label: 'Amolino vs HubSpot' },
  ];

  return (
    <>
      <Container>
        <Breadcrumb items={breadcrumbItems} className="py-4" />
      </Container>
      <Hero {...content.hero} />
      <Comparisons {...content.comparisons} />
      <Analysis {...content.analysis} />
      <Benefits {...content.benefits} />
      {/* <BottomCTA /> */}
    </>
  );
}
