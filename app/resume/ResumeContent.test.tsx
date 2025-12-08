import { describe, test, expect } from 'vitest'
import { screen, within, waitFor} from '@testing-library/react'
import { ResumeContent } from './ResumeContent'
import { renderWithProviders } from '../../tests/utils/test-utils'

describe('ResumeContent', () => {
  const props = {
    agileLogoURL: 'https://example.com/agile.png',
    chakraUILogoURL: 'https://example.com/chakra.png',
    contentfulLogoURL: 'https://example.com/contentful.png'
  }
  const sections = ['Work History', 'Programming Skill', 'Interests']

  function renderComponent(){
    renderWithProviders(<ResumeContent {...props} />)
  }

  test('renders page title', () => {
    renderComponent()
    expect(screen.getByText('Resume')).toBeInTheDocument()
  })

  test('renders necessary section', () => {
    renderComponent()
    sections.forEach((section)=>{
        expect(screen.getByRole('heading', {name:section})).toBeInTheDocument()
    })
  })

  test('renders left scroll menu', () => {
    renderComponent()
    waitFor(()=>{
        sections.forEach((section)=>{
            expect(within(screen.getByTestId('resume-side-scroll')).getByRole('heading', {name:section})).toBeInTheDocument()
        })
    })
  })
})
