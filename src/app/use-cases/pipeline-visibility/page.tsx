import { Hero } from '../components/Hero'
import { Challenge } from '../components/Challenge'
import { Solution } from '../components/Solution'
import { Impact } from '../components/Impact'
import { BottomCTA } from '../components/BottomCTA'


export default function PipelineVisibility() {
  return (
    <main>
      <Hero
        badgeText="Pipeline Visibility"
        badgeBgColor="bg-pink-50"
        badgeTextColor="text-pink-700"
        title="Your Key to Predictable Revenue Growth"
        description="Transform your pipeline from a collection of opportunities into an actionable intelligence system driving predictable growth."
        primaryButtonText="Transform Your Pipeline"
        primaryButtonLink="https://app.amolino.com"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
      <Challenge
        subheading="The Challenge"
        heading="Why Traditional Methods Fail"
        description="83% of sales organizations struggle with forecast accuracy, missing quarterly projections by more than 10% despite expensive CRM investments."
        stats={[
          {
            label: "Sales Rep Time Wasted",
            value: 5,
            suffix: "+ hrs/week",
            description: "Manual CRM updates taking valuable time away from selling"
          },
          {
            label: "Forecast Accuracy Gap",
            value: 10,
            suffix: "%+",
            description: "Average margin of error in quarterly revenue projections"
          }
        ]}
        features={[
          {
            title: "Manual Updates",
            children: "Sales reps waste 5+ hours weekly on manual updates"
          },
          {
            title: "Fragmented Data",
            children: "Critical insights remain trapped in fragmented systems"
          },
          {
            title: "Late Detection",
            children: "Deal risks identified too late for intervention"
          },
          {
            title: "Incomplete Data",
            children: "Decisions based on incomplete information rather than data"
          }
        ]}
      />
      <Solution
        subheading="The Solution"
        heading="Amolino's Automated Intelligence"
        features={[
          {
            title: "1. Comprehensive Capture",
            items: [
              "Automated documentation of all customer interactions",
              "Complete visibility into engagement patterns",
              "Automatic stakeholder mapping"
            ]
          },
          {
            title: "2. AI-Powered Intelligence",
            items: [
              "Sentiment analysis detects shifting buyer interest",
              "Immediate competitive alerts",
              "Early warning system for at-risk deals"
            ]
          },
          {
            title: "3. Predictive Analytics",
            items: [
              "Objective win probability scoring",
              "Accurate timeline forecasting",
              "Revenue impact visualization"
            ]
          }
        ]}
      />
      <Impact
        subheading="Measurable Impact"
        heading="Strategic Advantages"
        description="Organizations using automated pipeline visibility report dramatic improvements across key metrics:"
        stats={[
          {
            label: "Forecast Accuracy",
            value: 28,
            suffix: "%",
            description: "improvement in accuracy"
          },
          {
            label: "Win Rates",
            value: 15,
            suffix: "%",
            description: "increase in success"
          },
          {
            label: "Sales Cycle",
            value: 22,
            suffix: "%",
            description: "reduction in length"
          },
          {
            label: "ROI",
            value: 4.3,
            suffix: "x",
            description: "within first year"
          }
        ]}
      />
      <BottomCTA
        heading="Don't just manage your pipeline—weaponize it"
        description="Transform your pipeline from a collection of opportunities into an actionable intelligence system driving predictable growth."
        primaryButtonText="Get Started"
        primaryButtonLink="/demo"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
      />
      </main>
  )
}
