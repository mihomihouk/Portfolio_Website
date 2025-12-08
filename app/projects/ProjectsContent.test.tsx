import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectsContent } from './ProjectsContent'
import type { Projects } from '../../types/contentful'
import { createMockProject } from '../../tests/factories/contentful'
import { renderWithProviders } from '../../tests/utils/test-utils'

export const mockProjects: Projects = [
  createMockProject('1'),
  createMockProject('2')
]

describe('<ProjectsContent />', () => {
  function renderComponent() {
    return renderWithProviders(<ProjectsContent projects={mockProjects} />)
  }

  test('renders the page title', () => {
    renderComponent()
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  test('passes and displays project items', () => {
    renderComponent()

    mockProjects.forEach(project => {
      expect(screen.getByText(project.fields.title)).toBeInTheDocument()
    })
  })
})
