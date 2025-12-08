import { describe, test, expect } from 'vitest'
import { renderWithProviders } from '../tests/utils/test-utils'
import { screen } from '@testing-library/react'
import NotFound from './not-found'

describe('NotFound', () => {
  function renderComponent() {
    renderWithProviders(<NotFound />)
  }

  test('renders heading and text', () => {
    renderComponent()
    expect(
      screen.getByRole('heading', { name: /not found/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/the page you're looking for was not found/i)
    ).toBeInTheDocument()
  })

  test('renders return home button with correct link', () => {
    renderComponent()
    const button = screen.getByRole('button', { name: /return to home/i })
    expect(button).toBeInTheDocument()

    // since NextLink wraps the button, check closest anchor
    const link = button.closest('a')
    expect(link).toHaveAttribute('href', '/')
  })
})
