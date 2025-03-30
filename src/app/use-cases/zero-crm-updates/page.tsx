import { Hero } from '../components/Hero'
import { Challenge } from '../components/Challenge'
import { Solution } from '../components/Solution'
import { Impact } from '../components/Impact'
import { BottomCTA } from '../components/BottomCTA'

export default function CRMAutomation() {
  return (
    <main>
      <Hero
        badgeText="CRM Automation"
        badgeBgColor="bg-purple-50"
        badgeTextColor="text-purple-700"
        title="CRM Automation Excellence: The Foundation of Revenue Certainty"
        description="Transform your CRM from a manual record-keeping system into an autonomous intelligence platform that captures, organizes, and enriches customer data with minimal human intervention."
        primaryButtonText="Transform Your CRM"
        primaryButtonLink="https://app.amolino.com"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
      <Challenge
        subheading="The Challenge"
        heading="The CRM Reality Gap"
        description="For revenue leaders, the promise of CRM as a 'single source of truth' has largely remained unfulfilled. Despite significant investments, 69% of organizations report that poor CRM data quality directly undermines their revenue operations, with the average B2B sales organization operating on CRM data that's estimated to be 27-38% incomplete or inaccurate."
        stats={[
          {
            label: "CRM Data Quality",
            value: 69,
            suffix: "%",
            description: "Of organizations report poor CRM data quality undermining operations"
          },
          {
            label: "Data Inaccuracy",
            value: 32,
            suffix: "%",
            description: "Average CRM data is incomplete or inaccurate"
          }
        ]}
        features={[
          {
            title: "The Documentation Tax",
            children: "Top performers spending up to 5.7 hours weekly on administrative CRM tasks rather than selling"
          },
          {
            title: "The Procrastination Problem",
            children: "Critical deal updates delayed until opportunity review meetings, creating dangerous visibility gaps"
          },
          {
            title: "The Selective Memory Challenge",
            children: "Reps naturally documenting positive signals while downplaying negative indicators"
          },
          {
            title: "The Scattered Intelligence Reality",
            children: "Valuable customer insights trapped across email, calendar, and communication platforms"
          }
        ]}
      />
      <Solution
        subheading="The Solution"
        heading="The Automated Intelligence Advantage: CRM That Updates Itself"
        features={[
          {
            title: "1. Comprehensive Activity Intelligence",
            items: [
              "Cross-platform capture: Automatically sync every customer touchpoint from email, calendar, calls, and meetings",
              "Interaction mapping: Create complete customer journey documentation without rep involvement",
              "Contact harvesting: Identify and add new stakeholders to your CRM as they emerge in communications",
              "Engagement scoring: Quantify relationship strength based on actual interaction patterns"
            ]
          },
          {
            title: "2. Smart Data Governance",
            items: [
              "Field standardization: Enforce consistent data formats and nomenclature across your entire CRM",
              "Duplication prevention: Intelligent matching algorithms that prevent record proliferation",
              "Automated enrichment: Supplement internal data with verified external information",
              "Quality alerting: Proactive identification of data anomalies requiring attention"
            ]
          },
          {
            title: "3. Operational Workflow Enhancement",
            items: [
              "Activity prioritization: Guide reps to focus on contacts requiring immediate attention",
              "Next-best-action recommendations: Suggest specific follow-ups based on engagement patterns",
              "Process compliance verification: Ensure key selling motions are followed without manual checkpoints",
              "Manager oversight streamlining: Provide leaders with exception-based alerting"
            ]
          }
        ]}
      />
      <Impact
        subheading="Measurable Impact"
        heading="The Bottom-Line Impact"
        description="Organizations implementing automated CRM intelligence report dramatic improvements across key metrics:"
        stats={[
          {
            label: "Data Completeness",
            value: 41,
            suffix: "%",
            description: "increase in CRM data completeness within 90 days",
            dark: true
          },
          {
            label: "Dark Pipeline",
            value: 38,
            suffix: "%",
            description: "reduction in opportunities not visible until late stages",
            dark: true
          },
          {
            label: "Leadership Productivity",
            value: 3.2,
            suffix: "x",
            description: "improvement in sales leadership productivity through automated insights",
            dark: true
          },
          {
            label: "Onboarding Speed",
            value: 22,
            suffix: "%",
            description: "faster onboarding of new sales hires with pre-populated intelligence",
            dark: true
          }
        ]}
      />
      <BottomCTA
        heading="Don't let manual CRM management limit your revenue potential"
        description="Transform your CRM from a documentation burden into a strategic asset that drives revenue certainty."
        primaryButtonText="Get Started"
        primaryButtonLink="/demo"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
    </main>
  )
} 