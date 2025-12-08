import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Footer } from './Footer'
import dayjs from 'dayjs'
import { renderWithProviders } from '../../../tests/utils/test-utils'

describe('Footer', () => {
  const currentYear = dayjs().year()
  const copyRightText = `© ${currentYear} Miho Inagaki`

  function renderComponent() {
    renderWithProviders(<Footer />)
  }

  test('renders the copyright text', () => {
    renderComponent()
    expect(screen.getByText(copyRightText)).toBeInTheDocument()
  })

  test('renders the dot separator', () => {
    renderComponent()
    expect(screen.getByText('·')).toBeInTheDocument()
  })

  test('renders the privacy policy link', () => {
    renderComponent()
    const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' })
    expect(privacyLink).toBeInTheDocument()
    expect(privacyLink).toHaveAttribute('href', '/privacy')
  })
})
