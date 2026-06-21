import { useMemo, useRef, useState } from 'react'
import { geneseDaTerraCollection } from './bookContent'
import { renderMarkdownBody, parseChapterSource } from './markdown'

export function BookAccordionPage() {
  const [openChapterIndex, setOpenChapterIndex] = useState(0)
  const chapterRefs = useRef<Array<HTMLElement | null>>([])
  const chapters = useMemo(
    () =>
      geneseDaTerraCollection.chapters.map((chapter) => ({
        ...chapter,
        parsed: parseChapterSource(chapter.source),
      })),
    [],
  )

  function openChapter(index: number) {
    setOpenChapterIndex(index)

    window.setTimeout(() => {
      chapterRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 80)
  }

  return (
    <article className="book-page">
      <header className="chapter-header book-page-header">
        <p>As Raizes da Terra</p>
        <div className="chapter-title-divider" aria-hidden="true" />
        <h1>{geneseDaTerraCollection.bookTitle}</h1>
      </header>

      <div className="book-accordion">
        {chapters.map((chapter, index) => {
          const isOpen = index === openChapterIndex
          const nextChapter = chapters[index + 1]

          return (
            <section
              key={chapter.slug}
              className={`book-accordion-item ${isOpen ? 'is-open' : ''}`}
              ref={(element) => {
                chapterRefs.current[index] = element
              }}
            >
              <button
                type="button"
                className="book-accordion-trigger"
                onClick={() => openChapter(index)}
                aria-expanded={isOpen}
              >
                <span>{formatChapterNumber(index + 1)}</span>
                <strong>{chapter.parsed.title}</strong>
              </button>

              <div className="book-accordion-panel" hidden={!isOpen}>
                <div className="chapter-body">
                  {renderMarkdownBody(chapter.parsed.body)}
                </div>

                {nextChapter ? (
                  <button
                    type="button"
                    className="next-chapter-button"
                    onClick={() => openChapter(index + 1)}
                  >
                    Proximo capitulo
                    <span>{nextChapter.parsed.title}</span>
                  </button>
                ) : null}
              </div>
            </section>
          )
        })}
      </div>
    </article>
  )
}

function formatChapterNumber(order: number) {
  return `Capitulo ${String(order).padStart(2, '0')}`
}
