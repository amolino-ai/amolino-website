import { Container } from '@/components/container'
import { Heading } from '@/components/text'

export function SecuritySection() {
  return (
    <div className="py-32 bg-white">
      <Container>
        <div className="text-center">
          <Heading as="h2">Security and Privacy</Heading>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
            At AmolinoAI, we understand that security and privacy are fundamental to your organization and to earning your trust. We have worked with the world&apos;s leading organizations to ensure that we follows industry-standard security and privacy policies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5 transition duration-200 hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Google Certified Security</h3>
            <p className="mt-4 text-base text-gray-600">
              Google has verified that we are a CASA 2 certified vendor that follows industry-best security policies
            </p>
          </div>

          <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5 transition duration-200 hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Microsoft Cloud Partner</h3>
            <p className="mt-4 text-base text-gray-600">
              AmolinoAI is a Microsoft approved cloud provider
            </p>
          </div>

          <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5 transition duration-200 hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">CASA 2 Accredited</h3>
            <p className="mt-4 text-base text-gray-600">
              AmolinoAI has obtained CASA 2 certification. CASA 2 is provided after independent third-party security auditor
            </p>
          </div>

          <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5 transition duration-200 hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Encryption In Transit</h3>
            <p className="mt-4 text-base text-gray-600">
              Your data is protected during transit by strong encryption (TLS 1.2)
            </p>
          </div>

          <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5 transition duration-200 hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Encryption At Rest</h3>
            <p className="mt-4 text-base text-gray-600">
              Your data is encrypted at rest with strong AES-265 bit encryption
            </p>
          </div>

          <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/5 transition duration-200 hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">GDPR / CCPA Compliant</h3>
            <p className="mt-4 text-base text-gray-600">
              We are fully compliant with European GDPR and California CCPA
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
} 