import geneseCapitulo01 from '../../content/books/as-raizes-da-terra/01-genese-da-terra/capitulo-01.mdx?raw'
import geneseCapitulo02 from '../../content/books/as-raizes-da-terra/01-genese-da-terra/capitulo-02.mdx?raw'
import geneseCapitulo03 from '../../content/books/as-raizes-da-terra/01-genese-da-terra/capitulo-03.mdx?raw'
import geneseCapitulo04 from '../../content/books/as-raizes-da-terra/01-genese-da-terra/capitulo-04.mdx?raw'
import geneseCapitulo05 from '../../content/books/as-raizes-da-terra/01-genese-da-terra/capitulo-05.mdx?raw'
import geneseCapitulo06 from '../../content/books/as-raizes-da-terra/01-genese-da-terra/capitulo-06.mdx?raw'

export type BookChapter = {
  bookTitle: string
  slug: string
  source: string
}

export type BookCollection = {
  bookTitle: string
  slug: string
  chapters: BookChapter[]
}

export const geneseDaTerraCollection: BookCollection = {
  bookTitle: 'Gênese da Terra',
  slug: 'genese-da-terra',
  chapters: [
    {
      bookTitle: 'Gênese da Terra',
      slug: 'capitulo-01',
      source: geneseCapitulo01,
    },
    {
      bookTitle: 'Gênese da Terra',
      slug: 'capitulo-02',
      source: geneseCapitulo02,
    },
    {
      bookTitle: 'Gênese da Terra',
      slug: 'capitulo-03',
      source: geneseCapitulo03,
    },
    {
      bookTitle: 'Gênese da Terra',
      slug: 'capitulo-04',
      source: geneseCapitulo04,
    },
    {
      bookTitle: 'Gênese da Terra',
      slug: 'capitulo-05',
      source: geneseCapitulo05,
    },
    {
      bookTitle: 'Gênese da Terra',
      slug: 'capitulo-06',
      source: geneseCapitulo06,
    },
  ],
}
