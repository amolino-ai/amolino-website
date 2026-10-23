import { describe, expect, it } from 'vitest'
import { formatCurrencyCompact } from './format'

describe('formatCurrencyCompact', () => {
  it.each([
    [0, '$0'],
    [999, '$999'],
    [1_000, '$1K'],
    [29_500, '$29.5K'],
    [271_200, '$271.2K'],
    [3_865_500, '$3.9M'],
    [10_000_000, '$10M'],
    [2_500_000_000, '$2.5B'],
  ])('formats %d as %s', (value, expected) => {
    expect(formatCurrencyCompact(value)).toBe(expected)
  })

  it('puts the minus sign after the currency symbol, as the app does', () => {
    expect(formatCurrencyCompact(-1_600_000)).toBe('$-1.6M')
    expect(formatCurrencyCompact(-500)).toBe('$-500')
  })

  it('drops a trailing ".0" instead of showing it', () => {
    expect(formatCurrencyCompact(4_000_000)).toBe('$4M')
    expect(formatCurrencyCompact(4_040_000)).toBe('$4M')
  })
})
