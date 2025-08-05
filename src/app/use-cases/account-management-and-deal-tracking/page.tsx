import { Hero } from '../components/Hero'
import { Challenge } from '../components/Challenge'
import { Solution } from '../components/Solution'
import { Impact } from '../components/Impact'
import { BottomCTA } from '../components/BottomCTA'

export default function AccountManagementAndDealTracking() {
  return (
    <main>
      <Hero
        badgeText="Account Management & Deal Tracking"
        badgeBgColor="bg-blue-50"
        badgeTextColor="text-blue-700"
        title="AI-Powered Deal Intelligence: Transforming How You Win Business"
        description="Transform your deal management from a mental burden into an orchestrated system of excellence with AI-powered intelligence."
        primaryButtonText="Transform Your Deal Management"
        primaryButtonLink="https://app.amolino.com"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
      <Challenge
        subheading="The Challenge"
        heading="The Account Executive's Impossible Burden"
        description="Today's Account Executives face a crushing reality: the average enterprise AE manages 28-37 active opportunities across 15-20 accounts while attempting to coordinate with 5-7 internal stakeholders per deal. Despite CRM tools and sales methodologies, 72% of sales professionals report regularly missing critical deal details that impact outcomes."
        stats={[
          {
            label: "Active Opportunities",
            value: 32,
            suffix: " avg",
            description: "Managed by each Account Executive"
          },
          {
            label: "Critical Details Missed",
            value: 72,
            suffix: "%",
            description: "Of sales professionals report missing important information"
          }
        ]}
        features={[
          {
            title: "The Recall Fallacy",
            children: "Relying on memory for complex deal nuances across dozens of accounts"
          },
          {
            title: "Context-Switching Penalty",
            children: "Productivity losses of 40% when constantly jumping between deals and systems"
          },
          {
            title: "Recency Bias Trap",
            children: "Over-focusing on latest conversations while losing sight of historical patterns"
          },
          {
            title: "Relationship Fragmentation",
            children: "Failing to connect disparate interactions into coherent customer journeys"
          }
        ]}
      />
      <Solution
        subheading="The Solution"
        heading="The AI Memory Advantage: Your Digital Deal Intelligence Partner"
        features={[
          {
            title: "1. Total Deal Intelligence",
            items: [
              "Conversation memory: Instantly recall every interaction across the entire customer relationship",
              "Buying signal tracking: Automatically identify and flag budget discussions, decision criteria, and competitive mentions",
              "Stakeholder intelligence: Map evolving buying committees with engagement tracking for each contact",
              "Commitment monitoring: Track every promise made to customers and by customers to ensure follow-through"
            ]
          },
          {
            title: "2. Proactive Deal Guidance",
            items: [
              "Risk identification: Early warning system for stalled deals based on engagement patterns",
              "Next-best-action coaching: AI-powered recommendations for optimal next steps",
              "Competitive positioning: Real-time guidance when competitors enter the conversation",
              "Buying stage alignment: Alert when customer behaviors suggest misalignment"
            ]
          },
          {
            title: "3. Sales Workflow Acceleration",
            items: [
              "Pre-meeting intelligence: Instant preparation with historical context and guidance",
              "Follow-up automation: Smart capture of action items with reminder systems",
              "Relationship intelligence: Insight into customer sentiment trends and health metrics",
              "Account team coordination: Simplified internal collaboration with shared deal intelligence"
            ]
          }
        ]}
      />
      <Impact
        subheading="Measurable Impact"
        heading="The Performance Transformation"
        description="Organizations implementing AI-powered deal intelligence report dramatic improvements across key metrics:"
        stats={[
          {
            label: "Deal Velocity",
            value: 31,
            suffix: "%",
            description: "increase through elimination of follow-up gaps"
          },
          {
            label: "Win Rates",
            value: 26,
            suffix: "%",
            description: "improvement by avoiding deal-killing oversights"
          },
          {
            label: "Deals Managed",
            value: 2.8,
            suffix: "x",
            description: "increase in average deals per rep without quality loss"
          },
          {
            label: "Ramp Time",
            value: 29,
            suffix: "%",
            description: "reduction in new hire ramp time"
          }
        ]}
      />
      <BottomCTA
        heading="Don't let cognitive capacity limit your sales performance"
        description="Transform your deal management from a mental burden into an orchestrated system of excellence with AI-powered intelligence."
        primaryButtonText="Get Started"
        primaryButtonLink="/demo"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
    </main>
  )
}