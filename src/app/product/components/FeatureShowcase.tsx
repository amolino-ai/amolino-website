import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { DecorativeTriangles } from '@/components/decorative-triangles'
import { Screenshot } from '@/components/screenshot'
import { Heading } from '@/components/text'
import ComparisonSection from '@/components/comparison-section'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureShowcaseProps {
  title: string
  features: Feature[]
  screenshotSrc: string
  comparisonTitle: string
  comparisonSubtitle: string
  traditionalPoints: { text: string }[]
  aiPoweredPoints: { text: string }[]
}

export default function FeatureShowcase({
  title,
  features,
  screenshotSrc,
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
            <div className="mt-8">
              <Button variant="secondary">View Full Screen</Button>
            </div>
          </div>
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-2xl">
              <Screenshot
                width={1216}
                height={768}
                src={screenshotSrc}
                className="relative z-10 mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent" />
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
  )
} 