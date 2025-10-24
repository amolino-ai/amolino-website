import { Container } from '@/components/Container';
import { Heading } from '@/components/Text';
import type { SecuritySectionContent } from '@/lib/content/types';

interface SecuritySectionProps {
  content: SecuritySectionContent;
}

export function SecuritySection({ content }: SecuritySectionProps) {
  return (
    <div className="py-32 bg-white">
      <Container>
        <div className="text-center">
          <Heading as="h2">{content.heading}</Heading>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5 transition duration-200 hover:bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
} 