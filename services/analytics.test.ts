import { vi, describe, test, expect, beforeEach, afterEach } from 'vitest'
import { config } from '../config'
import { AnalyticsService, VisitorAnalyticsResponseData } from './analytics'

describe('AnalyticsService', () => {
  const fetchMock = vi.fn()
  const originalFetch = global.fetch

  beforeEach(() => {
    global.fetch = fetchMock as any
    fetchMock.mockReset()
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  describe('logPageView', () => {
    test('should call fetch with correct arguments', async () => {
      fetchMock.mockResolvedValueOnce({ ok: true })

      const data = {
        path: '/home',
        referrer: 'https://google.com',
        userAgent: 'Mozilla/5.0'
      }
      await AnalyticsService.logPageView(data)

      expect(fetchMock).toHaveBeenCalledWith(config.logPageView, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, event: 'page_view' })
      })
    })
  })

  describe('getVisitorAnalytics', () => {
    test('should fetch visitor analytics and return data', async () => {
      const mockData: VisitorAnalyticsResponseData = {
        visitorCount: [{ visits: 10, date: '2025-12-08' }],
        pagePopularity: [{ visits: 5, page: '/home' }]
      }

      fetchMock.mockResolvedValueOnce({
        json: async () => mockData
      })

      const result = await AnalyticsService.getVisitorAnalytics()
      expect(result).toEqual(mockData)
      expect(fetchMock).toHaveBeenCalledWith(
        `${config.getVisitorAnalytics}?daysAgo=30`
      )
    })

    test('should throw error if fetch fails for visitor analytics', async () => {
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      // Suppress logs
      fetchMock.mockRejectedValueOnce(new Error('Network error'))

      await expect(AnalyticsService.getVisitorAnalytics()).rejects.toThrow(
        'Failed to get visitor analytics'
      )

      consoleErrorSpy.mockRestore()
    })
  })
})
