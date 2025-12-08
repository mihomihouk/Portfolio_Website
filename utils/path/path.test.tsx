import { describe, test, expect } from 'vitest'
import {
  routes,
  navRoutes,
  getPagePath,
  pathToDisplayName,
  PageName
} from './path'

describe('routes', () => {
  test('all routes have valid names and paths', () => {
    routes.forEach(route => {
      expect(typeof route.path).toBe('string')
      expect(route.path.length).toBeGreaterThan(0)
      expect(typeof route.name).toBe('string')
    })
  })

  test('navRoutes only includes routes with showInNav true', () => {
    expect(navRoutes.every(r => r.showInNav)).toBe(true)
    // Should not include the 'Privacy' page
    expect(navRoutes.find(r => r.name === 'Privacy')).toBeUndefined()
  })

  describe('getPagePath', () => {
    test.each([
      ['Home', '/'],
      ['About', '/about'],
      ['Projects', '/projects'],
      ['Blog', '/posts'],
      ['Resume', '/resume'],
      ['Analytics', '/analytics'],
      ['Privacy', '/privacy']
    ] as [PageName, string][])(
      'returns correct path for %s',
      (name, expectedPath) => {
        expect(getPagePath(name as any)).toBe(expectedPath)
      }
    )

    test('returns empty string if page name not found', () => {
      // @ts-expect-error testing invalid input
      expect(getPagePath('NotAPage')).toBe('')
    })
  })

  describe('pathToDisplayName', () => {
    test.each([
      ['/', 'Home'],
      ['/about', 'About'],
      ['/projects', 'Projects'],
      ['/posts', 'Blog'],
      ['/resume', 'Resume'],
      ['/analytics', 'Analytics'],
      ['/privacy', 'Privacy']
    ] as [string, PageName][])(
      'returns correct name for path %s',
      (path, expectedName) => {
        expect(pathToDisplayName(path)).toBe(expectedName)
      }
    )

    test('returns null for unknown path', () => {
      expect(pathToDisplayName('/unknown')).toBeNull()
    })
  })
})
