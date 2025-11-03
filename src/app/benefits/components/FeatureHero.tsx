import { Badge } from '@/components/Badge';
import { Container } from '@/components/Container';
import { Screenshot, SCREENSHOT_PADDING } from '@/components/Screenshot';

interface Feature {
  name: string;
  description: string;
}

interface FeatureHeroProps {
  badgeText?: string;
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  features: Feature[];
}

export function FeatureHero({ badgeText, heading, description, image, features }: FeatureHeroProps) {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        {/* Mobile padding wrapper to prevent Screenshot shadow from causing viewport overflow */}
        <div className="px-2 lg:px-0">
          {/* Outer container: controls page layout with fixed aspect ratios
              Inner padding (py-2) accommodates Screenshot's decorative shadow that extends by SCREENSHOT_PADDING (spacing-2) */}
          <div className="aspect-[3/2] w-full py-2 sm:aspect-[5/2] lg:absolute lg:aspect-auto lg:h-full lg:w-1/2 lg:py-0 lg:pr-4 xl:pr-16">
            {/* Inner Screenshot: actual image dimensions from YAML, scales within container */}
            <Screenshot
              src={image.src}
              width={image.width}
              height={image.height}
              cover={true}
              tilt={true}
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            {badgeText && (
              <div className="mb-4">
                <Badge text={badgeText} />
              </div>
            )}
            <h2 id="features-heading" className="text-4xl font-bold tracking-tight text-gray-900">
              {heading}
            </h2>
            <p className="mt-4 text-gray-500">{description}</p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
