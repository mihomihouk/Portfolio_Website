export type PageName =
  | 'Home'
  | 'About'
  | 'Projects'
  | 'Blog'
  | 'Resume'
  | 'Analytics'
  | 'Privacy'

export type Route = {
  path: string
  name: PageName
  showInNav?: boolean
}

export const routes: Route[] = [
  { path: '/', name: 'Home', showInNav: true },
  { path: '/about', name: 'About', showInNav: true },
  { path: '/projects', name: 'Projects', showInNav: true },
  { path: '/posts', name: 'Blog', showInNav: true },
  { path: '/resume', name: 'Resume', showInNav: true },
  { path: '/analytics', name: 'Analytics', showInNav: true },
  { path: '/privacy', name: 'Privacy', showInNav: false }
]

export const navRoutes = routes.filter(r => r.showInNav)

export function getPagePath(name: PageName): string {
  const route = routes.find(route => route.name === name)
  return route ? route.path : ''
}
export function pathToDisplayName(path: string): PageName | null {
  return routes.find(route => route.path === path)?.name || null
}
