import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { ProjectContent } from './ProjectContent'
import { renderWithProviders } from '../../../tests/utils/test-utils'
import {
  createMockAsset,
  createMockProject,
  mockDescription
} from '../../../tests/factories/contentful'

const mockProject = createMockProject('1', {
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
})

describe('ProjectContent', () => {
  function renderComponent(project = mockProject) {
    renderWithProviders(<ProjectContent project={project} />)
  }

  test('renders project title in breadcrumb', () => {
    renderComponent()
    expect(screen.getByTestId('project-breadcrumb')).toHaveTextContent(
      mockProject.fields.title
    )
  })

  test('renders project date badge', () => {
    renderComponent()
    expect(
      screen.getByText(mockProject.fields.date.toUpperCase())
    ).toBeInTheDocument()
  })

  test('renders project abstract', () => {
    renderComponent()
    expect(screen.getByText(mockProject.fields.abstract)).toBeInTheDocument()
  })

  test('renders stack', () => {
    renderComponent()
    expect(screen.getByText(mockProject.fields.stack)).toBeInTheDocument()
  })

  test('renders thumbnail image with correct alt', () => {
    renderComponent()
    const img = screen.getByAltText('project.image') as HTMLImageElement
    expect(img).toBeInTheDocument()
  })

  test('renders website and article links', () => {
    renderComponent()
    const websiteLink = screen.getByTestId('website-link')
    expect(websiteLink).toHaveAttribute('href', mockProject.fields.url)

    const articleLink = screen.getByTestId('article-link')
    expect(articleLink).toHaveAttribute('href', mockProject.fields.articleUrl)
  })
})
