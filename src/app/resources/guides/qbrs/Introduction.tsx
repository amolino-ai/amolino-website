import SectionHeading from './SectionHeading'

export default function Introduction() {
  return (
    <section id="introduction" className="scroll-mt-20">
      <SectionHeading>Introduction to QBRs</SectionHeading>
      
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white p-8 shadow-sm">
        <p className="mb-4 text-xl leading-relaxed text-zinc-600">
          Quarterly Business Reviews (QBRs) are structured, data-driven meetings held every quarter to
          evaluate performance, align teams on goals, and strategize for the next quarter. For{' '}
          <strong>Chief Revenue Officers</strong> (CROs), QBRs are a critical opportunity to demonstrate
          command over the revenue engine and align executives on strategy.
        </p>
        <p className="text-zinc-600">They are essential for:</p>
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <li className="flex items-start rounded-lg bg-white p-3 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow">
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
            <span className="text-zinc-700">Refining forecasting accuracy</span>
          </li>
          <li className="flex items-start rounded-lg bg-white p-3 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow">
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
            <span className="text-zinc-700">Clarifying ownership of key metrics</span>
          </li>
          <li className="flex items-start rounded-lg bg-white p-3 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow">
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
            <span className="text-zinc-700">Fostering cross-functional alignment</span>
          </li>
          <li className="flex items-start rounded-lg bg-white p-3 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow">
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
            <span className="text-zinc-700">
              Strengthening customer relationships and strategic planning
            </span>
          </li>
        </ul>

        <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50/50 p-4">
          <p className="text-zinc-700">
            QBRs serve as a checkpoint to drive growth, efficiency, and customer success. They are not just
            reports but tools for collaboration and strategic decision-making. Whether you&apos;re a new CRO
            presenting to the CEO and Board or a team leader conducting a functional review, the principles
            remain the same: <strong>data-driven storytelling</strong>, <strong>accountability</strong>,{' '}
            <strong>actionable insights</strong>, and <strong>cross-functional alignment</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}