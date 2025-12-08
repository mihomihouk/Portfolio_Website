import { screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'
import { describe, test, expect } from 'vitest'
import { renderWithProviders } from '../tests/utils/test-utils'

describe('PageTitle', () => {
  function renderComponent(title = 'Test Page') {
    renderWithProviders(<PageTitle pageTitle={title} />)
  }

  test('renders the page title', () => {
    renderComponent('My Test Page')
    const heading = screen.getByRole('heading', { name: /My Test Page/i })
    expect(heading).toBeInTheDocument()
  })

})