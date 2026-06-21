import type { BenefitGroupComparison } from '@/lib/content/types';

/**
 * Comparison table component for side-by-side feature comparison.
 * Desktop: Shows as a table with capability, traditional, and solution columns.
 * Mobile: Transforms into cards with one comparison per card for better readability.
 */
export function ComparisonTable({ title, columns, rows }: BenefitGroupComparison) {
  return (
    <div className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
          {title}
        </h2>

        {/* Desktop Table View */}
        <div className="hidden lg:block mt-16">
          <div className="overflow-hidden rounded-xl bg-white shadow-sm outline outline-black/5">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-primary-600 text-white font-bold">
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
                  index !== rows.length - 1 ? 'border-b border-neutral-200' : ''
                } hover:bg-neutral-50`}
              >
                <div className="px-6 py-6 font-semibold text-neutral-900">
                  {row.capability}
                </div>
                <div className="px-6 py-6 text-center text-neutral-600">
                  {row.traditional === '✓' ? (
                    <span className="text-2xl text-success-600">✓</span>
                  ) : row.traditional === '✗' ? (
                    <span className="text-2xl text-error-600">✗</span>
                  ) : (
                    row.traditional
                  )}
                </div>
                <div className="px-6 py-6 text-center font-medium text-neutral-900">
                  {row.solution === '✓' ? (
                    <span className="text-2xl text-success-600">✓</span>
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
              className="rounded-xl bg-white p-6 shadow-sm outline outline-black/5"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                {row.capability}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-600">
                    {columns[1].label}:
                  </span>
                  <span className="text-neutral-900">
                    {row.traditional === '✓' ? (
                      <span className="text-xl text-success-600">✓</span>
                    ) : row.traditional === '✗' ? (
                      <span className="text-xl text-error-600">✗</span>
                    ) : (
                      row.traditional
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-neutral-200">
                  <span className="text-sm font-medium text-neutral-600">
                    {columns[2].label}:
                  </span>
                  <span className="font-semibold text-primary-600">
                    {row.solution === '✓' ? (
                      <span className="text-xl text-success-600">✓</span>
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
