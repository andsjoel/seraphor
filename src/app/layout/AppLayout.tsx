import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useTheme } from '../../shared/hooks/useTheme'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isInterfaceAwake, setIsInterfaceAwake] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const inactivityTimeoutRef = useRef<number | undefined>(undefined)
  const { setTheme, theme } = useTheme()

  function isMobileViewport() {
    return window.matchMedia('(max-width: 520px)').matches
  }

  function toggleThemeMenu() {
    setIsThemeMenuOpen((current) => {
      const nextIsOpen = !current

      if (nextIsOpen && isMobileViewport()) {
        setIsMenuOpen(false)
      }

      return nextIsOpen
    })
  }

  function toggleMainMenu() {
    setIsMenuOpen((current) => {
      const nextIsOpen = !current

      if (nextIsOpen && isMobileViewport()) {
        setIsThemeMenuOpen(false)
      }

      return nextIsOpen
    })
  }

  useEffect(() => {
    function wakeInterface() {
      window.clearTimeout(inactivityTimeoutRef.current)
      setIsInterfaceAwake(true)

      inactivityTimeoutRef.current = window.setTimeout(() => {
        setIsInterfaceAwake(false)
        setIsMenuOpen(false)
        setIsThemeMenuOpen(false)
      }, 5000)
    }

    const events = [
      'pointermove',
      'pointerdown',
      'touchstart',
      'keydown',
    ] as const

    events.forEach((eventName) => {
      window.addEventListener(eventName, wakeInterface, { passive: true })
    })

    return () => {
      window.clearTimeout(inactivityTimeoutRef.current)

      events.forEach((eventName) => {
        window.removeEventListener(eventName, wakeInterface)
      })
    }
  }, [])

  return (
    <div className={`app-shell ${isInterfaceAwake ? 'is-awake' : ''}`}>
      <main className="app-content">{children}</main>

      <div
        className={`side-menu-dock side-menu-dock-left idle-visual ${
          isThemeMenuOpen ? 'is-open' : ''
        }`}
      >
        <button
          type="button"
          className="side-menu-trigger"
          onClick={toggleThemeMenu}
          aria-label={
            isThemeMenuOpen ? 'Fechar menu de tema' : 'Abrir menu de tema'
          }
          aria-expanded={isThemeMenuOpen}
          aria-controls="seraphor-theme-menu"
        >
          {theme === 'light' ? (
            <Sun size={20} aria-hidden="true" />
          ) : (
            <Moon size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      <aside
        id="seraphor-theme-menu"
        className={`side-menu-panel side-menu-panel-left theme-menu-panel ${
          isThemeMenuOpen ? 'is-open' : ''
        }`}
        aria-hidden={!isThemeMenuOpen}
      >
        <nav aria-label="Menu de tema">
          <button
            type="button"
            className={theme === 'light' ? 'is-active' : ''}
            onClick={() => setTheme('light')}
          >
            Luz de Elenya
          </button>
          <button
            type="button"
            className={theme === 'dark' ? 'is-active' : ''}
            onClick={() => setTheme('dark')}
          >
            Vazio de Zyrk
          </button>
        </nav>
      </aside>

      <div
        className={`side-menu-dock side-menu-dock-right idle-visual ${
          isMenuOpen ? 'is-open' : ''
        }`}
      >
        <button
          type="button"
          className="side-menu-trigger"
          onClick={toggleMainMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="seraphor-side-menu"
        >
          {isMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      <aside
        id="seraphor-side-menu"
        className={`side-menu-panel side-menu-panel-right ${
          isMenuOpen ? 'is-open' : ''
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Menu principal">
          <a href="/as-raizes-da-terra/genese-da-terra">Gênese da Terra</a>
        </nav>
      </aside>
    </div>
  )
}
