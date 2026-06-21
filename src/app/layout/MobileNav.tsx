import { useState } from 'react'
import {
  BookOpen,
  Castle,
  Compass,
  Feather,
  Home,
  LibraryBig,
  Menu,
  X,
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

type MobileNavProps = {
  activeRoute: RouteId
  onNavigate: (route: RouteId) => void
}

export function MobileNav({ activeRoute, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleNavigate(route: RouteId) {
    onNavigate(route)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          className="grid size-11 place-items-center rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-text-strong)] transition duration-300 hover:border-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Fechar navegacao' : 'Abrir navegacao'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-center font-serif text-xl font-semibold text-[var(--color-text-strong)]">
            Seraphor
          </p>
        </div>

        <span className="size-11" aria-hidden="true" />
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <nav className="min-h-0 overflow-hidden" aria-label="Navegacao movel">
          <div className="space-y-2 pt-4">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.id}
                id={item.id}
                label={item.label}
                icon={navigationIcons[item.id]}
                isActive={item.id === activeRoute}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
