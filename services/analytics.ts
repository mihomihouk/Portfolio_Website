type PageViewTrackData = {
  path: string
  referrer?: string
  userAgent?: string
}

export class AnalyticsService {
  constructor() {}

  public static async trackPageView(data: PageViewTrackData) {
    try {
      await fetch('http://localhost:4000/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, event: 'page_view' })
      })
    } catch (error) {
      console.error(error)
    }
  }
}
