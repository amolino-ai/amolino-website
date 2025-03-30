import { Button } from '@/components/Button'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

interface IntegrationCategoryProps {
  title: 'MEETINGS' | 'EMAIL' | 'MESSAGING' | 'CRM'
  children: React.ReactNode
}

interface IntegrationIconProps {
  name: string
  src: string
  alt?: string
}

const IntegrationCategory = ({ title, children }: IntegrationCategoryProps) => {
  const categoryColors = {
    MEETINGS: 'bg-blue-50',
    EMAIL: 'bg-purple-50',
    MESSAGING: 'bg-green-50',
    CRM: 'bg-blue-50',
  } as const

  return (
    <div className="flex flex-col items-center">
      <div className={`mb-4 rounded-full px-4 py-1 font-medium ${categoryColors[title]}`}>{title}</div>
      <div className="flex flex-wrap justify-center gap-4">{children}</div>
    </div>
  )
}

const IntegrationIcon = ({ name, src, alt }: IntegrationIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-gray-200">
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
        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
          Integrate with emails, slack/teams, meetings to extract BANT, competition, objection handling, opportunity
          timelines, contacts, sentiment analysis. AmolinoAI can update SalesForce or Hubspot automatically
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <IntegrationCategory title="MEETINGS">
          <IntegrationIcon name="Teams" src="/icons/ms_teams_logo.jpeg" />
          <IntegrationIcon name="Zoom" src="/icons/zoom.png" />
          <IntegrationIcon name="Google Calendar" src="/icons/google_meet.png" />
        </IntegrationCategory>

        <IntegrationCategory title="EMAIL">
          <IntegrationIcon name="Gmail" src="/icons/gmail.png" />
          <IntegrationIcon name="Outlook" src="/icons/microsoft.png" />
        </IntegrationCategory>

        <IntegrationCategory title="MESSAGING">
          <IntegrationIcon name="Slack" src="/icons/slack_logo.png" />
          <IntegrationIcon name="Teams" src="/icons/ms_teams_logo.jpeg" />
        </IntegrationCategory>

        <IntegrationCategory title="CRM">
          <IntegrationIcon name="Salesforce" src="/icons/salesforce.png" />
          <IntegrationIcon name="HubSpot" src="/icons/hubspot.png" />
        </IntegrationCategory>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Button href="https://app.amolino.ai" variant="primary">
          Use for Free
        </Button>
        {/* <Link href="/integrations" className="flex items-center gap-1 font-medium text-blue-600">
          View integrations <ChevronRightIcon className="size-4" />
        </Link> */}
      </div>
    </Container>
  )
}
