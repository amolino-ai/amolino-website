import SectionHeading from './SectionHeading';
import { getQBRBestPractices } from '@/lib/content';

export default async function BestPractices() {
  const content = await getQBRBestPractices();
  return (
    <section id="best-practices" className="scroll-mt-20">
      <SectionHeading>Best Practices</SectionHeading>
      <div className="mt-6 py-4 space-y-8">
        <p className="text-lg text-neutral-700">
          {content.introText}
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Pillar</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">What &ldquo;Great&rdquo; Looks Like</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Quick Tactics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {content.bestPractices.map((practice, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">{practice.pillar}</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">{practice.whatGreatLooksLike}</td>
                  <td className="px-6 py-4 text-sm text-neutral-700" dangerouslySetInnerHTML={{ __html: practice.quickTactics.replace(/\n/g, '<br />') }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">{content.croSection.heading}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">CRO Imperatives</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">How to Nail Them</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {content.croSection.imperatives.map((imperative, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-neutral-900">{imperative.imperative}</td>
                    <td className="px-6 py-4 text-sm text-neutral-700">{imperative.howToNail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-lg text-neutral-700 mt-8">
          {content.closingText}
        </p>
      </div>
    </section>
  );
}