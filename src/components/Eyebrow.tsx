import { Badge, type LabelVariant } from '@/components/Badge';

export type EyebrowProps = {
  text: string;
  variant?: LabelVariant;
  className?: string;
  icon?: React.ReactNode; // Optional icon for accent/outlined variants
};

/**
 * Eyebrow – back-compat wrapper around {@link Badge} label variants.
 *
 * @remarks
 * Retained so existing call sites keep working. New code can use
 * `<Badge variant="default|callout|highlight|...">` directly.
 */
export function Eyebrow({ text, variant = 'default', className, icon }: EyebrowProps) {
  return <Badge variant={variant} text={text} icon={icon} className={className} />;
}
