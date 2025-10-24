import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading, Subheading } from '@/components/Text';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import type { IntegrationsSectionContent, IntegrationCategory as IntegrationCategoryType } from '@/lib/content/types';

interface IntegrationCategoryProps {
  title: 'MEETINGS' | 'EMAIL' | 'MESSAGING' | 'CRM'
  children: React.ReactNode
}

interface IntegrationIconProps {
  name: string
  src: string
  alt?: string
}

const IntegrationCategory = ({ title, children }: IntegrationCategoryProps) => {
  const categoryColors = {
    MEETINGS: 'bg-cyan-100',
    EMAIL: 'bg-purple-100',
    MESSAGING: 'bg-green-100',
    CRM: 'bg-blue-100',
  } as const;

  return (
    <div className="flex flex-col items-center">
      <div className={`mb-4 rounded-full px-4 py-1 font-medium ${categoryColors[title]}`}>{title}</div>
      <div className="flex flex-wrap justify-center gap-4">{children}</div>
    </div>
  );
};

const IntegrationIcon = ({ name, src, alt }: IntegrationIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-blue-600">
        <Image src={src} alt={alt || `${name} logo`} width={40} height={40} />
      </div>
    </div>
  );
};

interface IntegrationsSectionProps {
  content: IntegrationsSectionContent;
}

export function IntegrationsSection({ content }: IntegrationsSectionProps) {
  return (
    <div className="bg-gradient-to-b from-white via-blue-100 to-white">
      <Container className="py-20 border-y-2 border-blue-200 shadow-md rounded-lg my-8">
        <div className="text-center">
          <Subheading>{content.subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {content.heading}
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
            {content.description}
          </p>
        </div>
        <h2 className="mt-8 text-center text-2xl font-bold text-gray-900">
          {content.tagline}
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.categories.map((category, index) => (
            <IntegrationCategory key={index} title={category.title}>
              {category.integrations.map((integration, integrationIndex) => (
                <IntegrationIcon
                  key={integrationIndex}
                  name={integration.name}
                  src={integration.src}
                  alt={integration.alt}
                />
              ))}
            </IntegrationCategory>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button href={content.cta.primaryUrl} variant="primary">
            {content.cta.primaryText}
          </Button>
          {/* <Link href="/integrations" className="flex items-center gap-1 font-medium text-blue-600">
            View integrations <ChevronRightIcon className="size-4" />
          </Link> */}
        </div>
      </Container>
    </div>
  );
}