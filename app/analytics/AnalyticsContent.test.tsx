import { describe, expect, test, vi } from 'vitest'
import { renderWithProviders } from '../../tests/utils/test-utils'
import { AnalyticsContent } from './AnalyticsContent'
import { screen } from '@testing-library/react'
import { VisitorAnalyticsResponseData } from '../../services/analytics'

vi.mock('../../components/Echart', async () => {
  return {
    EChart: (await import('../../tests/mocks/EchartMock')).EChart
  }
})

describe('AnalyticsContent', () => {
  function renderComponent(data: VisitorAnalyticsResponseData) {
    return renderWithProviders(<AnalyticsContent data={data} />)
  }

  function getMockData(): VisitorAnalyticsResponseData {
    return {
      visitorCount: [
        { visits: 10, date: new Date('2025-12-08T12:00:00Z').toISOString() }
      ],
      pagePopularity: [{ visits: 10, page: '/about' }]
    }
  }

  test('renders visitor count chart', () => {
    renderComponent(getMockData())
    expect(screen.getByText('Recent Visitors')).toBeInTheDocument()
  })

  test('renders page view chart', () => {
    renderComponent(getMockData())
    expect(screen.getByText('Page Views')).toBeInTheDocument()
  })
})
