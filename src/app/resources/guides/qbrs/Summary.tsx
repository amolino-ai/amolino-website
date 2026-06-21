import SectionHeading from './SectionHeading';
import { Text, Box, Title, List, ListItem, Table } from '@mantine/core';
import { getQBRSummary } from '@/lib/content';

export default async function Summary() {
  const content = await getQBRSummary();

  return (
    <section id="summary" className="scroll-mt-20">
      <SectionHeading>Summary & Conclusion</SectionHeading>
      <div className="mt-6 py-4">
        <Text className="text-lg text-neutral-700 mb-8">
          {content.introText}
        </Text>

        <Title order={3} className="mb-6">{content.principlesHeading}</Title>

        <Box className="space-y-6 mb-8">
          {content.principles.map((principle, index) => (
            <Box key={index} className="space-y-2">
              <Text className="text-lg font-semibold text-neutral-800">
                {principle.title}
              </Text>
              {principle.description && (
                <Text className="text-neutral-700 ml-6">
                  {principle.description}
                </Text>
              )}
              {principle.bulletPoints && (
                <Box className="ml-6">
                  <List className="text-neutral-700">
                    {principle.bulletPoints.map((point, idx) => (
                      <ListItem key={idx}>{point}</ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Title order={3} className="mb-6">{content.comparisonHeading}</Title>
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
              {content.comparison.map((row, index) => (
                <tr key={index}>
                  <td><strong>{row.aspect}</strong></td>
                  <td>{row.good}</td>
                  <td>{row.great}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </div>
    </section>
  );
}