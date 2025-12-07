export type Route = {
    path: string
    name: string
    showInNav?: boolean  
  }

export const routes: Route[] = [
    { path: '/', name: 'Home', showInNav: true },
    { path: '/about', name: 'About', showInNav: true },
    { path: '/projects', name: 'Projects', showInNav: true },
    { path: '/posts', name: 'Blog', showInNav: true },
    { path: '/resume', name: 'Resume', showInNav: true },
    { path: '/analytics', name: 'Analytics', showInNav: true },
  ]

export const navRoutes = routes.filter(r => r.showInNav)
  
export function pathToDisplayName(path: string): string | null{
    return routes.find((route)=> route.path === path)?.name || null 
}