import type { LucideIcon } from 'lucide-react'
import type { RouteId } from '../../app/routes/navigation'

type NavigationItemProps = {
  id: RouteId
  label: string
  icon: LucideIcon
  isActive: boolean
  onNavigate: (route: RouteId) => void
  compact?: boolean
}

export function NavigationItem({
  id,
  label,
  icon: Icon,
  isActive,
  onNavigate,
  compact = false,
}: NavigationItemProps) {
  return (
    <button
      type="button"
      className={`relative flex h-11 w-full items-center rounded-md border text-left text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] ${
        compact ? 'justify-center px-0' : 'gap-3 px-3'
      } ${
        isActive
          ? 'border-[var(--color-gold)] bg-[var(--color-gold-soft)] text-[var(--color-text-strong)] shadow-[var(--shadow-soft)]'
          : 'border-transparent text-[var(--color-text-muted)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text-strong)]'
      }`}
      onClick={() => onNavigate(id)}
      aria-current={isActive ? 'page' : undefined}
      aria-label={label}
      title={label}
    >
      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
      {compact ? null : <span>{label}</span>}
    </button>
  )
}
