import { Hero } from '../components/Hero'
import { Challenge } from '../components/Challenge'
import { Solution } from '../components/Solution'
import { Impact } from '../components/Impact'
import { BottomCTA } from '../components/BottomCTA'

export default function RevenueForecasting() {
  return (
    <main>
      <Hero
        badgeText="Revenue Forecasting"
        badgeBgColor="bg-orange-50"
        badgeTextColor="text-orange-700"
        title="Revenue Forecasting Excellence: Transform Uncertainty into Strategic Advantage"
        description="Transform revenue forecasting from an art into a science, using behavioral intelligence and AI to deliver forecasts you can actually stake your reputation on."
        primaryButtonText="Transform Your Forecasting"
        primaryButtonLink="https://app.amolino.com"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
      <Challenge
        subheading="The Challenge"
        heading="The Revenue Forecasting Dilemma"
        description="For today's sales leaders, the quarterly forecast review isn't just a meeting—it's often a high-stakes exercise in educated guesswork. Despite sophisticated CRM implementations, 76% of sales organizations report low confidence in their forecast accuracy, with the average B2B company missing quarterly forecasts by 13-24%."
        stats={[
          {
            label: "Forecast Confidence",
            value: 76,
            suffix: "%",
            description: "Of sales organizations report low confidence in forecast accuracy"
          },
          {
            label: "Forecast Variance",
            value: 18,
            suffix: "%",
            description: "Average quarterly forecast miss for B2B companies"
          }
        ]}
        features={[
          {
            title: "The Commitment Gap",
            children: "Your reps' public forecast commitments rarely match their private beliefs about deal outcomes"
          },
          {
            title: "Outdated Methodologies",
            children: "Applying simplistic stage-based percentages to complex, non-linear B2B buying journeys"
          },
          {
            title: "Last-Mile Blindness",
            children: "Critical buying signals occurring in conversations outside your CRM visibility"
          },
          {
            title: "The Sandbagging-Optimism Pendulum",
            children: "Reps oscillating between padding forecasts or submitting wishful projections"
          }
        ]}
      />
      <Solution
        subheading="The Solution"
        heading="The Revenue Intelligence Revolution: Forecasting with Confidence"
        features={[
          {
            title: "1. Multi-Dimension Forecast Modeling",
            items: [
              "AI-powered commit ranges: Replace single-number forecasts with statistically valid ranges",
              "Scenario modeling: Visualize how specific deal slippage affects quarterly outcomes",
              "Cohort analysis: Compare current pipeline performance against similar historical periods",
              "Confidence scoring: Quantify certainty levels for individual deals and overall forecasts"
            ]
          },
          {
            title: "2. Activity-Based Validation",
            items: [
              "Conversation intelligence: Extract closing signals from actual customer communications",
              "Engagement correlation: Match buying signals to historical patterns that predicted closed deals",
              "Stakeholder mapping: Factor decision-maker involvement into forecast calculations",
              "Validation triggers: Flag deals showing misalignment between rep confidence and buyer behaviors"
            ]
          },
          {
            title: "3. Revenue Operations Integration",
            items: [
              "Cross-functional accessibility: Provide unified forecast visibility across teams",
              "CRM synchronization: Maintain single source of truth while enhancing with intelligence layers",
              "Executive dashboards: Deliver instant insights without endless spreadsheet manipulation",
              "Variance alerting: Proactive notification when forecast fundamentals shift"
            ]
          }
        ]}
      />
      <Impact
        subheading="Measurable Impact"
        heading="The Measurable Bottom Line"
        description="Organizations implementing AI-powered forecasting methodologies report dramatic improvements across key metrics:"
        stats={[
          {
            label: "Forecast Variance",
            value: 34,
            suffix: "%",
            description: "reduction in forecast variance",
            dark: true
          },
          {
            label: "Deal Slippage",
            value: 47,
            suffix: "%",
            description: "decrease in '11th-hour' deal slippage",
            dark: true
          },
          {
            label: "Leader Productivity",
            value: 2.7,
            suffix: "x",
            description: "improvement in sales leader productivity through automated roll-ups",
            dark: true
          },
          {
            label: "Forecast Participation",
            value: 19,
            suffix: "%",
            description: "increase in forecast call participation when driven by objective data",
            dark: true
          }
        ]}
      />
      <BottomCTA
        heading="Don't let uncertainty limit your strategic potential"
        description="Transform revenue forecasting from an art into a science, using behavioral intelligence and AI to deliver forecasts you can actually stake your reputation on."
        primaryButtonText="Get Started"
        primaryButtonLink="/demo"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
    </main>
  )
} 