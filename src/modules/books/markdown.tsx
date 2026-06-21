import type { ReactNode } from 'react'

export type ParsedChapter = {
  title: string
  body: string
}

export function parseChapterSource(source: string): ParsedChapter {
  const frontmatterMatch = source.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/)

  if (!frontmatterMatch) {
    return {
      title: 'Sem titulo',
      body: source.trim(),
    }
  }

  const [, frontmatter, body] = frontmatterMatch
  const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m)

  return {
    title: titleMatch?.[1] ?? 'Sem titulo',
    body: removeLeadingHeadings(body.trim()),
  }
}

function removeLeadingHeadings(body: string) {
  return body.replace(/^(#{1,3}\s+.+\n*)+/, '').trim()
}

export function renderMarkdownBody(body: string) {
  const blocks = body.split(/\n{2,}/).filter((block) => block.trim().length > 0)

  return blocks.map((block, index) => {
    const content = block.trim()

    if (content.startsWith('# ')) {
      return (
        <h2 key={index} className="chapter-heading">
          {renderInlineContent(content.replace(/^#\s+/, ''))}
        </h2>
      )
    }

    if (content.startsWith('## ')) {
      return (
        <h3 key={index} className="chapter-subheading">
          {renderInlineContent(content.replace(/^##\s+/, ''))}
        </h3>
      )
    }

    if (content.startsWith('>')) {
      return (
        <blockquote key={index} className="chapter-quote">
          {content
            .split('\n')
            .map((line) => line.replace(/^>\s?/, '').trim())
            .filter(Boolean)
            .map((line, lineIndex) => (
              <p key={lineIndex}>{renderInlineContent(line)}</p>
            ))}
        </blockquote>
      )
    }

    return (
      <p key={index} className="chapter-paragraph">
        {renderInlineContent(content.replace(/\n/g, ' '))}
      </p>
    )
  })
}

function renderInlineContent(text: string): ReactNode[] {
  const parts: ReactNode[] = []
  const pattern =
    /<LoreLink id="([^"]+)">([^<]+)<\/LoreLink>|\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    if (match[1] && match[2]) {
      parts.push(
        <a key={`${match[1]}-${match.index}`} className="lore-link" href="#">
          {match[2]}
        </a>,
      )
    }

    if (match[3]) {
      parts.push(<strong key={`strong-${match.index}`}>{match[3]}</strong>)
    }

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}
