import { Badge, type TagColor, type TagSize } from '@/components/Badge';

const valueColorMap = {
  GET: 'success',
  POST: 'primary',
  PUT: 'warning',
  DELETE: 'error',
} as Record<string, TagColor>;

/**
 * Tag – back-compat wrapper around {@link Badge} (`variant="tag"`).
 *
 * @remarks
 * Retained so existing call sites keep working. New code can use
 * `<Badge variant="tag" color={...} size={...}>` directly.
 */
export function Tag({
  children,
  variant = 'medium',
  color = valueColorMap[children] ?? 'neutral',
}: {
  children: string
  variant?: TagSize
  color?: TagColor
}) {
  return (
    <Badge variant="tag" size={variant} color={color}>
      {children}
    </Badge>
  );
}
