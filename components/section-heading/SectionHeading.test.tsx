import { screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { renderWithProviders } from '../../tests/utils/test-utils'
import { SectionHeading, SectionHeadingProps } from './SectionHeading'

describe('SectionHeading', () => {
  function renderComponent(props: SectionHeadingProps) {
    renderWithProviders(<SectionHeading {...props} />)
  }

  test('renders the title text', () => {
    renderComponent({ title: 'My Section' })
    expect(screen.getByText('My Section')).toBeInTheDocument()
  })

  test('applies custom my and textAlign props', () => {
    renderComponent({ title: 'My Section', my: 6, textAlign: 'center' })
    const heading = screen.getByText('My Section')
    expect(heading).toHaveStyle({
      marginTop: '6',
      marginBottom: '6',
      textAlign: 'center'
    })
  })
})
