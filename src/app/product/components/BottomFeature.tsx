import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

interface BottomFeatureProps {
  title: string
  subtitle: string
  points: {
    title: string
    description: string
  }[]
  screenshotSrc: string
}

export default function BottomFeature({
  title,
  subtitle,
  points,
  screenshotSrc,
}: BottomFeatureProps) {
  return (
    <div className="bg-white py-32">
      <Container>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-x-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {subtitle}
            </p>
            <ul className="mt-4 space-y-4 text-lg text-gray-600">
              {points.map((point, index) => (
                <li key={index}>
                  <strong>{point.title}</strong> {point.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <Screenshot
              width={1216}
              height={768}
              src={screenshotSrc}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </div>
  )
} 