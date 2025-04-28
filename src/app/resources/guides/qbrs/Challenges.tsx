import SectionHeading from './SectionHeading'

export default function AdditionalTips() {
  return (
    <section id="challenges" className="scroll-mt-20">
      <SectionHeading>Challenges and Solutions</SectionHeading>
      <div className="mt-6 py-4">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          What Usually Goes Wrong and How to Fix It
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                <th className="border border-zinc-300 dark:border-zinc-700 p-4 text-left font-semibold">Challenge</th>
                <th className="border border-zinc-300 dark:border-zinc-700 p-4 text-left font-semibold">Typical Symptoms / Root Cause</th>
                <th className="border border-zinc-300 dark:border-zinc-700 p-4 text-left font-semibold">High-Impact Solution</th>
                <th className="border border-zinc-300 dark:border-zinc-700 p-4 text-left font-semibold">Who Owns It</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">1. Vague objectives</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Teams bring slide-dumps that don&apos;t ladder up to a goal.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Open the deck with a single slide labelled &quot;QBR Success = …&quot;.<br/>
                  • Limit the agenda to 3 business questions (e.g., &quot;Are we on plan?&quot; &quot;Where will we invest?&quot; &quot;What might break?&quot;).
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">CRO + RevOps</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">2. Inconsistent data</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Different numbers for the same metric; arguments over definitions.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Freeze data 10 days before QBR.<br/>
                  • Publish a &quot;data dictionary&quot; with metric formulas.<br/>
                  • Give RevOps veto power on any last-minute number changes.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">RevOps</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">3. Metric overload</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">60-slide decks; eyes glaze over.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • &quot;Rule of Four&quot;: ≤ 4 headline metrics per function.<br/>
                  • Put everything else in the appendix and circulate as pre-read.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Every function lead</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">4. Sales ↔ CS mis-alignment</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">CS surprises Sales with churn; Sales blindsides CS with new promises.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Weekly Sales-CS stand-up to review at-risk and expansion logos.<br/>
                  • Shared account health dashboard in the CRM.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">VP Sales & VP CS</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">5. Few actionable insights</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Meeting ends with &quot;great conversation&quot; but no next steps.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • For every discussion slide add &quot;So what?&quot; + &quot;Now what?&quot; boxes.<br/>
                  • Live scribe captures actions with owner + deadline before moving on.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Facilitator</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">6. Low engagement</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Cameras off, minimal questions.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Send a 5-question pre-read poll (&quot;What topic do you most want to debate?&quot;).<br/>
                  • Use a timer and call on people to comment (round-robin).
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">CRO</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">7. Weak follow-up</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Same issues re-appear next quarter.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Action items imported into Asana with the tag &quot;QBR-Actions-Qx&quot;.<br/>
                  • 15-min &quot;Pulse&quot; Slack bot every Friday: % on track / at risk / done.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">RevOps</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">8. Communication silos</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Product learns about customer churn in the QBR, not before.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Create a cross-functional Slack channel #deal-war-room.<br/>
                  • Auto-push renewal/churn events from CS platform to channel.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Product + CS</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">9. Ignoring customer voice</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">NPS dips but never discussed.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Add &quot;Voice of Customer&quot; slide to every deck (trend + verbatims).<br/>
                  • Invite a rotating CSM to present one customer story.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">VP CS</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">10. Static strategy</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Market shifts yet targets stay the same.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Mid-quarter &quot;mini-QBR&quot; to revisit assumptions.<br/>
                  • Run &quot;What would need to be true?&quot; scenario exercise when KPIs flash red.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">CRO + FP&A</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">11. Over-run agenda</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Meeting spills past calendar block; execs leave early.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Allocate 5–10 % buffer plus a 20-min &quot;exec flex&quot; block (already built into your 180-min agenda).<br/>
                  • Yellow card at T-2 min, red at time-up.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Facilitator</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <td className="border border-zinc-300 dark:border-zinc-700 p-4 font-semibold">12. Owner ambiguity</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">Action reads &quot;Improve onboarding flow&quot; with no name beside it.</td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">
                  • Use the RACI grid on the action tracker.<br/>
                  • CRO verbally reconfirms owner before closing the meeting.
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 p-4">CRO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}