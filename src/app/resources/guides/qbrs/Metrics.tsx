import { Tabs, TabsList, TabsPanel, TabsTab, Table } from '@mantine/core'
import SectionHeading from './SectionHeading'
export default function MetricsTabs() {
  return (
    <section id="metrics" className="scroll-mt-20">
    <SectionHeading>Metrics to Track</SectionHeading>
    <div className="mt-6 py-4">
      <p className="mb-8 text-lg text-zinc-700">
        Key metrics to track for each department.
      </p>
    <Tabs defaultValue="sales" variant="outline" className="mt-8 w-full" id="metrics">
      <TabsList className="mb-6 flex flex-wrap gap-2">
        <TabsTab value="sales">Sales & Revenue Ops</TabsTab>
        <TabsTab value="cs">Customer Success</TabsTab>
        <TabsTab value="marketing">Marketing & Growth</TabsTab>
        <TabsTab value="product">Product & Engineering</TabsTab>
        <TabsTab value="finance">Finance & Efficiency</TabsTab>
        <TabsTab value="ops">Operations & Support</TabsTab>
        <TabsTab value="hr">People & Culture</TabsTab>
      </TabsList>

      {/* Sales & Revenue Ops */}
      <TabsPanel value="sales">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="overflow-x-auto">
            <Table withColumnBorders withTableBorder highlightOnHover striped>
              <thead>
                <tr style={{ backgroundColor: '#f0f7ff' }}>
                  <th>Metric</th>
                  <th>How to Calculate</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Revenue Growth</strong></td>
                  <td>(Q rev – Q-1 rev) / Q-1 rev</td>
                  <td>Overall sales trajectory</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Forecast Accuracy</strong></td>
                  <td>1 – |Forecast – Actual|/ Actual</td>
                  <td>Coaching & comp alignment</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>Quota Attainment</strong></td>
                  <td>Rep bookings / Quota</td>
                  <td>Coaching & comp alignment</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#ae3ec9' }}>Pipeline Coverage</strong></td>
                  <td>Pipeline $ / Next-Q target</td>
                  <td>Leading indicator of future miss</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#e03131' }}>Win Rate</strong></td>
                  <td>Closed-won / Total opps</td>
                  <td>Sales execution quality</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Average Deal Size</strong></td>
                  <td>Bookings / Deals</td>
                  <td>Health of ICP targeting</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Stage-to-Stage Conversion</strong></td>
                  <td>Opps advancing / Opps in prior stage</td>
                  <td>Reveals bottlenecks</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>Sales Cycle Length</strong></td>
                  <td>Days lead → close</td>
                  <td>Efficiency & cash velocity</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </TabsPanel>

      {/* Customer Success */}
      <TabsPanel value="cs">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="overflow-x-auto">
            <Table withColumnBorders withTableBorder highlightOnHover striped>
              <thead>
                <tr style={{ backgroundColor: '#f0f7ff' }}>
                  <th>Metric</th>
                  <th>How to Calculate</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Net Revenue Retention (NRR)</strong></td>
                  <td>(Start rev + Expansion – Churn) / Start rev</td>
                  <td>Golden metric for SaaS / recurring</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Gross Revenue Retention (GRR)</strong></td>
                  <td>(Start rev – Churn) / Start rev</td>
                  <td>Baseline sticky-revenue health</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>Renewal Rate</strong></td>
                  <td>Renewals / Contracts up</td>
                  <td>Predictability of recurring cash</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#ae3ec9' }}>Logo Churn</strong></td>
                  <td>Logos lost / Start logos</td>
                  <td>Market-fit signal for board</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#e03131' }}>Upsell/Cross-sell Rate</strong></td>
                  <td>Expansion $ / Start rev</td>
                  <td>CS impact on growth</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Customer Health Score</strong></td>
                  <td>Usage × Engagement × Sentiment index</td>
                  <td>Early warning system</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Time-to-First Value</strong></td>
                  <td>Days go-live → value KPI hit</td>
                  <td>Drives long-term retention</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>Support SLA Hit Rate</strong></td>
                  <td>Tickets met SLA / Tickets total</td>
                  <td>Service quality / risk to churn</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </TabsPanel>

      {/* Marketing */}
      <TabsPanel value="marketing">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="overflow-x-auto">
            <Table withColumnBorders withTableBorder highlightOnHover striped>
              <thead>
                <tr style={{ backgroundColor: '#f0f7ff' }}>
                  <th>Metric</th>
                  <th>How to Calculate</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>MQL to SQL Conversion Rate</strong></td>
                  <td>MQL / SQL</td>
                  <td>Marketing effectiveness</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Customer Acquisition Cost (CAC)</strong></td>
                  <td>Total marketing spend / New customers</td>
                  <td>Marketing ROI</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>Lifetime Value (LTV)</strong></td>
                  <td>Average revenue per customer × Customer lifespan</td>
                  <td>Long-term profitability</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#ae3ec9' }}>Marketing ROI</strong></td>
                  <td>Incremental revenue / Marketing spend</td>
                  <td>Marketing effectiveness</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </TabsPanel>

      {/* Product */}
      <TabsPanel value="product">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="overflow-x-auto">
            <Table withColumnBorders withTableBorder highlightOnHover striped>
              <thead>
                <tr style={{ backgroundColor: '#f0f7ff' }}>
                  <th>Metric</th>
                  <th>How to Calculate</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Feature Adoption Rate</strong></td>
                  <td>Users of new feature / Eligible users</td>
                  <td>Validates roadmap bets</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Monthly Active Users (MAU)</strong></td>
                  <td>Unique users in 30 days</td>
                  <td>Engagement trend</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>DAU/MAU Stickiness</strong></td>
                  <td>DAU / MAU</td>
                  <td>Habit formation proxy</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#ae3ec9' }}>Release Predictability</strong></td>
                  <td>Planned stories shipped / Committed</td>
                  <td>Delivery credibility</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#e03131' }}>Defect Escape Rate</strong></td>
                  <td>Prod bugs post-release / Total bugs</td>
                  <td>Quality + CSAT impact</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Uptime / SLA Compliance</strong></td>
                  <td>Minutes up / Total minutes</td>
                  <td>Revenue & retention risk</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </TabsPanel>

      {/* Finance */}
      <TabsPanel value="finance">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="overflow-x-auto">
            <Table withColumnBorders withTableBorder highlightOnHover striped>
              <thead>
                <tr style={{ backgroundColor: '#f0f7ff' }}>
                  <th>Metric</th>
                  <th>How to Calculate</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Gross Margin</strong></td>
                  <td>(Rev – COGS) / Rev</td>
                  <td>Unit economics health</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Burn Multiple</strong></td>
                  <td>Net burn / Net new ARR</td>
                  <td>VC-style efficiency lens</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>EBITDA Margin</strong></td>
                  <td>EBITDA / Revenue</td>
                  <td>Profitability trajectory</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#ae3ec9' }}>Revenue per Employee</strong></td>
                  <td>ARR / Headcount</td>
                  <td>Scaling leverage</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#e03131' }}>LTV:CAC Ratio</strong></td>
                  <td>LTV / CAC</td>
                  <td>Long-term value creation</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Cash Runway</strong></td>
                  <td>Cash balance / Avg monthly burn</td>
                  <td>Survival horizon</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </TabsPanel>

      {/* Operations */}
      <TabsPanel value="ops">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="overflow-x-auto">
            <Table withColumnBorders withTableBorder highlightOnHover striped>
              <thead>
                <tr style={{ backgroundColor: '#f0f7ff' }}>
                  <th>Metric</th>
                  <th>How to Calculate</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Implementation Cycle Time</strong></td>
                  <td>Days contract → go-live</td>
                  <td>Time-to-value</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>On-time Delivery %</strong></td>
                  <td>Projects on-time / Total</td>
                  <td>Customer satisfaction & cost</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>Escalation Rate</strong></td>
                  <td>Sev-1 tickets / Total tickets</td>
                  <td>Operational risk signal</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#ae3ec9' }}>Cost per Ticket</strong></td>
                  <td>Support OPEX / Tickets</td>
                  <td>Efficiency benchmark</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </TabsPanel>

      {/* HR */}
      <TabsPanel value="hr">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="overflow-x-auto">
            <Table withColumnBorders withTableBorder highlightOnHover striped>
              <thead>
                <tr style={{ backgroundColor: '#f0f7ff' }}>
                  <th>Metric</th>
                  <th>How to Calculate</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: '#1c7ed6' }}>Voluntary Turnover %</strong></td>
                  <td>Voluntary exits / Avg headcount</td>
                  <td>Talent risk</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#40c057' }}>Time-to-Hire</strong></td>
                  <td>Days req open → accept</td>
                  <td>Recruiting velocity</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#fd7e14' }}>Engagement Score</strong></td>
                  <td>Avg survey score</td>
                  <td>Productivity & retention predictor</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#ae3ec9' }}>Offer Acceptance Rate</strong></td>
                  <td>Offers accepted / Offers made</td>
                  <td>Employer brand health</td>
                </tr>
                <tr>
                  <td><strong style={{ color: '#e03131' }}>Revenue per Rep</strong></td>
                  <td>ARR / Quota-carrying reps</td>
                  <td>Benchmarks sales capacity</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </TabsPanel>
    </Tabs>
    </div>

    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-4">How to use these in the QBR</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">1. Pick the &ldquo;North Stars.&rdquo;</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Board-level: Revenue Growth, NRR, Burn Multiple, Forecast Accuracy.</li>
            <li>Department: 1–2 metrics each that ladder up to the North Stars.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">2. Traffic-light each metric.</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Green</strong> = on track or beating plan.</li>
            <li><strong>Amber</strong> = ≤ 10 % off.</li>
            <li><strong>Red</strong> = &gt; 10 % off or trending down two consecutive quarters.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">3. Show trend, not a snapshot.</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>4-quarter rolling chart → headline insight → owner → next action.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">4. Tie every action item to a metric.</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Example: &ldquo;Increase Pipeline Coverage from 2.5× to 3.0× by Q3 → Owner: VP Sales.&rdquo;</li>
          </ul>
        </div>

        <p className="text-zinc-700">
          With this menu you can assemble a lean, board-ready scorecard that surfaces the health of the business and makes every post-QBR action measurable.
        </p>
      </div>
    </div>
    </section>
  )
}