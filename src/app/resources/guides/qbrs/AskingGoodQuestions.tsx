import { Table, Text, Title, Box, List, ListItem } from '@mantine/core'

export default function AskingGoodQuestions() {
  return (
    <div id="asking-good-questions" className="scroll-mt-20">
      <Title order={2}>Asking Good Questions</Title>

      <Box mt="xl">
        <Title order={3}>The Five Domains of Strategic Questions</Title>
        
        <div className="overflow-x-auto mt-6">
          <Table withColumnBorders withTableBorder highlightOnHover striped>
            <thead>
              <tr style={{ backgroundColor: '#f0f7ff' }}>
                <th>Domain</th>
                <th>Core Purpose</th>
                <th>Example QBR Prompts</th>
                <th>Risk if Missing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style={{ color: '#1c7ed6' }}>Investigative</strong><br/>What&apos;s known?</td>
                <td>Dig for facts, validate assumptions, reveal non-obvious data.</td>
                <td>&quot;Why did Stage-3 deals stall this quarter?&quot;<br/>&quot;How exactly is NRR calculated in this chart?&quot;</td>
                <td>Shallow diagnosis; costly surprises (e.g., trains too wide for platforms).</td>
              </tr>
              <tr>
                <td><strong style={{ color: '#40c057' }}>Speculative</strong><br/>What if?</td>
                <td>Reframe the problem, expand solution space, spur creativity.</td>
                <td>&quot;What if we bundled services instead of discounting?&quot;<br/>&quot;How might we halve onboarding time?&quot;</td>
                <td>Incremental thinking, missed breakthroughs.</td>
              </tr>
              <tr>
                <td><strong style={{ color: '#fd7e14' }}>Productive</strong><br/>Now what?</td>
                <td>Test feasibility, resources, sequencing, ownership.</td>
                <td>&quot;What talent or tooling limits our forecast accuracy fix?&quot;<br/>&quot;How will we sync Marketing and CS for the upsell play?&quot;</td>
                <td>Plans collapse in execution; over-stretch (Lego 2003).</td>
              </tr>
              <tr>
                <td><strong style={{ color: '#ae3ec9' }}>Interpretive</strong><br/>So what?</td>
                <td>Make sense of trends; translate analysis into insight.</td>
                <td>&quot;So, what does this churn uptick mean for Q4 cash?&quot;<br/>&quot;What lesson do we carry into next quarter&apos;s roadmap?&quot;</td>
                <td>Data rich → meaning poor; no strategic pivot.</td>
              </tr>
              <tr>
                <td><strong style={{ color: '#e03131' }}>Subjective</strong><br/>What&apos;s unsaid?</td>
                <td>Surface emotions, hidden agendas, cultural friction.</td>
                <td>&quot;How are frontline CSMs reacting to the new quota?&quot;<br/>&quot;What worries you most about this plan?&quot;</td>
                <td>Silent resistance derails execution (BA tail-fin rebrand).</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Text mt="md" c="dimmed" fs="italic">
          Tip: Before each functional slot, scan the table. If one domain hasn&apos;t surfaced, ask from that angle.
        </Text>
      </Box>

      <Box mt="xl">
        <Title order={3}>Crafting High-Impact Questions</Title>
        <Text fw={500}>Open, data-anchored, outcome-oriented</Text>

        <List mt="md" spacing="md">
          <ListItem>
            <strong>Start with curiosity words.</strong> &quot;How might…?&quot;, &quot;What if…?&quot;, &quot;Help me understand…&quot;
          </ListItem>
          <ListItem>
            <strong>Reference the slide.</strong> Anchor to the metric on screen; skip abstract hypotheticals.
          </ListItem>
          <ListItem>
            <strong>Drive to action.</strong> End with &quot;…and what&apos;s our next move?&quot;
          </ListItem>
        </List>

        <Title order={4} mt="lg">Template starters</Title>
        <List mt="md" spacing="md">
          <ListItem>&quot;Help me understand why ______ matters to our top-line.&quot;</ListItem>
          <ListItem>&quot;What would need to be true for us to reach ______?&quot;</ListItem>
          <ListItem>&quot;If we don&apos;t act, what happens to ______ in two quarters?&quot;</ListItem>
        </List>
      </Box>

      <Box mt="xl">
        <Title order={3}>Balance Your Question Mix</Title>
        <Text>Leaders over-rely on the domains that made them successful (engineers ask Investigative, marketers ask Speculative). To avoid blind spots:</Text>

        <List mt="md" spacing="md">
          <ListItem>
            <strong>Self-scan:</strong> After each section, note which domains you used.
          </ListItem>
          <ListItem>
            <strong>Rotate roles:</strong> Assign each exec a domain for that QBR.
          </ListItem>
          <ListItem>
            <strong>Question-storm:</strong> Spend five minutes generating questions only, then vote on the top three.
          </ListItem>
        </List>
      </Box>

      <Box mt="xl">
        <Title order={3}>QBR Facilitation Hacks</Title>
        
        <div className="overflow-x-auto mt-6">
          <Table withColumnBorders withTableBorder highlightOnHover striped>
            <thead>
              <tr style={{ backgroundColor: '#f0f7ff' }}>
                <th>Challenge</th>
                <th>Hack</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dominant voices crowd out others</strong></td>
                <td>Round-robin: Finance → Product → CS → Marketing each ask one clarifier.</td>
              </tr>
              <tr>
                <td><strong>Rabbit-hole discussions</strong></td>
                <td>&quot;Parking-lot&quot; tag & owner; revisit offline.</td>
              </tr>
              <tr>
                <td><strong>Defensive reactions</strong></td>
                <td>Swap &quot;Why did…?&quot; for &quot;How come…?&quot;; keep tone learner-mode, not judger-mode.</td>
              </tr>
              <tr>
                <td><strong>Remote attendees silent</strong></td>
                <td>Ask remote first, then in-room; use Slido for anonymous prompts.</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Box>

      <Box mt="xl">
        <Title order={3}>From Questions to Momentum</Title>
        <Text>End every Q&A burst with <strong>So What / Now What</strong>:</Text>
        
        <Text mt="md" c="dimmed" fs="italic">
          &quot;We agree churn rose because SMB usage dipped 30 %. Now what? → VP CS pilots adoption campaign, first KPI review in 30 days.&quot;
        </Text>

        <Text mt="md">
          By wielding this question framework, your QBR shifts from &quot;slide show&quot; to <strong>strategic cockpit</strong>—exposing root causes, sparking innovation, and converting insight into decisive action.
        </Text>
      </Box>
    </div>
  )
} 