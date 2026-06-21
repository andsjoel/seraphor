import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  ThemeContext,
  type ThemeContextValue,
  type ThemeMode,
} from './themeContext'

const storageKey = 'seraphor-theme'

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem(storageKey)

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(storageKey, theme)
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      themeLabel: theme === 'light' ? 'Luz de Elenya' : 'Vazio de Zyrk',
      setTheme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === 'light' ? 'dark' : 'light',
        ),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
