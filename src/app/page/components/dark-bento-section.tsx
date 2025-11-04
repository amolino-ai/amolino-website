import { BentoCard } from '@/components/BentoCard';
import { Container } from '@/components/Container';
import { Heading, Subheading } from '@/components/Text';
import type { DarkBentoSectionContent } from '@/lib/content/types';

interface DarkBentoSectionProps {
  content: DarkBentoSectionContent;
}

export function DarkBentoSection({ content }: DarkBentoSectionProps) {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>{content.subheading}</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-4xl">
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
                dark
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                graphic={
                  <div
                    className={`h-80 bg-[url(${card.graphic.src})] bg-no-repeat`}
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
    </div>
  );
} 