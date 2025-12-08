import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../tests/utils/test-utils'
import { AboutContent } from './AboutContent'

function renderComponent(imageURL: string) {
  renderWithProviders(<AboutContent imageURL={imageURL} />)
}

describe('AboutContent', () => {
  test('renders a main image', () => {
    const imageSrc = 'https://test.png'
    renderComponent(imageSrc)
    expect(
      screen.getByRole('img', { name: 'Profile Image' })
    ).toBeInTheDocument()
  })
})
