import { createContext, useContext } from 'react'

export type ThemeMode = 'light' | 'dark'

export type ThemeContextValue = {
  theme: ThemeMode
  themeLabel: string
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useThemeContext() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider.')
  }

  return context
}
