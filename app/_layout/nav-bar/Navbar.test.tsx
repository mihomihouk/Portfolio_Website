import { describe, test, expect } from 'vitest'
import { fireEvent, screen, waitFor, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { renderWithProviders } from '../../../tests/utils/test-utils'
import { getPagePath, navRoutes } from '../../../utils/path/path'

function renderComponent() {
  renderWithProviders(<Navbar />)
}

const menuItems = navRoutes.filter(route => route.name !== 'Home')

describe('Navbar', () => {
  test('renders the navbar container', () => {
    renderComponent()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  test('renders the Home button/icon', () => {
    renderComponent()
    const homeLink = screen.getByRole('link', { name: 'home-link' })
    expect(homeLink).toHaveAttribute('href', getPagePath('Home'))
  })

  test('renders all nav route links except Home', () => {
    renderComponent()
    waitFor(() => {
      menuItems.forEach(item => {
        const menuItem = within(screen.getByTestId('desktop-menu')).getByText(
          item.name
        )
        expect(menuItem).toBeInTheDocument()
        expect(menuItem).toHaveAttribute('href', getPagePath(item.name))
      })
    })
  })

  test('renders hamburger menu button on mobile', () => {
    renderComponent()
    const hamburgerButton = screen.getByRole('button', { name: 'mobile menu' })
    fireEvent.click(hamburgerButton)
    waitFor(() => {
      menuItems.forEach(item => {
        const menuItem = within(screen.getByTestId('mobile-menu')).getByText(
          item.name
        )
        expect(menuItem).toBeInTheDocument()
        expect(menuItem).toHaveAttribute('href', getPagePath(item.name))
      })
    })
  })
})
