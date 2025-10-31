import type { BenefitGroupComparison } from '@/lib/content/types';

/**
 * Comparison table component for side-by-side feature comparison.
 * Desktop: Shows as a table with capability, traditional, and solution columns.
 * Mobile: Transforms into cards with one comparison per card for better readability.
 */
export function ComparisonTable({ title, columns, rows }: BenefitGroupComparison) {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          {title}
        </h2>

        {/* Desktop Table View */}
        <div className="hidden lg:block mt-16">
          <div className="overflow-hidden rounded-xl bg-white shadow-sm outline outline-black/5 dark:bg-gray-800 dark:outline-white/15">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-indigo-600 text-white font-bold">
              {columns.map((column, index) => (
                <div key={column.label} className={`px-6 py-4 ${index > 0 ? 'text-center' : ''}`}>
                  {column.label}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {rows.map((row, index) => (
              <div
                key={row.capability}
                className={`grid grid-cols-3 ${
                  index !== rows.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                } hover:bg-gray-50 dark:hover:bg-gray-700/50`}
              >
                <div className="px-6 py-6 font-semibold text-gray-900 dark:text-white">
                  {row.capability}
                </div>
                <div className="px-6 py-6 text-center text-gray-600 dark:text-gray-400">
                  {row.traditional === '✓' ? (
                    <span className="text-2xl text-green-600 dark:text-green-400">✓</span>
                  ) : row.traditional === '✗' ? (
                    <span className="text-2xl text-red-600 dark:text-red-400">✗</span>
                  ) : (
                    row.traditional
                  )}
                </div>
                <div className="px-6 py-6 text-center font-medium text-gray-900 dark:text-white">
                  {row.solution === '✓' ? (
                    <span className="text-2xl text-green-600 dark:text-green-400">✓</span>
                  ) : row.solution.includes('✓') ? (
                    <span>{row.solution}</span>
                  ) : (
                    row.solution
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden mt-16 space-y-6">
          {rows.map((row) => (
            <div
              key={row.capability}
              className="rounded-xl bg-white p-6 shadow-sm outline outline-black/5 dark:bg-gray-800 dark:outline-white/15"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">
                {row.capability}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {columns[1].label}:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {row.traditional === '✓' ? (
                      <span className="text-xl text-green-600 dark:text-green-400">✓</span>
                    ) : row.traditional === '✗' ? (
                      <span className="text-xl text-red-600 dark:text-red-400">✗</span>
                    ) : (
                      row.traditional
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {columns[2].label}:
                  </span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {row.solution === '✓' ? (
                      <span className="text-xl text-green-600 dark:text-green-400">✓</span>
                    ) : row.solution.includes('✓') ? (
                      <span>{row.solution}</span>
                    ) : (
                      row.solution
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
