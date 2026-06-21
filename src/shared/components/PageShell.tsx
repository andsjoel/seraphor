import type { ReactNode } from 'react'

type PageShellProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-screen lg:px-12 lg:py-20">
      {eyebrow ? (
        <p className="mb-4 font-serif text-sm uppercase tracking-[0.22em] text-[var(--color-gold)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] text-[var(--color-text-strong)] sm:text-6xl lg:text-8xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text)] sm:text-lg">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  )
}
