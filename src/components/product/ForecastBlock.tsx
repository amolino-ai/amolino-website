'use client'

import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import {
  FORECAST_CHART_LABEL_DESCRIPTIONS,
  FORECAST_CHART_LABELS,
  ForecastChartKey,
  type ForecastBreakdownResponse,
} from '@/lib/demo-data/app-types.generated'
import type { ForecastWidgetCopy } from '@/lib/demo-data/forecast'
import {
  buildWaterfall,
  getChartAxis,
  getForecastCases,
  getForecastDelta,
  getIncludedKeys,
  type WaterfallBar,
} from '@/lib/demo-data/forecast-chart'
import { formatCurrencyCompact } from '@/lib/demo-data/format'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import { useId, useState } from 'react'

/**
 * Interactive copy of the Forecast dashboard's "Amolino forecast" block.
 * Mirrors app/web/components/pages/Dashboard/ForecastPage/ForecastBlock (ForecastBlock + ForecastChartAmolino).
 */

/** The app's plot is 230px; help screenshots show it about 1.2x larger, so we match that at article width. */
const CHART_HEIGHT_PX = 280
const PERCENT = 100
const HALF_COLUMN = 0.5
const HATCH_SPACING_PX = 8
const HATCH_ANGLE_DEG = 45

interface BarStyle {
  /** Gradient fill, top to bottom. */
  fill: string
  /** Running-total bars get an outline and diagonal hatching. */
  outline?: string
  hatch?: string
  /** Dot colour in the tooltip. */
  dot: string
}

const TEAL: BarStyle = { fill: 'from-teal-200 to-teal-600', dot: 'bg-teal-200' }
const BLUE: BarStyle = { fill: 'from-primary-200 to-primary-500', dot: 'bg-primary-200' }
const PURPLE: BarStyle = { fill: 'from-tertiary-200 to-tertiary-500', dot: 'bg-tertiary-200' }

const BAR_STYLES: Record<ForecastChartKey, BarStyle> = {
  [ForecastChartKey.CLOSED_WON]: TEAL,
  [ForecastChartKey.CONFIDENT]: TEAL,
  [ForecastChartKey.WORST_CASE]: { ...TEAL, outline: 'border-teal-600', hatch: 'stroke-teal-600' },
  [ForecastChartKey.UPSIDE]: BLUE,
  [ForecastChartKey.FORECAST]: { ...BLUE, outline: 'border-primary-500', hatch: 'stroke-primary-300' },
  [ForecastChartKey.ACCELERATOR]: PURPLE,
  [ForecastChartKey.BEST_CASE]: { ...PURPLE, outline: 'border-tertiary-500', hatch: 'stroke-tertiary-300' },
}

interface ForecastBlockProps {
  breakdown: ForecastBreakdownResponse
  copy: ForecastWidgetCopy
}

export function ForecastBlock({ breakdown, copy }: ForecastBlockProps) {
  const [hovered, setHovered] = useState<ForecastChartKey | null>(null)
  const [selected, setSelected] = useState<ForecastChartKey | null>(null)

  const bars = buildWaterfall(breakdown)
  const axis = getChartAxis(bars, breakdown.quarter_target)
  const { bestCase, worstCase } = getForecastCases(breakdown)
  const delta = getForecastDelta(breakdown)
  const included = selected ? getIncludedKeys(selected) : null

  const toggleSelected = (key: ForecastChartKey) => setSelected((current) => (current === key ? null : key))

  return (
    <Card padding="sm" className="not-prose my-8">
      <div className="flex items-start justify-between gap-2.5">
        <div>
          <p className="text-base font-medium text-neutral-600">{copy.title}</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-medium text-neutral-900">{formatCurrencyCompact(breakdown.forecast)}</p>
            <p className="text-sm text-neutral-600">
              <span className={clsx(delta > 0 && 'text-success-500', delta < 0 && 'text-error-500')}>
                {formatCurrencyCompact(delta)}
              </span>{' '}
              {copy.deltaSuffix}
            </p>
          </div>
        </div>
        <SourceSwitcher copy={copy} />
      </div>

      <div className="mt-2.5 mb-2 grid grid-cols-[1fr_1px_1fr] gap-1.5 rounded-lg bg-neutral-100 p-2">
        <CaseButton
          label={FORECAST_CHART_LABELS[ForecastChartKey.BEST_CASE]}
          value={bestCase}
          isSelected={selected === ForecastChartKey.BEST_CASE}
          onClick={() => toggleSelected(ForecastChartKey.BEST_CASE)}
        />
        <span className="border-l border-neutral-200" />
        <CaseButton
          label={FORECAST_CHART_LABELS[ForecastChartKey.WORST_CASE]}
          value={worstCase}
          isSelected={selected === ForecastChartKey.WORST_CASE}
          onClick={() => toggleSelected(ForecastChartKey.WORST_CASE)}
        />
      </div>

      <div role="group" aria-label={copy.chartLabel}>
        <div className="flex" style={{ height: CHART_HEIGHT_PX }}>
          <div className="relative flex-1 border-b border-neutral-500">
            {axis.ticks.map((tick) => (
              <div
                key={tick}
                className="absolute inset-x-0 border-t border-neutral-100"
                style={{ bottom: `${(tick / axis.max) * PERCENT}%` }}
              />
            ))}

            {typeof breakdown.quarter_target === 'number' && (
              <div
                className="absolute inset-x-0 z-10 border-t border-primary-900"
                style={{ bottom: `${(breakdown.quarter_target / axis.max) * PERCENT}%` }}
              />
            )}

            <div
              className="absolute inset-0 grid"
              style={{ gridTemplateColumns: `repeat(${bars.length}, minmax(0, 1fr))` }}
            >
              {bars.map((bar, index) => (
                <BarColumn
                  key={bar.key}
                  bar={bar}
                  axisMax={axis.max}
                  isLast={index === bars.length - 1}
                  isHovered={hovered === bar.key}
                  isDimmed={included !== null && !included.has(bar.key)}
                  isSelected={selected === bar.key}
                  onHover={setHovered}
                  onToggle={toggleSelected}
                />
              ))}
            </div>

            {bars.map((bar, index) =>
              hovered === bar.key && bar.value > 0 ? (
                <BarTooltip key={bar.key} bar={bar} index={index} count={bars.length} axisMax={axis.max} copy={copy} />
              ) : null,
            )}
          </div>

          <div className="relative w-16 shrink-0">
            {axis.ticks.map((tick) => (
              <span
                key={tick}
                className="absolute left-1.5 translate-y-1/2 text-xs text-neutral-400"
                style={{ bottom: `${(tick / axis.max) * PERCENT}%` }}
              >
                {formatCurrencyCompact(tick)}
              </span>
            ))}
            {typeof breakdown.quarter_target === 'number' && (
              <span
                className="absolute left-0 z-10 translate-y-1/2 rounded-sm bg-primary-900 px-1 py-0.5 text-[0.625rem] font-medium whitespace-nowrap text-white"
                style={{ bottom: `${(breakdown.quarter_target / axis.max) * PERCENT}%` }}
              >
                {copy.targetPrefix} {formatCurrencyCompact(breakdown.quarter_target)}
              </span>
            )}
          </div>
        </div>

        <div className="flex">
          <div className="grid flex-1" style={{ gridTemplateColumns: `repeat(${bars.length}, minmax(0, 1fr))` }}>
            {bars.map((bar, index) => (
              <AxisLabel key={bar.key} label={bar.label} isFirst={index === 0} isLast={index === bars.length - 1} />
            ))}
          </div>
          <div className="w-16 shrink-0" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-neutral-100 pt-3">
        <Badge variant="subtle" text={copy.sampleDataLabel} />
        <p className="text-xs text-neutral-500">{copy.hint}</p>
      </div>
    </Card>
  )
}

function SourceSwitcher({ copy }: { copy: ForecastWidgetCopy }) {
  return (
    <div className="flex rounded-md border border-neutral-200 bg-neutral-100 p-0.5 text-sm">
      <span className="rounded-sm bg-white px-2 py-0.5 font-medium text-neutral-900 shadow-xs">
        {copy.sourceAmolino}
      </span>
      <button
        type="button"
        disabled
        title={copy.crmUnavailable}
        className="cursor-not-allowed px-2 py-0.5 text-neutral-500"
      >
        {copy.sourceCrm}
      </button>
    </div>
  )
}

interface CaseButtonProps {
  label: string
  value: number
  isSelected: boolean
  onClick: () => void
}

function CaseButton({ label, value, isSelected, onClick }: CaseButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center gap-2 rounded-md py-0.5 text-sm text-neutral-600 transition-colors hover:bg-white',
        isSelected && 'bg-white ring-1 ring-primary-700',
      )}
    >
      <span>{label}</span>
      <span className="ml-2 font-semibold text-neutral-900">{formatCurrencyCompact(value)}</span>
      <ChevronRightIcon className="size-4" />
    </button>
  )
}

interface BarColumnProps {
  bar: WaterfallBar
  axisMax: number
  isLast: boolean
  isHovered: boolean
  isDimmed: boolean
  isSelected: boolean
  onHover: (key: ForecastChartKey | null) => void
  onToggle: (key: ForecastChartKey) => void
}

function BarColumn({ bar, axisMax, isLast, isHovered, isDimmed, isSelected, onHover, onToggle }: BarColumnProps) {
  const hasValue = bar.value > 0
  const style = BAR_STYLES[bar.key]

  return (
    <button
      type="button"
      disabled={!hasValue}
      aria-pressed={isSelected}
      aria-label={`${bar.label}: ${formatCurrencyCompact(bar.value)}`}
      onMouseEnter={() => onHover(bar.key)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(bar.key)}
      onBlur={() => onHover(null)}
      onClick={() => onToggle(bar.key)}
      className={clsx(
        'relative h-full border-l border-dashed border-neutral-200 outline-none enabled:cursor-pointer',
        isLast && 'border-r',
        isHovered && 'bg-neutral-50',
      )}
    >
      {hasValue && (
        <>
          <span
            className={clsx(
              'absolute left-1/2 w-3/5 max-w-12 -translate-x-1/2 overflow-hidden rounded-xs bg-gradient-to-b transition-opacity',
              style.fill,
              style.outline && ['border', style.outline],
              isSelected && 'ring-2 ring-primary-700',
              isDimmed && 'opacity-30',
            )}
            style={{
              bottom: `${(bar.base / axisMax) * PERCENT}%`,
              height: `${(bar.value / axisMax) * PERCENT}%`,
            }}
          >
            {style.hatch && <Hatching className={style.hatch} />}
          </span>
          <span
            className={clsx(
              'absolute left-1/2 -translate-x-1/2 pb-1 text-xs font-medium whitespace-nowrap text-neutral-600 transition-opacity',
              isDimmed && 'opacity-30',
            )}
            style={{ bottom: `${(bar.peak / axisMax) * PERCENT}%` }}
          >
            {formatCurrencyCompact(bar.value)}
          </span>
        </>
      )}
    </button>
  )
}

function Hatching({ className }: { className: string }) {
  const patternId = useId()
  return (
    <svg aria-hidden="true" className="absolute inset-0 size-full">
      <defs>
        <pattern
          id={patternId}
          width={HATCH_SPACING_PX}
          height={HATCH_SPACING_PX}
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${HATCH_ANGLE_DEG})`}
        >
          <line x1="0" y1="0" x2="0" y2={HATCH_SPACING_PX} className={className} strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

interface BarTooltipProps {
  bar: WaterfallBar
  index: number
  count: number
  axisMax: number
  copy: ForecastWidgetCopy
}

function BarTooltip({ bar, index, count, axisMax, copy }: BarTooltipProps) {
  const columnCenter = ((index + HALF_COLUMN) / count) * PERCENT
  const isFirst = index === 0
  const isLast = index === count - 1

  return (
    <div
      role="tooltip"
      className={clsx(
        'pointer-events-none absolute z-20 mb-6 w-52 rounded-lg bg-neutral-800 p-3 text-xs text-white shadow-lg',
        !isFirst && !isLast && '-translate-x-1/2',
        isLast && '-translate-x-full',
      )}
      style={{
        left: isFirst ? 0 : `${columnCenter}%`,
        bottom: `${(bar.peak / axisMax) * PERCENT}%`,
      }}
    >
      <div className="flex items-center gap-1.5 font-semibold text-neutral-400">
        <span className={clsx('size-1.5 rounded-full', BAR_STYLES[bar.key].dot)} />
        {bar.label}
      </div>
      <div>{formatCurrencyCompact(bar.value)}</div>
      <hr className="my-1.5 border-neutral-700" />
      <div className="flex justify-between">
        <span>{copy.baseLabel}</span>
        <span>{formatCurrencyCompact(bar.base)}</span>
      </div>
      <div className="flex justify-between">
        <span>{copy.peakLabel}</span>
        <span>{formatCurrencyCompact(bar.peak)}</span>
      </div>
    </div>
  )
}

interface AxisLabelProps {
  label: string
  isFirst: boolean
  isLast: boolean
}

function AxisLabel({ label, isFirst, isLast }: AxisLabelProps) {
  const description = FORECAST_CHART_LABEL_DESCRIPTIONS[label]
  return (
    <div className="group relative flex flex-col items-center">
      <span className="h-1 border-l border-neutral-500" />
      <span className="mt-1 text-center text-[0.625rem] leading-tight text-neutral-400 sm:text-xs">{label}</span>
      {description && (
        <span
          role="tooltip"
          className={clsx(
            'pointer-events-none invisible absolute bottom-full z-20 mb-1 w-40 rounded-md bg-neutral-700 px-2 py-1 text-center text-xs text-white group-hover:visible',
            isFirst && 'left-0',
            isLast && 'right-0',
          )}
        >
          {description}
        </span>
      )}
    </div>
  )
}
