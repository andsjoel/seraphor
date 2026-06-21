import { BookMarked } from 'lucide-react'
import { PageShell } from './PageShell'

type PlaceholderPageProps = {
  eyebrow: string
  title: string
  description: string
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <PageShell eyebrow={eyebrow} title={title} description={description}>
      <div className="max-w-xl rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
        <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-[var(--color-gold-soft)] text-[var(--color-gold)]">
          <BookMarked size={20} aria-hidden="true" />
        </div>
        <p className="text-sm leading-6 text-[var(--color-text-muted)]">
          Esta ala ja existe na arquitetura do projeto. O conteudo sera
          adicionado em arquivos proprios quando o universo comecar a crescer.
        </p>
      </div>
    </PageShell>
  )
}
