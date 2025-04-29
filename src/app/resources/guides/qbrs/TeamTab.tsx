'use client'

import { Tabs, TabsList, TabsPanel, TabsTab } from '@mantine/core'
import { useState } from 'react'
import type { ReactNode } from 'react'

export default function TeamTabs() {



    const [activeTab, setActiveTab] = useState('sales')

  // Custom tab component to handle the active styling
  const CustomTab = ({ value, children }: { value: string; children: ReactNode }) => {
    const isActive = activeTab === value
    
    return (
      <TabsTab 
        value={value} 
        onClick={() => setActiveTab(value)}
        className={`transition duration-200 ${
          isActive 
            ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' 
            : ''
        }`}
      >
        {children}
      </TabsTab>
    )
  }
  return (
    <Tabs 
      value={activeTab} 
      onChange={(value) => value !== null && setActiveTab(value)} 
      variant="outline" 
      className="w-full"
    >
      <TabsList className="mb-6 flex flex-wrap gap-2">
        <TabsTab value="sales" className={activeTab === 'sales' ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' : ''}>Sales Team</TabsTab>
        <TabsTab value="cs" className={activeTab === 'cs' ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' : ''}>Customer Success</TabsTab>
        <TabsTab value="marketing" className={activeTab === 'marketing' ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' : ''}>Marketing</TabsTab>
        <TabsTab value="product" className={activeTab === 'product' ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' : ''}>Product</TabsTab>
        <TabsTab value="finance" className={activeTab === 'finance' ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' : ''}>Finance & FP&A</TabsTab>
        <TabsTab value="ops" className={activeTab === 'ops' ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' : ''}>Operations & Support</TabsTab>
        <TabsTab value="hr" className={activeTab === 'hr' ? 'bg-blue-50 text-blue-700 border-blue-300 font-medium' : ''}>People & Culture</TabsTab>
      </TabsList>

      <TabsPanel value="sales">
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Content</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Quota attainment and revenue metrics (by team/rep)</li>
              <li>Win/loss analysis (key deals and reasons)</li>
              <li>Sales-cycle trends (deal velocity, ACV, conversion rates)</li>
              <li>Pipeline health (coverage ratio, deal stages, risks)</li>
              <li>Forecast for next quarter (confidence level, high-priority deals)</li>
              <li>Expansion & renewal opportunities (with CS / AM)</li>
              <li>Deal-execution strategy (closing priorities)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Participants</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Sales Leadership (VP/Director, CRO)</li>
              <li>Sales Managers</li>
              <li>Account Executives</li>
              <li>Sales Ops / RevOps</li>
              <li>
                <em>Optional:</em> Marketing, Product, CS leads
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Outcome</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Shared view of last quarter vs. targets</li>
              <li>Pipeline health assessment with actions</li>
              <li>Accurate forecast with prioritized deals</li>
            </ul>
          </div>
        </div>
      </TabsPanel>

      <TabsPanel value="cs">
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Content</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>High-level recap of key accounts</li>
              <li>Upsell / cross-sell pipeline (opps & forecast)</li>
              <li>Account segmentation (prime for expansion)</li>
              <li>Renewal projections & commercial discussions</li>
              <li>At-risk accounts (red flags, escalations, mitigation)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Participants</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>CS Leadership (VP/Director, CRO/CCO)</li>
              <li>Customer Success Managers</li>
              <li>Account Managers</li>
              <li>Sales / RevOps leadership</li>
              <li>Support / Technical Account Mgrs</li>
              <li>
                <em>Optional:</em> Product, Marketing
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Outcome</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Clear list of at-risk customers & action plans</li>
              <li>Identified upsell/cross-sell opportunities</li>
              <li>Customer-feedback loop to Product</li>
              <li>Owners & deadlines for each action</li>
            </ul>
          </div>
        </div>
      </TabsPanel>

      <TabsPanel value="marketing">
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Content</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Campaign performance vs. targets (MQL, SQL, CPL, CAC)</li>
              <li>Marketing-sourced pipeline & revenue attribution</li>
              <li>Key programs last quarter (events, ABM, content)</li>
              <li>Brand-awareness & share-of-voice metrics</li>
              <li>Market & competitive insight recap</li>
              <li>Launch calendar & enablement plan for next quarter</li>
              <li>Budget utilisation & ROI by channel</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Participants</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>CMO / VP Marketing</li>
              <li>Demand Gen Lead</li>
              <li>Product-Marketing Manager</li>
              <li>Brand / Communications Lead</li>
              <li>Content / Social Lead</li>
              <li>
                <em>Optional:</em> Sales Ops, Product, CS
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Outcome</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Agreement on marketing-sourced pipeline goals</li>
              <li>Alignment on upcoming launches & sales-enablement assets</li>
              <li>Decisions on budget shifts & resourcing</li>
              <li>Competitive insights shared with Sales & Product</li>
            </ul>
          </div>
        </div>
      </TabsPanel>

      <TabsPanel value="product">
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Content</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Roadmap delivery status (committed vs. shipped)</li>
              <li>Usage & adoption metrics for recent releases</li>
              <li>Customer-feedback themes & NPS drivers</li>
              <li>Roadmap for next quarter (epics, timing, risks)</li>
              <li>Competitive differentiation & positioning updates</li>
              <li>Experiments / beta programmes & success criteria</li>
              <li>Resource constraints or trade-off requests</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Participants</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>CPO / Head of Product</li>
              <li>Product Managers</li>
              <li>UX / Research Lead</li>
              <li>Engineering Lead</li>
              <li>Representative from CS or Sales</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Outcome</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Cross-team alignment on priority features & dates</li>
              <li>Clear go-to-market dependencies (marketing, enablement)</li>
              <li>Decisions on trade-offs or de-scoping</li>
              <li>Feedback-loop owners & due dates</li>
            </ul>
          </div>
        </div>
      </TabsPanel>

      <TabsPanel value="finance">
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Content</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Actuals vs. budget (revenue, GM, OPEX, EBITDA)</li>
              <li>Cash-flow & runway analysis</li>
              <li>CAC, LTV, payback-period trends</li>
              <li>Forecast scenarios for next quarter / FY</li>
              <li>Cap-ex plans or funding requirements</li>
              <li>Variance drivers & mitigation proposals</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Participants</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>CFO / VP Finance</li>
              <li>FP&A Analysts</li>
              <li>Accounting Lead</li>
              <li>CEO, CRO, COO</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Outcome</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Confirmation of financial health & targets</li>
              <li>Approved budget or headcount adjustments</li>
              <li>Alignment on cost controls / new investments</li>
              <li>Agreed financial KPIs to monitor</li>
            </ul>
          </div>
        </div>
      </TabsPanel>

      <TabsPanel value="ops">
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Content</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Operational KPIs (on-time delivery, cycle time, capacity)</li>
              <li>Implementation / onboarding backlog & TTV metrics</li>
              <li>Support SLAs, ticket volume & resolution trends</li>
              <li>Quality & CSAT / NPS for services</li>
              <li>Process-improvement wins & pipeline</li>
              <li>Risk log (supplier, compliance, infrastructure)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Participants</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>COO / Head of Operations</li>
              <li>Implementation / Professional-Services Lead</li>
              <li>Support / Customer-Care Manager</li>
              <li>QA / Compliance Lead</li>
              <li>
                <em>Optional:</em> Product, CS
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Outcome</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Plans to clear operational bottlenecks or SLA risks</li>
              <li>Resource-scaling or tooling decisions</li>
              <li>Alignment on process-improvement road-map</li>
            </ul>
          </div>
        </div>
      </TabsPanel>

      <TabsPanel value="hr">
        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Content</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Headcount vs. plan by function</li>
              <li>Hiring pipeline & critical open roles</li>
              <li>Attrition & retention metrics (voluntary / involuntary)</li>
              <li>Engagement / pulse-survey highlights</li>
              <li>DEI dashboard & initiatives progress</li>
              <li>Performance-cycle & compensation review timeline</li>
              <li>L&D programme uptake & future roll-outs</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Participants</h3>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>CHRO / Head of People</li>
              <li>Talent Acquisition Lead</li>
              <li>HRBPs</li>
              <li>Department Heads</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold text-zinc-900">Outcome</h3>
            <ul className="mt-2 list-disc pl-6 text-zinc-700">
              <li>Prioritised hiring plan & timeline</li>
              <li>Retention & engagement action items</li>
              <li>Alignment on org-design or policy updates</li>
            </ul>
          </div>
        </div>
      </TabsPanel>
    </Tabs>
  )
}