import SectionHeading from './SectionHeading'
import { Tabs, TabsList, TabsTab, TabsPanel } from '@mantine/core'

export default function RevOpsRole() {
  return (
    <section id="revops-role" className="scroll-mt-20">
      <SectionHeading>RevOps Role</SectionHeading>
      <div className="mt-6 py-4">
        <p className="text-lg text-zinc-700">
          Revenue Operations is the neutral, data-driven function that turns a QBR from a slide parade into
          an operating decision forum.
        </p>
        <p className="mt-4 text-lg text-zinc-700">
          Think of them as: <strong>architects before the meeting, air-traffic controllers during, and project managers afterward.</strong>
        </p>

        <Tabs defaultValue="pre-qbr" className="mt-8">
          <TabsList>
            <TabsTab value="pre-qbr">Pre-QBR</TabsTab>
            <TabsTab value="live-qbr">Live QBR</TabsTab>
            <TabsTab value="post-qbr">Post-QBR</TabsTab>
            <TabsTab value="value-stack">Value Stack</TabsTab>
            <TabsTab value="metrics">Metrics</TabsTab>
          </TabsList>

          <TabsPanel value="pre-qbr" className="mt-4">
            <h3 className="text-xl font-semibold mb-4">Pre-QBR — Architect & Data Steward</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Responsibility</th>
                    <th className="px-4 py-2 text-left">RevOps Deliverables</th>
                    <th className="px-4 py-2 text-left">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Agenda design</strong></td>
                    <td className="px-4 py-2">• Draft 180-min run-of-show aligned to CRO&apos;s goals.<br/>• Time-box each section; circulate 14 days out.</td>
                    <td className="px-4 py-2">Everyone shows up knowing the purpose & time limits.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Metric governance</strong></td>
                    <td className="px-4 py-2">• Data dictionary (formulas, data source, refresh cadence).<br/>• KPI target sheet locked 10 days out.</td>
                    <td className="px-4 py-2">Ends &quot;my slide says…&quot; metric wars.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Data extraction & QA</strong></td>
                    <td className="px-4 py-2">• Sync CRM, CS, Finance BI to a master Looker / Power BI model.<br/>• Run data-hygiene scripts (close dates, missing fields).</td>
                    <td className="px-4 py-2">Single source of truth; red-flags fixed before execs see them.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Analytic insight packs</strong></td>
                    <td className="px-4 py-2">• Win/loss, segmentation, cohort, funnel leakage analyses.<br/>• Commentary page: &quot;So What → Why → Now What.&quot;</td>
                    <td className="px-4 py-2">Leaders walk in ready to debate actions, not find numbers.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><strong>Deck production</strong></td>
                    <td className="px-4 py-2">• Templated slide master with traffic-light KPI tables.<br/>• 4-quarter trend charts auto-refreshed.</td>
                    <td className="px-4 py-2">Consistent, board-ready visuals; no last-minute formatting drama.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsPanel>

          <TabsPanel value="live-qbr" className="mt-4">
            <h3 className="text-xl font-semibold mb-4">Live QBR — Air-Traffic Controller & Truth-Teller</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Responsibility</th>
                    <th className="px-4 py-2 text-left">How RevOps Executes</th>
                    <th className="px-4 py-2 text-left">Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Data &quot;voice of truth&quot;</strong></td>
                    <td className="px-4 py-2">Sits beside CRO; validates any number challenged in real-time; pulls backup slide if needed.</td>
                    <td className="px-4 py-2">Keeps debate on decisions, not math disputes.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Timer / agenda police</strong></td>
                    <td className="px-4 py-2">Uses visible countdown & yellow/red cards; parks tangents in a &quot;lot.&quot;</td>
                    <td className="px-4 py-2">Meeting ends on time, execs stay engaged.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Live action logging</strong></td>
                    <td className="px-4 py-2">Types actions into Asana board projected on screen (owner, due date, KPI).</td>
                    <td className="px-4 py-2">No &quot;we&apos;ll do this later&quot; gaps; accountability starts instantly.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><strong>Scenario on-the-fly</strong></td>
                    <td className="px-4 py-2">If board asks &quot;What if churn rises 2 pts?&quot;, RevOps tweaks model and flashes result.</td>
                    <td className="px-4 py-2">Shows command of the business, speeds decision-making.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsPanel>

          <TabsPanel value="post-qbr" className="mt-4">
            <h3 className="text-xl font-semibold mb-4">Post-QBR — Project Manager & Performance Analyst</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Responsibility</th>
                    <th className="px-4 py-2 text-left">RevOps Activities</th>
                    <th className="px-4 py-2 text-left">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>&quot;Golden-Day&quot; recap</strong></td>
                    <td className="px-4 py-2">Sends deck, recording, and 1-pager summary within 24 h.</td>
                    <td className="px-4 py-2">Shared understanding; no excuses about missing info.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Action-item PMO</strong></td>
                    <td className="px-4 py-2">Converts board on-screen log into Asana/Jira epics; tags &quot;QBR-Qx-FY25&quot;; sets reminders.</td>
                    <td className="px-4 py-2">Owners can&apos;t hide; status visible in Slack digest each Friday.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>KPI telemetry</strong></td>
                    <td className="px-4 py-2">Builds &quot;QBR Pulse&quot; Looker dashboard; auto-posts progress snapshots weekly.</td>
                    <td className="px-4 py-2">Early warning of slippage; enables mid-quarter course-correct.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><strong>Continuous-improvement retro</strong></td>
                    <td className="px-4 py-2">Runs 30-min retro with presenters (what worked / what to fix).</td>
                    <td className="px-4 py-2">Each QBR gets faster and more effective.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsPanel>

          <TabsPanel value="value-stack" className="mt-4">
            <h3 className="text-xl font-semibold mb-4">RevOps Value Stack</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Layer</th>
                    <th className="px-4 py-2 text-left">Concrete Example</th>
                    <th className="px-4 py-2 text-left">Payoff</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Data & Insights</strong></td>
                    <td className="px-4 py-2">Pipeline attrition heat-map identifies deals stuck &gt;45 days in Stage 3.</td>
                    <td className="px-4 py-2">+7 pt win-rate after process tweak.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Process & Efficiency</strong></td>
                    <td className="px-4 py-2">Spot duplicate lead routing rules slowing SDR response; automate assignment.</td>
                    <td className="px-4 py-2">−20 % lead-to-meeting time, ↑ SQL conversion.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Strategic Partner</strong></td>
                    <td className="px-4 py-2">Advises CRO to shift AE time to Industrial vertical after cohort LTV analysis.</td>
                    <td className="px-4 py-2">$2 M incremental ARR from focused outreach.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><strong>Accountability Engine</strong></td>
                    <td className="px-4 py-2">Publishes action tracker scoreboard (On-Track, At-Risk, Off-Track).</td>
                    <td className="px-4 py-2">90 % of QBR actions completed by next quarter (vs. 60 % prior).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsPanel>

          <TabsPanel value="metrics" className="mt-4">
            <h3 className="text-xl font-semibold mb-4">Metrics RevOps Tracks on Itself</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">RevOps KPI</th>
                    <th className="px-4 py-2 text-left">Target</th>
                    <th className="px-4 py-2 text-left">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Data-error incidents in QBR</strong></td>
                    <td className="px-4 py-2">0</td>
                    <td className="px-4 py-2">Credibility of all numbers.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Recap-package turnaround</strong></td>
                    <td className="px-4 py-2">≤ 24 h</td>
                    <td className="px-4 py-2">Momentum from meeting to execution.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>Action completion rate by due date</strong></td>
                    <td className="px-4 py-2">≥ 90 %</td>
                    <td className="px-4 py-2">Shows follow-through discipline.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2"><strong>System-generated vs. manual reports</strong></td>
                    <td className="px-4 py-2">≥ 80 % automated</td>
                    <td className="px-4 py-2">Efficiency & reduced error surface.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2"><strong>Stakeholder NPS</strong></td>
                    <td className="px-4 py-2">≥ 8/10</td>
                    <td className="px-4 py-2">Continuous service improvement.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsPanel>
        </Tabs>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Checklist: &quot;Is RevOps Ready for QBR Day?&quot;</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Agenda locked</strong> and calendar invites updated ✔️</li>
            <li><strong>Data frozen</strong> and reconciled across CRM, CS, Finance ✔️</li>
            <li><strong>Master deck final</strong> in shared drive ✔️</li>
            <li><strong>Scenario model</strong> bookmarked for ad-hoc queries ✔️</li>
            <li><strong>Asana board pre-created</strong> with columns To-Do / In-Progress / Done ✔️</li>
            <li><strong>Countdown timer & backup laptop</strong> in the room ✔️</li>
          </ol>
        </div>

        <p className="mt-8 text-lg text-zinc-700">
          When RevOps owns these levers, the QBR evolves from quarterly reporting theater into the company&apos;s primary <strong>execution cockpit</strong>—aligning strategy, resources, and front-line reality in a single, high-impact session.
        </p>
      </div>
    </section>
  )
}