import { describe, test, vi, beforeEach, expect } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { AppShell } from './AppShell'
import React from 'react'
import { renderWithProviders } from '../../../tests/utils/test-utils'
import { AnalyticsService } from '../../../services/analytics'

// Mock the child components if needed
vi.mock('./Navbar', () => ({
  Navbar: () => <div data-testid="navbar" />
}))

vi.mock('./Footer', () => ({
  Footer: () => <div data-testid="footer" />
}))

vi.mock('../../../services/analytics', () => {
  return {
    AnalyticsService: {
      logPageView: vi.fn().mockResolvedValue(undefined)
    }
  }
})

// Mock Next.js usePathname
vi.mock('next/navigation', () => ({
  usePathname: () => '/test-path'
}))

describe('AppShell', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  function renderComponent(
    children: React.ReactNode = <div>Test Content</div>
  ) {
    renderWithProviders(<AppShell>{children}</AppShell>)
  }

  test('renders Navbar and Footer', () => {
    renderComponent()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  test('renders children content', () => {
    const childText = 'Hello World'
    renderComponent(<div>{childText}</div>)
    expect(screen.getByText(childText)).toBeInTheDocument()
  })

  test('calls AnalyticsService.logPageView on mount', async () => {
    renderComponent()
    expect(AnalyticsService.logPageView).toHaveBeenCalledWith({
      path: '/test-path',
      userAgent: expect.any(String),
      referrer: document.referrer || undefined
    })
  })
})
