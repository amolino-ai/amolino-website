import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Link } from '@/components/link'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const IntegrationCategory = ({ title, children }) => {
  const categoryColors = {
    MEETINGS: 'bg-blue-50',
    EMAIL: 'bg-purple-50',
    MESSAGING: 'bg-green-50',
    CRM: 'bg-blue-50'
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`px-4 py-1 rounded-full mb-4 font-medium ${categoryColors[title]}`}>
        {title}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {children}
      </div>
    </div>
  )
}

const IntegrationIcon = ({ name, src, alt }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
        <Image src={src} alt={alt || `${name} logo`} width={40} height={40} />
      </div>
    </div>
  )
}

export function IntegrationsSection() {
  return (
    <Container className="py-20">
      <div className="text-center">
        <Subheading>Integrations</Subheading>
        <Heading as="h2" className="mt-2">
          AmolinoAI plays well with your sales stack
        </Heading>
        <p className="mt-6 mx-auto max-w-3xl text-xl text-gray-600">
          Integrate with emails, slack/teams, meetings to extract BANT, competition, objection handling,
          opportunity timelines, contacts, sentiment analysis. AmolinoAI can update SalesForce or
          Hubspot automatically
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <IntegrationCategory title="MEETINGS">
          <IntegrationIcon name="Teams" src="/icons/microsoft-teams.svg" />
          <IntegrationIcon name="Zoom" src="/icons/zoom.svg" />
          <IntegrationIcon name="Google Calendar" src="/icons/google-calendar.svg" />
        </IntegrationCategory>

        <IntegrationCategory title="EMAIL">
          <IntegrationIcon name="Gmail" src="/icons/gmail.svg" />
          <IntegrationIcon name="Outlook" src="/icons/outlook.svg" />
        </IntegrationCategory>

        <IntegrationCategory title="MESSAGING">
          <IntegrationIcon name="Slack" src="/icons/slack.svg" />
          <IntegrationIcon name="Teams" src="/icons/microsoft-teams.svg" />
        </IntegrationCategory>

        <IntegrationCategory title="CRM">
          <IntegrationIcon name="Salesforce" src="/icons/salesforce.svg" />
          <IntegrationIcon name="HubSpot" src="/icons/hubspot.svg" />
        </IntegrationCategory>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button href="#" variant="primary">Use for Free</Button>
        <Link href="/integrations" className="flex items-center gap-1 text-blue-600 font-medium">
          View integrations <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </Container>
  )
} 