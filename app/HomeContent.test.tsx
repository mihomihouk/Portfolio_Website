import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { HomeContent } from './HomeContent'
import { renderWithProviders } from '../tests/utils/test-utils'
import { createMockAsset, createMockProject, mockDescription } from '../tests/factories/contentful'

const mockImageURL = 'https://example.com/profile.png'

const mockProjects = [
    createMockProject('1', {
        fields: {
          title: 'Mock Project 1',
          date: '2025-12-08T12:00:00Z' as `${number}-${number}-${number}T${number}:${number}:${number}Z`,
          thumbnail: createMockAsset(),
          abstract: 'This is a mock project abstract.',
          stack: 'React, TypeScript',
          description: mockDescription,
          url: 'https://example.com',
          articleUrl: 'https://example.com/article',
          slug: 'an'
        }
      }),
      createMockProject('2', {
        fields: {
          title: 'Mock Project 2',
          date: '2025-12-08T12:00:00Z' as `${number}-${number}-${number}T${number}:${number}:${number}Z`,
          thumbnail: createMockAsset(),
          abstract: 'This is a mock project abstract.',
          stack: 'React, TypeScript',
          description: mockDescription,
          url: 'https://example.com',
          articleUrl: 'https://example.com/article',
          slug: 'an'
        }
      })
]

describe('HomeContent', () => {
  function renderComponent(projects = mockProjects, imageURL = mockImageURL) {
    renderWithProviders(<HomeContent projects={projects} imageURL={imageURL} />)
  }

  test('renders hero text', () => {
    renderComponent()
    expect(screen.getByText("Hi, I'm Miho.")).toBeInTheDocument()
  })

  test('renders profile image', () => {
    renderComponent()
    const img = screen.getByAltText('Profile Image') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toBe(mockImageURL)
  })

  test('renders social links', () => {
    renderComponent()
  
    const socialLinks = [
      { label: 'My github page', href: 'https://github.com/mihomihouk' },
      { label: 'My linkedIn page', href: 'https://www.linkedin.com/in/miho-inagaki/' },
      { label: 'My dev community page', href: 'https://dev.to/mihomihouk' }
    ]
  
    socialLinks.forEach(({ label, href }) => {
      const linkButton = screen.getByLabelText(label)
      expect(linkButton.closest('a')).toHaveAttribute('href', href)
    })
  })

  test('renders project list', () => {
    renderComponent()
    mockProjects.forEach(project => {
      expect(screen.getByText(project.fields.title)).toBeInTheDocument()
    })
  })
})
