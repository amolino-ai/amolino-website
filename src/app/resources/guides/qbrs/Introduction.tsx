import SectionHeading from './SectionHeading';
import { getQBRIntroduction } from '@/lib/content';

export default async function Introduction() {
  const content = await getQBRIntroduction();

  return (
    <section id="introduction" className="scroll-mt-20">
      <SectionHeading>Introduction to QBRs</SectionHeading>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white p-8 shadow-sm">
        <p className="mb-4 text-xl leading-relaxed text-zinc-600">
          {content.introParagraph.split('Chief Revenue Officers').map((part, i) => (
            i === 0 ? part : <><strong key={i}>Chief Revenue Officers</strong>{part}</>
          ))}
        </p>
        <p className="text-zinc-600">They are essential for:</p>
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {content.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start rounded-lg bg-white p-3 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow">
              <span className="mr-3 rounded-full bg-blue-100 p-1 text-blue-700">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-zinc-700">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50/50 p-4">
          <p className="text-zinc-700">
            {content.closingParagraph.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}