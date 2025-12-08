import { screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { SecondaryText, SecondaryTextProps } from './SecondaryText'
import { renderWithProviders } from '../../tests/utils/test-utils';

describe('SecondaryText', () => {
  function renderComponent(props: SecondaryTextProps) {
    renderWithProviders(<SecondaryText {...props} />)
  }

  test('renders the text', () => {
    renderComponent({ text: 'Hello world' })
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  test('applies margin props', () => {
    renderComponent({ text: 'With margins', mb: '4' })
    const el = screen.getByText('With margins')
    const style = getComputedStyle(el)
    expect(style.marginBottom).toBe('var(--chakra-spacing-4)') 
    // mx is omitted in this test as I could not figure out how it's reflected in compted styles.
  })

  test('applies default styles', () => {
    renderComponent({ text: 'Default styles' })
    const el = screen.getByText('Default styles')
    const style = getComputedStyle(el)
    expect(style.color).toBe('var(--chakra-colors-gray-500)') 
    expect(style.fontSize).toBe('var(--chakra-font-sizes-sm)') 
  })
})
