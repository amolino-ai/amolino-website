import SectionHeading from './SectionHeading'
import { Container, Title, List, Box, Text, Divider } from '@mantine/core'
import { Table, TableThead, TableTr, TableTh, TableTd, TableTbody } from '@mantine/core'

export default function AdditionalTips() {
  return (
    <section id="additional-tips" className="scroll-mt-20">
      <SectionHeading>Additional Tips & Tools — Super-charging Your QBRs</SectionHeading>
      <Container size="lg" className="mt-6 py-4">
        <Text size="lg" className="text-zinc-700  mb-8">
          Below is a grab-bag of <strong>practical add-ons</strong> you can cherry-pick to fit your culture, tech stack, and industry.
        </Text>

        <Title order={3} className="mb-4">1. Industry-Specific Advice</Title>
        <Table className="mb-8">
          <TableThead>
            <TableTr>
              <TableTh>Sector</TableTh>
              <TableTh>Must-Watch Metrics</TableTh>
              <TableTh>Extra Prep Tips</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd><strong>SaaS / Subscription</strong></TableTd>
              <TableTd>NRR, logo churn, feature adoption, DAU/MAU, support ticket CSAT</TableTd>
              <TableTd>Break down ARR movements by cohort (new, expansion, contraction, churn) to surface product-market-fit signals.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Manufacturing / Supply Chain</strong></TableTd>
              <TableTd>OTIF (On-Time-In-Full), capacity utilization, defect PPM, inventory turns</TableTd>
              <TableTd>Bring Ops & Finance side-by-side to balance working-capital goals with service levels.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Professional Services / Agencies</strong></TableTd>
              <TableTd>Billable-utilization %, average blended rate, project gross margin, backlog coverage</TableTd>
              <TableTd>Include staffing pipeline & skills-gap analysis to justify hiring or subcontracting decisions.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>FinTech / Payments</strong></TableTd>
              <TableTd>TPV (Total Payment Volume), fraud loss %, regulatory breach incidents, interchange yield</TableTd>
              <TableTd>Add a risk-and-compliance slide (reg change radar, open audits) for board comfort.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Consumer Goods / E-commerce</strong></TableTd>
              <TableTd>Sell-through %, return rate, contribution margin per SKU, CAC:LTV, inventory days</TableTd>
              <TableTd>Layer retail media performance (ROAS) into Marketing&apos;s section to connect spend with shelf velocity.</TableTd>
            </TableTr>
          </TableTbody>
        </Table>

        <Divider className="my-8" />

        <Title order={3} className="mb-4">2. Recommended Tool Stack</Title>
        <Table className="mb-8">
          <TableThead>
            <TableTr>
              <TableTh>Need</TableTh>
              <TableTh>Go-To Tools</TableTh>
              <TableTh>Why They Help in QBR Context</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd><strong>Collaboration / Comms</strong></TableTd>
              <TableTd>Slack, Microsoft Teams</TableTd>
              <TableTd>Channel for <em>#qbr-prep</em> (asynchronous questions) and <em>#qbr-actions</em> (post-meeting status).</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Project / Action Tracking</strong></TableTd>
              <TableTd>Asana, Jira, Trello</TableTd>
              <TableTd>Build a template board &quot;QBR-Actions-Q3-FY25&quot; with swim-lanes by function.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>CRM & Rev-Intelligence</strong></TableTd>
              <TableTd>Salesforce + Clari / HubSpot + InsightSquared</TableTd>
              <TableTd>Pull pipeline, forecast, and win-loss data without manual Excel gymnastics.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Customer Success</strong></TableTd>
              <TableTd>GainSight, ChurnZero, Catalyst</TableTd>
              <TableTd>Auto-sync health scores & churn flags to CS slides.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>BI / Dashboards</strong></TableTd>
              <TableTd>Looker, Power BI, Tableau</TableTd>
              <TableTd>Create a live &quot;QBR Pulse&quot; dashboard the exec team can refresh in-meeting.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Automated Note-Takers</strong></TableTd>
              <TableTd>Gong, Grain, Fathom</TableTd>
              <TableTd>Generate transcripts + highlight reels; attach clips to action items for context.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Scenario Modeling</strong></TableTd>
              <TableTd>OnPlan, Cube, Google Sheets + Layer</TableTd>
              <TableTd>Let RevOps tweak churn/growth assumptions on the fly when board asks &quot;What if…?&quot;.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Deck Automation</strong></TableTd>
              <TableTd>Beautiful.ai, Google Slides API scripts</TableTd>
              <TableTd>Pull KPI charts straight from BI → slides at T-1 with no copy-paste errors.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Voting / Pulse Polls</strong></TableTd>
              <TableTd>Slido, Mentimeter</TableTd>
              <TableTd>Quick temperature check (&quot;Which risk worries you most?&quot;) to drive engagement.</TableTd>
            </TableTr>
          </TableTbody>
        </Table>

        <Box className="bg-blue-50  p-4 rounded-lg mb-8">
          <Text size="sm" className="text-blue-800 ">
            <strong>Integration Hint:</strong> Pipe all tools into a <strong>data warehouse (Snowflake, BigQuery, Redshift)</strong> and treat dashboards & slide charts as read-only layers. One data model = zero metric disputes.
          </Text>
        </Box>

        <Divider className="my-8" />

        <Title order={3} className="mb-4">3. Re-usable Templates</Title>
        
        <Title order={4} className="mb-4">3.1 Executive Summary Slide</Title>
        <Box className="bg-gray-50  p-4 rounded-lg mb-8 font-mono text-sm">
          <pre className="whitespace-pre-wrap">
{`📊 Q3 at a Glance
———————————————————
Revenue              : $47.2M  vs  $45.0M target  (+4.9%)
Net Revenue Retention: 108%    (benchmark ≥ 105%)
Cash Burn Multiple   : 1.3×    (last Q 1.5×)

🏆 Key Wins
• Closed $3.2M 3-year deal with Acme Corp (largest to date)
• Cut onboarding TTV from 45 → 30 days (Pilot program)

⚠️ Key Challenges
• Logo churn 3.8% (> 3% threshold) driven by SMB segment
• Feature X shipment slipped 6 weeks, jeopardizing Q4 upsell plan

🔭 Q4 Forecast
• $50.5M (pipeline coverage 3.1×) — stretch scenario $52.0M if win rate holds 28%

🎯 Decisions Needed
1. Approve 2 FTE in Implementation to sustain faster TTV
2. Green-light ABM budget re-allocation — $150k from Field Events to LinkedIn
3. Decide whether to de-support Legacy Tier by Jan 1`}
          </pre>
        </Box>

        <Title order={4} className="mb-4">3.2 Issues & Recommendations Card</Title>
        <Box className="bg-gray-50  p-4 rounded-lg mb-8 font-mono text-sm">
          <pre className="whitespace-pre-wrap">
{`ISSUE
• Enterprise churn spike: 3 logos lost in Q3 worth $1.1M ARR.

IMPACT
• Lowers NRR by 2.3 pts and elongates CAC payback to 16 months.

ROOT CAUSE
• Lacked multi-threading: Only 1 active contact ≤ Director level.
• Competitive displacement by Vendor Z offering native Slack integration.

OPTIONS
1. Build Slack integration     (+$75k dev cost, ready Q2)      ★★★★☆
2. Bundle 50 free seats to match Vendor Z (–$25k ARR/logo)     ★★★☆☆
3. Reset price floor, focus on Mid-Market ICP                   ★★☆☆☆

RECOMMENDATION
→ Option 1: Fund integration; short-term retention boost, long-term upsell lever.

DECISION NEEDED BY
• Nov 15 to fit sprint planning.`}
          </pre>
        </Box>

        <Title order={4} className="mb-4">3.3 Action Tracker (Asana / Sheet)</Title>
        <Table className="mb-8">
          <TableThead>
            <TableTr>
              <TableTh>ID</TableTh>
              <TableTh>Action</TableTh>
              <TableTh>Owner</TableTh>
              <TableTh>Dept</TableTh>
              <TableTh>Due</TableTh>
              <TableTh>Success Metric</TableTh>
              <TableTh>Status</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd>Q3-S-01</TableTd>
              <TableTd>Launch &quot;Multi-thread&quot; MEDDPICC enablement for AEs</TableTd>
              <TableTd>Dana Y.</TableTd>
              <TableTd>Sales Enablement</TableTd>
              <TableTd>Dec 5</TableTd>
              <TableTd>≥ 75% opps with ≥3 contacts</TableTd>
              <TableTd>🟡</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Q3-CS-02</TableTd>
              <TableTd>Pilot 90-day adoption campaign in SMB tier</TableTd>
              <TableTd>Luis F.</TableTd>
              <TableTd>CS Ops</TableTd>
              <TableTd>Jan 15</TableTd>
              <TableTd>+5 pt GRR in SMB</TableTd>
              <TableTd>🟢</TableTd>
            </TableTr>
          </TableTbody>
        </Table>

        <Text size="sm" className="text-gray-600 mb-8">
          Color key: 🟢 On Track • 🟡 At Risk • 🔴 Off Track • ✅ Done
        </Text>

        <Divider className="my-8" />

        <Title order={3} className="mb-4">4. Facilitation Hacks & Micro-Tips</Title>
        <Table className="mb-8">
          <TableThead>
            <TableTr>
              <TableTh>Tip</TableTh>
              <TableTh>Quick How-To</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd><strong>&quot;Rule of Six&quot;</strong></TableTd>
              <TableTd>Never show {'>'}6 numbers on one slide; force narrative.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Slide-swap buffer</strong></TableTd>
              <TableTd>Keep 15 &quot;parking lot&quot; pages at deck end to drop ad-hoc analysis without breaking flow.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Time checks</strong></TableTd>
              <TableTd>Display a digital timer in Split-View mode so remote & in-room attendees see the same count-down.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Hybrid etiquette</strong></TableTd>
              <TableTd>Ask remote attendees first for questions each section; avoids on-site dominance.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>Asynchronous voices</strong></TableTd>
              <TableTd>Collect written feedback on pre-read via Google Form; summarize top 3 comments in opening.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><strong>AI summarizer</strong></TableTd>
              <TableTd>Post-meeting, let ChatGPT or Claude condense transcript into bullet notes for action-log context.</TableTd>
            </TableTr>
          </TableTbody>
        </Table>

        <Divider className="my-8" />

        <Title order={3} className="mb-4">5. Common Pitfalls to Dodge 🚧</Title>
        <Table className="mb-8">
          <TableThead>
            <TableTr>
              <TableTh>Pitfall</TableTh>
              <TableTh>Antidote</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd><em>Last-minute data pulls</em></TableTd>
              <TableTd>Freeze dataset ≥ T-10 days; refuse late changes unless material.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><em>Wall of text slides</em></TableTd>
              <TableTd>One-idea-per-slide; speak to detail verbally or put in Notes.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><em>&quot;We&apos;ll circle back&quot; syndrome</em></TableTd>
              <TableTd>Force an owner + due date before moving to the next agenda item.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><em>Tools without process</em></TableTd>
              <TableTd>Automations fail if no one maintains field hygiene—assign RevOps guardians.</TableTd>
            </TableTr>
            <TableTr>
              <TableTd><em>Ignoring the board package deadline</em></TableTd>
              <TableTd>Work backward: board deck lock = T-7 days; QBR prep starts another week earlier.</TableTd>
            </TableTr>
          </TableTbody>
        </Table>

        <Text size="lg" className="text-zinc-700  mt-8">
          Embed these tips, tools, and templates into your playbook and you&apos;ll turn the QBR into a high-leverage ritual that informs strategy, accelerates execution, and keeps every leader laser-focused on what moves the revenue dial.
        </Text>
      </Container>
    </section>
  )
}