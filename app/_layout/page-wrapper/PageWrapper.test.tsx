import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { PageWrapper } from './PageWrapper'

describe('PageWrapper', () => {
  function renderComponent(
    children: React.ReactNode = <div>Test Content</div>
  ) {
    return render(<PageWrapper>{children}</PageWrapper>)
  }

  test('renders children correctly', () => {
    const childText = 'Hello World'
    renderComponent(<div>{childText}</div>)
    expect(screen.getByText(childText)).toBeInTheDocument()
  })

  test('renders motion.article container', () => {
    renderComponent()
    const article = screen.getByRole('article')
    expect(article).toBeInTheDocument()
  })

  test('contains Global styles component', () => {
    renderComponent()
    // Since Global renders an Emotion component, we can query by its class
    const styleTag = document.querySelector('style[data-emotion]')
    expect(styleTag).toBeTruthy()
    expect(styleTag?.textContent).toContain('.grid-item-thumbnail')
  })
})
