import { AppLayout } from './app/layout/AppLayout'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { BookAccordionPage } from './modules/books/BookAccordionPage'
import { BookChapterPage } from './modules/books/BookChapterPage'
import { HomePage } from './modules/home/HomePage'

function App() {
  const currentPath = window.location.pathname
  const isGeneseDaTerra = currentPath.startsWith(
    '/as-raizes-da-terra/genese-da-terra',
  )
  const isLegacyBookChapter = false

  return (
    <ThemeProvider>
      <AppLayout>
        {isGeneseDaTerra ? (
          <BookAccordionPage />
        ) : isLegacyBookChapter ? (
          <BookChapterPage />
        ) : (
          <HomePage />
        )}
      </AppLayout>
    </ThemeProvider>
  )
}

export default App
