import { Hero } from '../components/Hero'
import { Challenge } from '../components/Challenge'
import { Solution } from '../components/Solution'
import { Impact } from '../components/Impact'
import { BottomCTA } from '../components/BottomCTA'

export default function DealLinearity() {
  return (
    <>
      <Hero
        badgeText="Deal Linearity"
        badgeBgColor="bg-green-50"
        badgeTextColor="text-green-700"
        title="Revenue Linearity Intelligence: The Key to Predictable Growth"
        description="Transform your revenue forecasting to create predictable, achievable paths to your number without the quarterly scramble."
        primaryButtonText="Transform Your Revenue Linearity"
        primaryButtonLink="https://app.amolino.com"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
      <Challenge
        subheading="The Challenge"
        heading="The Revenue Linearity Crisis"
        description="Today's revenue leaders face a persistent challenge: despite sophisticated CRM systems, 74% of B2B companies experience extreme revenue skew, with over 65% of quarterly bookings closing in the final two weeks. This back-end loading creates immense organizational stress, pricing pressure, and cash flow volatility."
        stats={[
          {
            label: "Revenue Skew",
            value: 74,
            suffix: "%",
            description: "Of B2B companies experience extreme revenue skew"
          },
          {
            label: "Quarter-End Loading",
            value: 65,
            suffix: "%",
            description: "Of quarterly bookings close in final two weeks"
          }
        ]}
        features={[
          {
            title: "The Hockey Stick Reality",
            children: "Perpetual last-minute deal compression regardless of quarter length or planning efforts"
          },
          {
            title: "The Discount Spiral",
            children: "End-of-quarter pricing pressure that erodes margins by 12-18% on average"
          },
          {
            title: "The Resource Whiplash",
            children: "Implementation teams alternatively idle then overwhelmed by uneven deal flow"
          },
          {
            title: "The Investor Credibility Gap",
            children: "Diminishing confidence when forecasts consistently require last-minute heroics"
          }
        ]}
      />
      <Solution
        subheading="The Solution"
        heading="The Linearity Intelligence Revolution: Smoothing the Revenue Curve"
        features={[
          {
            title: "1. Deal Pacing Intelligence",
            items: [
              "Velocity scoring: AI-powered assessment of deal progression relative to ideal close timeframes",
              "Linearity benchmarking: Compare current quarter pacing against historical patterns",
              "Milestone monitoring: Track critical deal advancement signals against time-to-close requirements",
              "Early warning system: Identify stalling deals weeks before they jeopardize quarter-end expectations"
            ]
          },
          {
            title: "2. Scientific Close Date Modeling",
            items: [
              "Behavioral validation: Assess actual buyer behaviors against rep-committed close dates",
              "Historical pattern matching: Compare current deals against similar historical opportunities",
              "Stakeholder analysis: Factor decision-maker engagement patterns into close date probability",
              "Commitment detection: Identify concrete buying signals that validate forecasted close dates"
            ]
          },
          {
            title: "3. Linearity Optimization Tools",
            items: [
              "Deal acceleration playbooks: Targeted interventions to pull deals forward from quarter-end",
              "Incentive alignment: Comp plan analytics that reward linear deal flow instead of heroic finishes",
              "Pricing discipline enforcement: Tools to maintain margin integrity despite end-of-quarter pressure",
              "Capacity balancing: Resource allocation guidance that smooths delivery team workloads"
            ]
          }
        ]}
      />
      <Impact
        subheading="Measurable Impact"
        heading="The Documented Results"
        description="Organizations implementing linearity intelligence report dramatic improvements across key metrics:"
        stats={[
          {
            label: "Last-Week Bookings",
            value: 41,
            suffix: "%",
            description: "reduction in last-week-of-quarter bookings within two quarters",
            dark: true
          },
          {
            label: "Deal Margins",
            value: 12,
            suffix: "%",
            description: "improvement in average deal margins through reduced deadline discounting",
            dark: true
          },
          {
            label: "Mid-Quarter Closures",
            value: 3.2,
            suffix: "x",
            description: "increase in mid-quarter deal closures without changing overall close rates",
            dark: true
          },
          {
            label: "Forecast Accuracy",
            value: 28,
            suffix: "%",
            description: "greater accuracy in monthly forecast calls",
            dark: true
          }
        ]}
      />
      <BottomCTA
        heading="Don't let quarter-end loading limit your growth potential"
        description="Transform your revenue forecasting to create predictable, achievable paths to your number without the quarterly scramble."
        primaryButtonText="Get Started"
        primaryButtonLink="/demo"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
    </>
  )
} 