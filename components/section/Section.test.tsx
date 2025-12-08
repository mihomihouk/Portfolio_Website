import { screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { Section, SectionProps } from './Section'
import { renderWithProviders } from '../../tests/utils/test-utils'

describe('Section', () => {
  function renderComponent(props: SectionProps) {
    renderWithProviders(<Section {...props} />)
  }

  // Some tests are omitted as framer-motion animation values cannot be asserted

  test('renders children', () => {
    renderComponent({ children: <div>Test Content</div> })
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('applies id if provided', () => {
    renderComponent({ children: <div>Content</div>, id: 'section-1' })
    const section = screen.getByTestId('section-1')
    expect(section).toHaveAttribute('id', 'section-1')
  })
})
