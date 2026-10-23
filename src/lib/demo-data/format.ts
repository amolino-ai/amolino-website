/**
 * Number formatting that matches the Amolino app's `formatNumberCompact`
 * (app/web/utils/localFormatNumber.ts), e.g. 271200 -> "$271.2K", -1600000 -> "$-1.6M".
 *
 * The app formats with the browser's locale; we pin one so server and client render the same text.
 */
const DISPLAY_LOCALE = 'en-US'
const DISPLAY_CURRENCY = 'USD'
const COMPACT_FRACTION_DIGITS = 1

const COMPACT_UNITS = [
  { threshold: 1_000_000_000_000, suffix: 'T' },
  { threshold: 1_000_000_000, suffix: 'B' },
  { threshold: 1_000_000, suffix: 'M' },
  { threshold: 1_000, suffix: 'K' },
] as const

const numberFormatter = new Intl.NumberFormat(DISPLAY_LOCALE, {
  minimumFractionDigits: 0,
  maximumFractionDigits: COMPACT_FRACTION_DIGITS,
})

const currencySymbol =
  new Intl.NumberFormat(DISPLAY_LOCALE, { style: 'currency', currency: DISPLAY_CURRENCY })
    .formatToParts(0)
    .find((part) => part.type === 'currency')?.value ?? ''

function abbreviateNumber(value: number): string {
  const unit = COMPACT_UNITS.find(({ threshold }) => Math.abs(value) >= threshold)
  if (!unit) return numberFormatter.format(value)
  return numberFormatter.format(value / unit.threshold).replace(/\.0$/, '') + unit.suffix
}

export function formatCurrencyCompact(value: number): string {
  return `${currencySymbol}${abbreviateNumber(value)}`
}
