import SectionHeading from './SectionHeading'

export default function BestPractices() {
  return (
    <section id="best-practices" className="scroll-mt-20">
      <SectionHeading>Best Practices</SectionHeading>
      <div className="mt-6 py-4 space-y-8">
        <p className="text-lg text-zinc-700">
          Turning a QBR into a competitive weapon with proven best practices.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">Pillar</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">What &ldquo;Great&rdquo; Looks Like</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">Quick Tactics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900">1. Data-Driven Storytelling</td>
                <td className="px-6 py-4 text-sm text-zinc-700">Narrative links cause → effect → decision in ≤ 15 slides.</td>
                <td className="px-6 py-4 text-sm text-zinc-700">
                  • Start with the &ldquo;movie trailer&rdquo; slide (goals vs. reality).<br />
                  • Use 4-quarter rolling charts—avoid single-point snapshots.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900">2. Customer-Centric Lens</td>
                <td className="px-6 py-4 text-sm text-zinc-700">Success and failure are framed in terms of customer impact, not just internal targets.</td>
                <td className="px-6 py-4 text-sm text-zinc-700">
                  • Every metric answer the question: &ldquo;How does this help or hurt the customer?&rdquo;<br />
                  • Include a short audio or video clip from a recent customer interview.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900">3. Action Orientation</td>
                <td className="px-6 py-4 text-sm text-zinc-700">No slide is discussion-only; each one finishes with a next step.</td>
                <td className="px-6 py-4 text-sm text-zinc-700">
                  • &ldquo;Decision / Owner / Date&rdquo; footer on every slide.<br />
                  • Live Asana board projected during the meeting.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900">4. Cross-Functional Alignment</td>
                <td className="px-6 py-4 text-sm text-zinc-700">Sales, CS, Marketing, Product speak from one source of truth and share dependencies.</td>
                <td className="px-6 py-4 text-sm text-zinc-700">
                  • Pre-QBR huddle with function heads to resolve data disputes.<br />
                  • RAG-status matrix (rows = teams, cols = shared projects).
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900">5. Rigor & Accountability</td>
                <td className="px-6 py-4 text-sm text-zinc-700">Commitments carry real weight and are inspected weekly.</td>
                <td className="px-6 py-4 text-sm text-zinc-700">
                  • Friday Slack digest auto-pulls status from Asana.<br />
                  • CRO opens the next QBR by grading last quarter&apos;s action completion %.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900">6. High Engagement</td>
                <td className="px-6 py-4 text-sm text-zinc-700">Attendees ask questions, debate trade-offs, and stay off email.</td>
                <td className="px-6 py-4 text-sm text-zinc-700">
                  • Ice-breaker &ldquo;prediction poll&rdquo; at the start (e.g., &ldquo;Where will we land NRR?&rdquo;).<br />
                  • Rotate section presenters—don&apos;t let one exec monologue all 3 h.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900">7. Respect for Time</td>
                <td className="px-6 py-4 text-sm text-zinc-700">Meeting starts/ends on schedule; discussions that exceed timebox go to a spin-off.</td>
                <td className="px-6 py-4 text-sm text-zinc-700">
                  • Visible countdown timer.<br />
                  • &ldquo;Parking Lot&rdquo; slide for tangents; assign owner to follow up offline.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-zinc-900 mb-6">Extra Guidance for CROs</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">CRO Imperatives</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">How to Nail Them</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900">Craft a Data-backed Narrative</td>
                  <td className="px-6 py-4 text-sm text-zinc-700">Use the ARC arc: Answer the board&apos;s top question → Reveal supporting data → Call for decision.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900">Own the Good and the Bad</td>
                  <td className="px-6 py-4 text-sm text-zinc-700">Display miss metrics side-by-side with corrective plan; positions you as a problem-solver, not excuse-maker.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900">Tie Metrics to Money</td>
                  <td className="px-6 py-4 text-sm text-zinc-700">Translate every KPI into revenue impact (e.g., &ldquo;1-point NRR lift = +$250 k ARR next quarter&rdquo;).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900">Keep the Room Focused</td>
                  <td className="px-6 py-4 text-sm text-zinc-700">Pre-wire any controversial topics with individual execs so the live debate is constructive, not chaotic.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-900">Close with Clarity</td>
                  <td className="px-6 py-4 text-sm text-zinc-700">Verbally restate the three most critical actions, name the owners, and confirm deadlines before anyone leaves.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-lg text-zinc-700 mt-8">
          Embed these practices and the QBR ceases to be &ldquo;just another meeting.&rdquo; It becomes the operating rhythm that aligns strategy, exposes risk early, and powers continuous revenue growth.
        </p>
      </div>
    </section>
  )
}