import SectionHeading from './SectionHeading'
import { Table } from '@mantine/core'

export default function PostQBR() {
  return (
    <section id="post-qbr" className="scroll-mt-20">
      <SectionHeading>Post-QBR Follow-up</SectionHeading>
      <div className="mt-6 py-4">
        <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">
          A QBR only matters if the decisions you just made actually get done. Use the checklist and
          timetable below to convert insights into measurable impact.
        </p>

        <div className="space-y-12">
          {/* 0-24 Hours Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              0 – 24 Hours ⏱ — &quot;Golden Day&quot; Deliverables
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>Deliverable</th>
                    <th>Owner</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong style={{ color: '#1c7ed6' }}>Executive recap (1-pager)</strong></td>
                    <td>CRO / RevOps</td>
                    <td>
                      • Traffic-light view of goals vs actuals
                      <br />• Top 3 wins, Top 3 gaps, Top 3 risks
                    </td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#40c057' }}>Action-item tracker</strong></td>
                    <td>RevOps</td>
                    <td>
                      • Spreadsheet or Asana board
                      <br />• Columns: Owner, Due-date, Success-metric, Status
                    </td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#fd7e14' }}>QBR deck + recording</strong></td>
                    <td>EA / IT</td>
                    <td>
                      • Slide PDF, full video link, chat log
                      <br />• Upload to shared drive + Slack #qbr
                    </td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#ae3ec9' }}>Parking-lot log</strong></td>
                    <td>Facilitator</td>
                    <td>
                      • Questions/out-of-scope topics parked during meeting
                      <br />• Assign follow-up owners
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
              Send the package to <strong>all invitees + key absentees</strong> within 24 hours.
            </p>
          </div>

          {/* 1-5 Days Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              1 – 5 Days 🏃 — Action Kick-Off
            </h3>
            <div className="space-y-6">
              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  1. Convert items to work streams
                </h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Owners break big actions into tasks/epics in the team&apos;s system of record (Asana,
                    Jira, Salesforce Success Plans).
                  </li>
                  <li>
                    Tag each with the label{' '}
                    <strong>
                      &quot;QBR-Q{`n`}-FY{`year`}&quot;
                    </strong>{' '}
                    for easy filtering.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  2. Resource confirmation
                </h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Finance & HR approve new headcount, budget shifts, tooling purchases scoped in the QBR.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  3. Add to OKRs / scorecards
                </h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Department heads include QBR actions in the next OKR update; RevOps maps them to lead KPI dashboards.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  4. Kick-off huddles
                </h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Each team hosts a 15-minute stand-up to brief ICs on new commitments and clarify expectations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ongoing Cadence Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Ongoing Cadence
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>Frequency</th>
                    <th>Ritual</th>
                    <th>Purpose</th>
                    <th>Facilitator</th>
                    <th>Tool</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Weekly</strong></td>
                    <td>Slack digest &quot;QBR Pulse&quot;</td>
                    <td>% actions on-track / at-risk; blockers flagged</td>
                    <td>RevOps bot</td>
                    <td>Slack + Asana API</td>
                  </tr>
                  <tr>
                    <td><strong>Bi-weekly</strong></td>
                    <td>30-min cross-functional sync</td>
                    <td>Resolve inter-team dependencies; escalate resource issues</td>
                    <td>CRO</td>
                    <td>Zoom</td>
                  </tr>
                  <tr>
                    <td><strong>Mid-quarter (≈ Day 45)</strong></td>
                    <td>Mini-QBR</td>
                    <td>Re-check KPIs, adjust forecasts, reprioritise if market shifts</td>
                    <td>CRO & ELT</td>
                    <td>Same deck template</td>
                  </tr>
                  <tr>
                    <td><strong>Quarter-end</strong></td>
                    <td>Retro survey (5 Qs)</td>
                    <td>How useful was the QBR? What to change?</td>
                    <td>People Ops</td>
                    <td>Typeform / CultureAmp</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          {/* Accountability Dashboard Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Accountability Dashboard
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>Metric</th>
                    <th>Target</th>
                    <th>Reported In</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Action items completed on or before due date</td>
                    <td><strong>≥ 90 %</strong></td>
                    <td>Slack &quot;Pulse&quot; & QBR deck next quarter</td>
                  </tr>
                  <tr>
                    <td>% Actions with quantified success metric</td>
                    <td><strong>100 %</strong></td>
                    <td>Action tracker</td>
                  </tr>
                  <tr>
                    <td># Blockers unresolved &gt; 14 days</td>
                    <td><strong>&lt; 3</strong></td>
                    <td>RevOps risk log</td>
                  </tr>
                  <tr>
                    <td>QBR NPS (use a 1-10 survey)</td>
                    <td><strong>&gt; 8</strong></td>
                    <td>Retro survey</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          {/* Continuous-Improvement Loop Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Continuous-Improvement Loop
            </h3>
            <div className="space-y-6">
              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  1. Process retro (Day 7)
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  30 min meeting with facilitator + 1 rep from each function.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
                  <li>What worked / what sucked / one change for next time.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  2. Template refresh
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Update slide master & data-pull SOP based on retro.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  3. Data-quality sprint
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  If errors surfaced, RevOps schedules a sprint with data owners before the next quarter&apos;s freeze date.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  4. Recognition
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  CRO highlights &quot;Fastest Action Closed&quot; or &quot;Biggest Customer Impact&quot; in the Pulse digest to reinforce accountability culture.
                </p>
              </div>
            </div>
          </div>

          {/* Tool Stack Reference Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Tool Stack Reference
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>Need</th>
                    <th>Recommended Tool</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Task tracking & dependencies</td>
                    <td><strong>Asana</strong> (project &quot;QBR Actions Q3 FY25&quot;)</td>
                    <td>Timeline view + Slack integration</td>
                  </tr>
                  <tr>
                    <td>KPI auto-refresh</td>
                    <td><strong>Looker / Power BI</strong></td>
                    <td>Embed live charts in Slack digest</td>
                  </tr>
                  <tr>
                    <td>Slack reminders</td>
                    <td><strong>Polly or Workflow Builder</strong></td>
                    <td>Nudges owners 48 h before due dates</td>
                  </tr>
                  <tr>
                    <td>Meeting capture</td>
                    <td><strong>Grain / Gong</strong></td>
                    <td>Searchable transcript & highlight reels</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          {/* Quick-Start Action Tracker Template Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Quick-Start &quot;Action Tracker&quot; Template
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>ID</th>
                    <th>Action Item</th>
                    <th>Owner</th>
                    <th>Dept</th>
                    <th>Due</th>
                    <th>Success Metric</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>25-Q3-S-01</td>
                    <td>Pilot new discovery call script with top-quartile reps</td>
                    <td>Lisa M.</td>
                    <td>Sales</td>
                    <td>May 30</td>
                    <td>≥ 15 % lift in opp-to-SQL</td>
                    <td>🟡 At risk</td>
                  </tr>
                  <tr>
                    <td>25-Q3-M-02</td>
                    <td>Launch ABM campaign for Industrials segment</td>
                    <td>Ravi K.</td>
                    <td>Marketing</td>
                    <td>Jun 15</td>
                    <td>50 SQLs & $2 M pipeline</td>
                    <td>🟢 On track</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
              (Colour codes: 🟢 On Track • 🟡 At Risk • 🔴 Off Track • ✅ Done)
            </p>
          </div>

          {/* Metrics Palette Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Metrics Palette
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Below is a &quot;metrics palette&quot; your RevOps / FP&A team can pull from when building the QBR scorecard.
              Everything is grouped by <strong>owning function</strong>, shows a <strong>quick‐formula</strong>, and flags <strong>why the board cares</strong>.
              Pick ≤ 3-4 headline metrics per team for the live meeting; park the rest in the appendix.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}