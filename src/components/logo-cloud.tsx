import { Container } from '@/components/container'
import { Subheading } from './text'

const logos = [
  {
    name: 'Saletancy',
    src: '/logos/saletancy_logo.png',
  },
  {
    name: 'Celestix',
    src: '/logos/celestix_logo.png',
  },
  {
    name: 'IterateAI',
    src: '/logos/iterateai_logo.png',
  },
  {
    name: 'Cloud Epitome',
    src: '/logos/cloudepitome_logo.png',
  },
  {
    name: 'Owow Talents',
    src: '/logos/owow_logo.jpeg',
  },
  {
    name: 'Papaya In',
    src: '/logos/papayain_logo.webp',
  },
]

export function LogoCloud() {
  return (
    <div>
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Trusted by leading companies</Subheading>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {logos.map((logo) => (
              <div key={logo.name} className="flex h-32 flex-col items-center justify-center">
                <img alt={logo.name} src={logo.src} className="mb-3 h-12 w-auto object-contain" />
                <span className="text-center text-lg text-bold text-gray-600">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
