import {
  BookOpen,
  Castle,
  Compass,
  Feather,
  Home,
  LibraryBig,
} from 'lucide-react'
import { navigationItems, type RouteId } from '../routes/navigation'
import { NavigationItem } from '../../shared/components/NavigationItem'

const navigationIcons = {
  home: Home,
  library: LibraryBig,
  chronicles: Feather,
  world: Castle,
  characters: BookOpen,
  map: Compass,
} satisfies Record<RouteId, typeof Home>

type SidebarProps = {
  activeRoute: RouteId
  onNavigate: (route: RouteId) => void
}

export function Sidebar({ activeRoute, onNavigate }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-20 border-r border-[var(--color-border)] bg-[var(--color-spine)] px-3 py-5 shadow-[var(--shadow-panel)] backdrop-blur-xl lg:flex lg:flex-col">
      <div className="mb-8 flex justify-center">
        <button
          type="button"
          className="grid size-12 place-items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] font-serif text-lg font-semibold text-[var(--color-text-strong)] shadow-[var(--shadow-soft)] transition duration-300 hover:border-[var(--color-gold)]"
          onClick={() => onNavigate('home')}
          aria-label="Ir para inicio"
          title="Seraphor"
        >
          S
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-2" aria-label="Navegacao">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.id}
            id={item.id}
            label={item.label}
            icon={navigationIcons[item.id]}
            isActive={item.id === activeRoute}
            onNavigate={onNavigate}
            compact
          />
        ))}
      </nav>

      <div className="border-t border-[var(--color-border)] pt-5" />
    </aside>
  )
}
