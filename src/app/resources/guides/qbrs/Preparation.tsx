import SectionHeading from './SectionHeading'
import { Table } from '@mantine/core'

export default function Preparation() {
  return (
    <section id="preparation" className="scroll-mt-20">
      <SectionHeading>Preparation for QBRs</SectionHeading>
      <div className="mt-6 py-4">
        <p className="mb-8 text-lg text-zinc-700">
          Well-run QBRs start weeks before anyone joins a Zoom. Use the framework below to make sure every
          team shows up ready to debate insights—not scramble for numbers.
        </p>

        <div className="space-y-12">
          {/* 1. Clarify Purpose, Audience & Success Criteria */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              1. Clarify Purpose, Audience & Success Criteria
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>Step</th>
                    <th>What to decide</th>
                    <th>Tips</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong style={{ color: '#1c7ed6' }}>Define the &quot;why&quot;</strong></td>
                    <td>
                      • Revenue acceleration?
                      <br />
                      • Retention?
                      <br />• Operating efficiency?
                    </td>
                    <td>Pick 2–3 focus areas; parking-lot everything else.</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#40c057' }}>Map the audience</strong></td>
                    <td>Board / ELT → strategic; Function heads → operational; Reps & ICs → tactical</td>
                    <td>One deck, but call-out slides (e.g., &quot;Board view&quot;).</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#fd7e14' }}>Set pass/fail test</strong></td>
                    <td>e.g., &quot;Leave with ≤ 10 open questions and a signed-off action log.&quot;</td>
                    <td>Write it on slide 1 and revisit at close-out.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          {/* 2. Data & Insight Pipeline */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              2. Data & Insight Pipeline
            </h3>
            <div className="space-y-6">
              <div className="rounded-lg border border-zinc-200 p-6">
                <h4 className="mb-4 text-lg font-medium text-zinc-900">
                  1. Single source of truth
                </h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>
                    Lock which dashboards or reports count as canonical (CRM, finance BI, CS platform).
                  </li>
                  <li>
                    Freeze the data refresh cut-off at <strong>T-10 days</strong> to avoid last-minute
                    deltas.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6">
                <h4 className="mb-4 text-lg font-medium text-zinc-900">
                  2. Data hygiene sweep (T-10 → T-7)
                </h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>
                    RevOps emails each team a &quot;dirty data&quot; report (e.g., open deals past close
                    date, missing ARR fields).
                  </li>
                  <li>Owners have 48 h to clean or comment.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6">
                <h4 className="mb-4 text-lg font-medium text-zinc-900">
                  3. Core data packet (owned by RevOps / FP&A)
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-zinc-900">Sales:</h5>
                    <p className="text-zinc-700">
                      ARR, ACV, win rate, cycle length, pipeline coverage.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-zinc-900">CS:</h5>
                    <p className="text-zinc-700">
                      NRR, GRR, logo churn, at-risk ARR, NPS themes.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-zinc-900">Marketing:</h5>
                    <p className="text-zinc-700">
                      MQL → SQL conversion, pipeline $ sourced, CAC, CAC payback.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-zinc-900">Product:</h5>
                    <p className="text-zinc-700">
                      Release velocity, adoption %, uptime, P0 bug count.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-zinc-900">Finance:</h5>
                    <p className="text-zinc-700">
                      Cash burn, EBITDA variance, forecast scenarios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-200 p-6">
                <h4 className="mb-4 text-lg font-medium text-zinc-900">
                  4. Insight synthesis
                </h4>
                <p className="text-zinc-700">
                  Analysts attach a one-pager for each chart: &quot;So what? / Why? / Now what?&quot;
                </p>
              </div>
            </div>
          </div>

          {/* 3. Narrative & Slide-building Standards */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              3. Narrative & Slide-building Standards
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>Slide #</th>
                    <th>Section</th>
                    <th>Must include</th>
                    <th>Owner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><strong style={{ color: '#1c7ed6' }}>Exec Summary</strong></td>
                    <td>Traffic-light table of goals vs. actuals; top 3 headlines</td>
                    <td>CRO</td>
                  </tr>
                  <tr>
                    <td>2–4</td>
                    <td><strong style={{ color: '#40c057' }}>Scorecard</strong></td>
                    <td>Metric trends + commentary</td>
                    <td>Each function</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td><strong style={{ color: '#fd7e14' }}>Root-cause Deep Dive</strong></td>
                    <td>Fishbone or 5 Whys on the biggest miss</td>
                    <td>Function + Analyst</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><strong style={{ color: '#ae3ec9' }}>Strategic Bets</strong></td>
                    <td>Next-quarter OKRs, resource asks, success metrics</td>
                    <td>Function head</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td><strong style={{ color: '#e03131' }}>Risks & Mitigations</strong></td>
                    <td>Red/amber list with owner & due date</td>
                    <td>Function head</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><strong style={{ color: '#1c7ed6' }}>Support Needed</strong></td>
                    <td>Decisions required from ELT/Board</td>
                    <td>Function head</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="mt-6 rounded-lg border border-zinc-200 p-6">
              <h4 className="mb-4 text-lg font-medium text-zinc-900">
                Design guard-rails
              </h4>
              <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                <li>16:9, dark-on-light, max 3 colours.</li>
                <li>One big chart per slide; commentary in the notes pane.</li>
                <li>
                  Story arc: <em>Past → Present → Future → Ask.</em>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Stakeholder Engagement Plan */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              4. Stakeholder Engagement Plan
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>When</th>
                    <th>Touchpoint</th>
                    <th>Participants</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong style={{ color: '#1c7ed6' }}>T-14 days</strong></td>
                    <td>Kick-off call</td>
                    <td>RevOps + all function analysts</td>
                    <td>Align on metrics, cut-off dates, template.</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#40c057' }}>T-7 days</strong></td>
                    <td>Draft deck review</td>
                    <td>Function heads + CRO</td>
                    <td>Pressure-test insights, kill fluff.</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#fd7e14' }}>T-5 days</strong></td>
                    <td>Dry run #1</td>
                    <td>Function teams only</td>
                    <td>Practice timing; peer critique.</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#ae3ec9' }}>T-3 days</strong></td>
                    <td>Dry run #2 (executive)</td>
                    <td>CRO, CFO, CEO</td>
                    <td>Polish narrative; prep tough questions.</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#e03131' }}>T-2 days</strong></td>
                    <td>Pre-read sent</td>
                    <td>Whole invite list</td>
                    <td>Mandate &quot;read before meeting&quot;.</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#1c7ed6' }}>T+0 days</strong></td>
                    <td>QBR live</td>
                    <td>All</td>
                    <td>Decision-making.</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#40c057' }}>T+1 day</strong></td>
                    <td>Action-item tracker shared</td>
                    <td>RevOps</td>
                    <td>Ensure accountability.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          {/* 5. Anticipate Questions & Objections */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              5. Anticipate Questions & Objections
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-6">
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>
                    <strong>Financial hawks:</strong> Variance vs. budget? Cash impact?
                  </li>
                  <li>
                    <strong>Product skeptics:</strong> Why did feature X slip? Customer impact quantified?
                  </li>
                  <li>
                    <strong>Board members:</strong> How does this quarter shift long-term strategy?
                  </li>
                </ul>
                <p className="mt-4 text-zinc-700">
                  Prep <strong>FAQ flashcards</strong> for each likely hot seat, including backup data
                  slides.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Logistics & Tech Check */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              6. Logistics & Tech Check
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>Item</th>
                    <th>Owner</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong style={{ color: '#1c7ed6' }}>Master deck finalised & in shared drive</strong></td>
                    <td>RevOps</td>
                    <td>T-1 day</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#40c057' }}>Zoom / room booked, A/V tested</strong></td>
                    <td>EA / IT</td>
                    <td>T-1 day</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#fd7e14' }}>Timer & speaker list printed</strong></td>
                    <td>Facilitator</td>
                    <td>T-1 day</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#ae3ec9' }}>Action-log spreadsheet pre-formatted</strong></td>
                    <td>RevOps</td>
                    <td>T-1 day</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#e03131' }}>Coffee & snacks (if in-person)</strong></td>
                    <td>Office Ops</td>
                    <td>T-1 day</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          {/* 7. Pre-QBR Countdown */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              7. Pre-QBR Countdown (At-a-Glance)
            </h3>
            <div className="rounded-lg border border-zinc-200 p-6">
              <pre className="text-sm whitespace-pre-wrap text-zinc-700">
                T-14 Kick-off + metric lock
                T-10 Data freeze / hygiene fix
                T-7 Insights drafted
                T-5 Deck v1 + peer dry run
                T-3 Exec dry run
                T-2 Pre-read out
                T-1 Tech check
                T-0 QBR live
                T+1 Action log sent
              </pre>
            </div>
          </div>

          {/* 8. Red-Flag Checklist */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              8. &quot;Red-Flag&quot; Checklist
            </h3>
            <div className="rounded-lg border border-zinc-200 p-6">
              <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                <li>
                  <strong>Slides &gt; 8 per team</strong> ⟶ scope creep.
                </li>
                <li>
                  <strong>New data sources introduced after T-7</strong> ⟶ unvetted numbers.
                </li>
                <li>
                  <strong>No owner on mitigation slide</strong> ⟶ action items die in committee.
                </li>
                <li>
                  <strong>Lack of opposing view</strong> ⟶ invite a challenger (e.g., Finance to Sales
                  section).
                </li>
              </ul>
            </div>
          </div>

          {/* 9. Success Metrics */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800">
              9. Success Metrics for the Preparation Process
            </h3>
            <div className="overflow-x-auto">
              <Table withColumnBorders withTableBorder highlightOnHover striped>
                <thead>
                  <tr style={{ backgroundColor: '#f0f7ff' }}>
                    <th>KPI</th>
                    <th>Target</th>
                    <th>How to track</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong style={{ color: '#1c7ed6' }}>Pre-read open-rate</strong></td>
                    <td>≥ 90 %</td>
                    <td>Doc analytics / link tracking</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#40c057' }}>Data-quality errors found during meeting</strong></td>
                    <td>0</td>
                    <td>Issue log</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#fd7e14' }}>QBR starts on time</strong></td>
                    <td>100 %</td>
                    <td>Facilitator report</td>
                  </tr>
                  <tr>
                    <td><strong style={{ color: '#ae3ec9' }}>Decisions documented & owner assigned</strong></td>
                    <td>100 %</td>
                    <td>Action log</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}