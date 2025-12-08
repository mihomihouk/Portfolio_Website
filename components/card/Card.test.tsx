import React from 'react'
import { screen } from '@testing-library/react'
import { Card } from './Card'
import { describe, expect, test } from 'vitest'
import { renderWithProviders } from '../../tests/utils/test-utils'

describe('Card', () => {
  function renderComponent(children: React.ReactNode) {
    renderWithProviders(<Card>{children}</Card>)
  }

  test('renders children correctly', () => {
    renderComponent(<div>Card Content</div>)
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

})
