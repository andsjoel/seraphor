import { renderMarkdownBody, type ParsedChapter } from './markdown'

type MdxReaderProps = {
  bookTitle: string
  chapter: ParsedChapter
}

export function MdxReader({ bookTitle, chapter }: MdxReaderProps) {
  return (
    <article className="chapter-page">
      <header className="chapter-header">
        <p>{bookTitle}</p>
        <div className="chapter-title-divider" aria-hidden="true" />
        <h1>{chapter.title}</h1>
      </header>

      <div className="chapter-body">{renderMarkdownBody(chapter.body)}</div>
    </article>
  )
}
