import { render, screen } from '@testing-library/react'
import Layout from './layout'
import { vi, describe, test, expect } from 'vitest'

// Mock AppShell because in tests React Testing Library wraps components with a <div>
// and we cannot render <html> directly inside a <div> without causing validateDOMNesting warnings.
// This allows us to test Layout without nesting issues.
vi.mock('./_layout/app-shell/AppShell', () => ({
    AppShell: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="app-shell">{children}</div>
    )
  }))

describe('Layout', () => {
  test('renders children inside AppShell', () => {
    render(
      <Layout>
        <div data-testid="child">Hello World</div>
      </Layout>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByTestId('app-shell')).toBeInTheDocument()
  })

})
