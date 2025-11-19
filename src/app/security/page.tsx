// import { Backgrounds } from '@/components/Backgrounds';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading, Lead, Subheading } from '@/components/Text';
import {
  getSecurityHero,
  getSecurityCertifications,
  getSecurityDataProtection,
  getSecurityAccessControls,
  getSecurityInfrastructure,
  getSecurityPractices,
  getSecurityContact,
} from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security & Compliance',
  description:
    'Learn about Amolino&apos;s enterprise-grade security measures, certifications, and compliance standards. CASA Tier 2 certified with GDPR and CCPA compliance.',
};

// Security icons
function ShieldIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    </svg>
  );
}

async function Header() {
  const hero = await getSecurityHero();

  return (
    <Container className="mt-16">
      <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
        <ShieldIcon />
        <span className="ml-2">{hero.badge}</span>
      </div>
      <Heading as="h1">{hero.heading}</Heading>
      <Lead className="mt-6 max-w-3xl">{hero.description}</Lead>
    </Container>
  );
}

async function Certifications() {
  const content = await getSecurityCertifications();

  return (
    <Container className="mt-24">
      <Subheading>{content.heading}</Subheading>
      <Heading as="h2" className="mt-2">
        {content.subheading}
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {content.certifications.map((cert, index) => (
          <div key={index} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              {index === 0 ? <ShieldIcon /> : <DocumentIcon />}
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">{cert.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{cert.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

async function DataSecurity() {
  const content = await getSecurityDataProtection();

  return (
    <Container className="mt-24">
      <Subheading>{content.heading}</Subheading>
      <Heading as="h2" className="mt-2">
        {content.subheading}
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{content.encryption.title}</h3>
          <div className="mt-6 space-y-6">
            {content.encryption.items.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">{content.dataResidency.title}</h3>
          <div className="mt-6 space-y-6">
            {content.dataResidency.items.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

async function AccessControls() {
  const content = await getSecurityAccessControls();

  return (
    <Container className="mt-24">
      <Subheading>{content.heading}</Subheading>
      <Heading as="h2" className="mt-2">
        {content.subheading}
      </Heading>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {content.controls.map((control, index) => (
            <div key={index} className="rounded-2xl bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <LockIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{control.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{control.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

async function Infrastructure() {
  const content = await getSecurityInfrastructure();

  return (
    <Container className="mt-24">
      <Subheading>{content.heading}</Subheading>
      <Heading as="h2" className="mt-2">
        {content.subheading}
      </Heading>
      <div className="mt-12 space-y-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <div className="flex items-start gap-4">
            <img src="/icons/microsoft-azure.svg" alt="Microsoft Azure" className="h-12 w-12" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{content.azure.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{content.azure.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {content.azure.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h3 className="text-lg font-semibold text-gray-900">{content.networkSecurity.title}</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {content.networkSecurity.items.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

async function SecurityPracticesSection() {
  const content = await getSecurityPractices();

  return (
    <Container className="mt-24">
      <Subheading>{content.heading}</Subheading>
      <Heading as="h2" className="mt-2">
        {content.subheading}
      </Heading>
      <div className="mt-12 space-y-6">
        {content.practices.map((practice, index) => (
          <div key={index} className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">{practice.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{practice.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

async function ContactSection() {
  const content = await getSecurityContact();

  return (
    <Container className="mt-32 mb-24">
      <div className="relative rounded-3xl p-12 lg:p-16">
        {/* <Backgrounds variant="gradient-blue-purple" asChild={false} className="rounded-3xl" /> */}
        <div className="relative mx-auto max-w-2xl text-center">
          <Heading as="h2">{content.heading}</Heading>
          <p className="mt-6 text-lg text-gray-600">{content.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {content.ctas.map((cta, index) => (
              <Button key={index} href={cta.url} variant={cta.variant}>
                {cta.text}
              </Button>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">{content.disclaimer}</p>
        </div>
      </div>
    </Container>
  );
}

export default async function SecurityPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Certifications />
      <DataSecurity />
      <AccessControls />
      <Infrastructure />
      <SecurityPracticesSection />
      <ContactSection />
    </main>
  );
}
