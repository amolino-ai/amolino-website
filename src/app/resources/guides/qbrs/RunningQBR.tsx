import SectionHeading from './SectionHeading'

export default function RunningQBR() {
  return (
    <section id="running-qbr" className="scroll-mt-20">
      <SectionHeading>Running the QBR</SectionHeading>
      <div className="mt-6 py-4">
        <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">
          Below is a <strong>3-hour (180-minute)</strong> run-of-show that fits every major function, builds
          in <strong>15 minutes of breaks</strong>, and still leaves{' '}
          <strong>20 minutes of protected &quot;executive questions / Q&A&quot;</strong> time.
        </p>

        <div className="mb-8 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <p className="text-zinc-700 dark:text-zinc-300">
            <strong>Pre-work (sent 48 h prior)</strong> → All teams circulate slide decks + scorecards so
            the live meeting is discussion-first, not read-through.
          </p>
        </div>

        <div className="mb-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Agenda Block
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Owner(s)
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Cumulative
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  Welcome, objectives, ground-rules
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">CRO (host)</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <strong>5 min</strong>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">5</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  Company-wide KPI snapshot (revenue, cash, NRR, headline wins / misses)
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">Finance + RevOps</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <strong>10 min</strong>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">15</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100" colSpan={4}>
                  <strong>Functional scorecards</strong>
                  <br />
                  <span className="text-sm font-normal text-zinc-700 dark:text-zinc-300">
                    (3–4 slides each: &quot;What happened, why, what&apos;s next&quot;)
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">- Sales</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">VP Sales</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">20</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300"></td>
              </tr>
              {/* More functional departments would be listed here */}
              <tr>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">Break 1</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300"></td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <strong>10 min</strong>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">103</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  Strategic topics & market shifts (top 2-3 issues surfaced in pre-reads)
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  Exec panel (CRO moderates)
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <strong>25 min</strong>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">128</td>
              </tr>
              {/* More agenda items would be listed here */}
              <tr>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  Close-out & next-steps recap
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">CRO</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <strong>2 min</strong>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <strong>180</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Why this structure works
            </h3>
            <ol className="list-decimal space-y-4 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>Pre-reads compress presentation time</strong> — everyone arrives primed, so each
                team&apos;s slot is discussion-heavy.
              </li>
              <li>
                <strong>Two short breaks</strong> keep energy up without extending the session beyond half a
                day.
              </li>
              <li>
                <strong>Executive flex block</strong> absorbs overruns or late-breaking board questions
                without cannibalising action-planning time.
              </li>
              <li>
                <strong>Clear timers:</strong> each functional leader gets a fixed window (indicated above).
                A facilitator flashes ⚠️ at T-2 min and at time-up.
              </li>
              <li>
                <strong>Live action-log:</strong> items are captured in real time and displayed on-screen,
                so the meeting ends with an agreed owner + deadline list.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Tips to stay on schedule
            </h3>
            <div className="mb-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tip</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">How</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">Single source deck</td>
                    <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">RevOps merges all slides into one deck to avoid screen-share delays.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">Slide limit</td>
                    <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">Max 4 slides per team (headline metrics, wins/losses, issues, next-quarter plan).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">Parking-lot doc</td>
                    <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">Off-agenda tangents go into a live doc for later follow-up.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">Post-QBR comms</td>
                    <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">CRO circulates deck + action log within 2 hours; RevOps tracks progress in Slack/Asana.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-8 text-zinc-700 dark:text-zinc-300">
              Use this agenda as a template: adjust individual slots ±2 minutes if one function needs extra air-time, but keep the <strong>flex + break padding</strong> intact—those are the pressure-valves that keep a 180-minute QBR from spiralling into an all-day event.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Attendee Management
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>Limit internal attendees to key stakeholders for transparency.</li>
              <li>Be prepared for unexpected executive participation.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Sample Scripts
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium text-zinc-900 dark:text-zinc-100">Opening:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  &ldquo;Good morning, everyone. Thank you for joining today&apos;s Q1 Review. I&apos;m [Name], CRO, and we&apos;ll cover our performance, challenges, and Q2 plan. We hit 95% of our target, with strong growth but some hurdles. Please ask questions anytime.&rdquo;
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-zinc-900 dark:text-zinc-100">Performance Review:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  &ldquo;In Q1, we achieved $15.2M in revenue, 12% up from last year. Key wins included a new product launch, but enterprise deals slipped due to procurement delays, which we&apos;re addressing with earlier executive engagement.&rdquo;
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-zinc-900 dark:text-zinc-100">Closing:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  &ldquo;To summarize, Q1 was 95% of target; Q2 aims for $17.5M with pipeline and upsell focus. Thank you for your input. I&apos;ll send notes and next steps within 24 hours.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}