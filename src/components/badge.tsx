interface BadgeProps {
  text: string
  backgroundColor?: string
  textColor?: string
}

export function Badge({ 
  text, 
  backgroundColor = 'bg-gray-50', 
  textColor = 'text-gray-600' 
}: BadgeProps) {
  return (
    <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${backgroundColor}`}>
      <span className={`font-medium ${textColor}`}>{text}</span>
    </div>
  )
} 