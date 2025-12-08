import { screen } from '@testing-library/react'
import { ProjectsList } from './ProjectsList'
import { describe, test, expect } from 'vitest'
import { createMockProject, createMockAsset, mockDescription } from '../../tests/factories/contentful'
import { renderWithProviders } from '../../tests/utils/test-utils'

describe('ProjectsList', () => {
  const mockProjects = [
    createMockProject('1', {
      fields: {
        title: 'Project One',
        slug: 'project-one',
        abstract: 'Abstract One',
        date: '2025-12-08T12:00:00Z' as `${number}-${number}-${number}T${number}:${number}:${number}Z`,
        stack: 'React',
        thumbnail: createMockAsset(),
        description: mockDescription,
        url: 'https://example.com',
        articleUrl: 'https://example.com/article'
      }
    }),
    createMockProject('2', {
      fields: {
        title: 'Project Two',
        slug: 'project-two',
        abstract: 'Abstract Two',
        date: '2025-12-08T12:00:00Z' as `${number}-${number}-${number}T${number}:${number}:${number}Z`,
        stack: 'TypeScript',
        thumbnail: createMockAsset(),
        description: mockDescription,
        url: 'https://example2.com',
        articleUrl: 'https://example2.com/article'
      }
    })
  ]

  function renderComponent() {
    renderWithProviders(<ProjectsList projects={mockProjects} />)
  }

  test('renders project titles and abstracts', () => {
    renderComponent()
  
    const expectedTexts = [
      'Project One',
      'Abstract One',
      'Project Two',
      'Abstract Two'
    ]
  
    expectedTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument()
    })
  })

  test('renders images with correct alt text', () => {
    renderComponent()
  
    const altTexts = ['Project One', 'Project Two']
  
    altTexts.forEach(alt => {
      expect(screen.getByAltText(alt)).toBeInTheDocument()
    })
  })

  test('links to the correct project page', () => {
    renderComponent()
  
    const expectedHrefs = ['/projects/project-one', '/projects/project-two']
    const links = screen.getAllByRole('link')
  
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expectedHrefs[index])
    })
  })
})
