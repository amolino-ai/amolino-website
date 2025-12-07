import { BentoCard } from '@/components/BentoCard';
import { Container } from '@/components/Container';
import { Heading, Subheading } from '@/components/Text';
import type { BentoSectionContent, DarkBentoSectionContent } from '@/lib/content/types';

interface BentoSectionProps {
  content: BentoSectionContent | DarkBentoSectionContent;
  dark?: boolean;
}

export function BentoSection({ content, dark = false }: BentoSectionProps) {
  const sectionContent = (
    <Container>
      <Subheading dark={dark}>{content.subheading}</Subheading>
      <Heading as="h3" dark={dark} className="mt-2 max-w-5xl">
        {content.heading}
      </Heading>
      <div className="mt-4 max-w-4xl text-gray-400">
        {content.description}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        {content.cards.map((card, index) => {
          // Convert size and position strings to CSS format
          const bgSize = card.graphic.size?.replace(/_/g, ' ');
          const bgPosition = card.graphic.position?.replace(/_/g, ' ');

          return (
            <BentoCard
              key={index}
              dark={dark}
              eyebrow={card.eyebrow}
              title={card.title}
              description={card.description}
              graphic={
                <div
                  className={`${dark ? 'h-80' : index === 0 ? 'h-80' : 'absolute inset-0'} bg-[url(${card.graphic.src})] bg-no-repeat`}
                  style={{
                    backgroundSize: bgSize,
                    backgroundPosition: bgPosition,
                  }}
                />
              }
              fade={card.fade}
              className={card.className}
            />
          );
        })}
      </div>
    </Container>
  );

  // Wrap in dark theme container if dark mode is enabled
  if (dark) {
    return (
      <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
        {sectionContent}
      </div>
    );
  }

  return sectionContent;
} 