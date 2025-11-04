import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { DecorativeTriangles } from '@/components/DecorativeTriangles';
import { Screenshot } from '@/components/Screenshot';
import { Heading } from '@/components/Text';
import ComparisonSection from '@/components/ComparisonSection';

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureShowcaseProps {
  title: string
  features: Feature[]
  screenshot: {
    src: string
    width: number
    height: number
    fillContainer?: boolean
  }
  comparisonTitle: string
  comparisonSubtitle: string
  traditionalPoints: string[]
  aiPoweredPoints: string[]
}

export default function FeatureShowcase({
  title,
  features,
  screenshot,
  comparisonTitle,
  comparisonSubtitle,
  traditionalPoints,
  aiPoweredPoints,
}: FeatureShowcaseProps) {
  return (
    <div className="relative overflow-hidden bg-pink-50 py-32">
      <Container>
        <div className="relative z-10">
          <div className="text-center">
            <Heading as="h2">{title}</Heading>
            <div className="mx-auto mt-12 max-w-5xl">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="relative">
                    <div className="mb-6 flex items-center gap-x-3">
                      <div className="flex-none rounded-full bg-pink-600/10 p-2">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-base text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="mt-8">
              <Button variant="secondary">View Full Screen</Button>
            </div> */}
          </div>
          <div className="mt-16">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
              <Screenshot
                width={screenshot.width}
                height={screenshot.height}
                src={screenshot.src}
                fillContainer={screenshot.fillContainer}
                className="w-full"
                tilt={false}
              />


              <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        <DecorativeTriangles />
        <ComparisonSection
          title={comparisonTitle}
          subtitle={comparisonSubtitle}
          traditional={traditionalPoints}
          aiPowered={aiPoweredPoints}
        />
      </Container>
    </div>
  );
} 