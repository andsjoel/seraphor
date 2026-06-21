import { geneseDaTerraCollection } from './bookContent'
import { MdxReader } from './MdxReader'
import { parseChapterSource } from './markdown'

export function BookChapterPage() {
  const chapter = geneseDaTerraCollection.chapters[0]
  const parsedChapter = parseChapterSource(chapter.source)

  return <MdxReader bookTitle={chapter.bookTitle} chapter={parsedChapter} />
}
