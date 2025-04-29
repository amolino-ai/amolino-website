import SectionHeading from './SectionHeading'
import { Text, Box, Title, List, ListItem, Table } from '@mantine/core'

export default function Summary() {
  return (
    <section id="summary" className="scroll-mt-20">
      <SectionHeading>Summary & Conclusion</SectionHeading>
      <div className="mt-6 py-4">
        <Text className="text-lg text-zinc-700 mb-8">
          Quarterly Business Reviews should be more than status meetings—they are the <strong>operating rhythm that turns strategy into revenue</strong>. When you run them well, QBRs concentrate the entire organization&apos;s intelligence into three hours of candid discussion, rapid decision-making, and crystal-clear accountability.
        </Text>

        <Title order={3} className="mb-6">Five Principles to Remember</Title>

        <Box className="space-y-6 mb-8">
          <Box className="space-y-2">
            <Text className="text-lg font-semibold text-zinc-800">
              1. <strong>Start with the &quot;Why.&quot;</strong>
            </Text>
            <Text className="text-zinc-700 ml-6">
              Anchor every chart, slide, and comment to the quarter&apos;s strategic objectives. If the conversation drifts from revenue growth, retention, efficiency, or whatever goals you set, steer it back.
            </Text>
          </Box>

          <Box className="space-y-2">
            <Text className="text-lg font-semibold text-zinc-800">
              2. <strong>Tell a Data-backed Story.</strong>
            </Text>
            <Box className="ml-6">
              <List className="text-zinc-700">
                <ListItem>Show four-quarter trends, not single-point snapshots.</ListItem>
                <ListItem>Use one slide to preview the &quot;movie trailer&quot; (goals vs actuals, wins, gaps, decisions needed).</ListItem>
                <ListItem>Translate each metric into business impact: &quot;+1 pt NRR = +$250k ARR next quarter.&quot;</ListItem>
              </List>
            </Box>
          </Box>

          <Box className="space-y-2">
            <Text className="text-lg font-semibold text-zinc-800">
              3. <strong>Make It Action-Oriented.</strong>
            </Text>
            <Text className="text-zinc-700 ml-6">
              Every section ends with a &quot;So What / Now What&quot;: an owner, a deadline, and a success metric logged live in the action tracker.
            </Text>
          </Box>

          <Box className="space-y-2">
            <Text className="text-lg font-semibold text-zinc-800">
              4. <strong>Drive Cross-Functional Alignment.</strong>
            </Text>
            <Text className="text-zinc-700 ml-6">
              Pull Sales, CS, Marketing, Product, Finance, Ops, and People into the same room (or Zoom) with <strong>one source of truth</strong>. Misalignment is exposed—and resolved—before it hurts the next quarter.
            </Text>
          </Box>

          <Box className="space-y-2">
            <Text className="text-lg font-semibold text-zinc-800">
              5. <strong>Close the Loop Relentlessly.</strong>
            </Text>
            <Box className="ml-6">
              <List className="text-zinc-700">
                <ListItem>Send the recap package within 24 hours.</ListItem>
                <ListItem>Review the action board weekly.</ListItem>
                <ListItem>Grade yourself at the next QBR on percent of actions completed. Continuous improvement turns QBRs from rituals into growth engines.</ListItem>
              </List>
            </Box>
          </Box>
        </Box>

        <Title order={3} className="mb-6">What &quot;Great&quot; Looks Like</Title>
        <Box className="overflow-x-auto mb-8">
          <Table withColumnBorders withTableBorder highlightOnHover striped>
            <thead>
              <tr style={{ backgroundColor: '#f0f7ff' }}>
                <th>Aspect</th>
                <th>Good</th>
                <th><strong>Great</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Preparation</strong></td>
                <td>Slides complete</td>
                <td>Slides + insights + FAQ flashcards + data dictionary locked 10 days early</td>
              </tr>
              <tr>
                <td><strong>Meeting</strong></td>
                <td>Agenda followed</td>
                <td>Timebox upheld + executive flex block + live scenario modeling</td>
              </tr>
              <tr>
                <td><strong>Follow-Up</strong></td>
                <td>Action list emailed</td>
                <td>Actions in Asana with Slack digest; 90% closed by next QBR</td>
              </tr>
              <tr>
                <td><strong>Culture</strong></td>
                <td>Leaders report</td>
                <td>Leaders debate, decide, and own outcomes in front of their teams</td>
              </tr>
            </tbody>
          </Table>
        </Box>
      </div>
    </section>
  )
}