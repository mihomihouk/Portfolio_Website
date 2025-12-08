import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../tests/utils/test-utils'
import { Badge, BadgeProps } from './Badge'

type BadgeTestProps = { color: BadgeProps['color']; text: BadgeProps['text']} & Partial<BadgeProps>

describe('Badge', () => {
    function renderComponent({ color, text, ...props }:BadgeTestProps) {
        renderWithProviders(<Badge color={color} text={text} {...props} />)
      }

  test('renders with given text', () => {
    renderComponent({ color: 'orange', text: 'Test Badge' })
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  test('applies color and fontWeight props', () => {
    renderComponent({ color: 'gray', text: 'Styled Badge', fontWeight: 'bold', ml: 2 })
    const badge = screen.getByText('Styled Badge')

    const styles = getComputedStyle(badge)
    expect(styles.marginLeft).toBe('var(--chakra-spacing-2)')
    expect(styles.fontWeight).toBe('var(--chakra-font-weights-bold)')
  })
})
