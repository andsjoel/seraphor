export type RouteId =
  | 'home'
  | 'library'
  | 'chronicles'
  | 'world'
  | 'characters'
  | 'map'

export type NavigationItemData = {
  id: RouteId
  label: string
  description: string
}

export const navigationItems: NavigationItemData[] = [
  {
    id: 'home',
    label: 'Inicio',
    description: 'A entrada principal dos arquivos de Seraphor.',
  },
  {
    id: 'library',
    label: 'Biblioteca',
    description: 'Indice vivo de tomos, reliquias e registros proibidos.',
  },
  {
    id: 'chronicles',
    label: 'Cronicas',
    description: 'Contos, campanhas e fragmentos narrativos do mundo.',
  },
  {
    id: 'world',
    label: 'Mundo',
    description: 'Reinos, religioes, politica, culturas e eras antigas.',
  },
  {
    id: 'characters',
    label: 'Personagens',
    description: 'Figuras notaveis, linhagens, aliados e ameacas.',
  },
  {
    id: 'map',
    label: 'Mapa',
    description: 'Territorios, rotas, ruinas e fronteiras ainda veladas.',
  },
]
