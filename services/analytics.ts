import { config } from "../config"

type PageViewTrackRequestData = {
  path: string
  referrer?: string
  userAgent?: string
}

export type VisitorAnalyticsResponseData = {
  visitorCount: {
      visits: number
      date: string
  }[]
  pagePopularity:{
      visits: number
      page: string
  }[]
}


export class AnalyticsService {
  constructor() {}

  public static async logPageView(data: PageViewTrackRequestData) {
    try {
      await fetch(config.logPageView, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, event: 'page_view' })
      })
    } catch (error) {
      console.error(error)
    }
  }

  public static async getVisitorAnalytics(): Promise<VisitorAnalyticsResponseData>{
    try{
      const searchParam = new URLSearchParams({daysAgo: '30'})
      const requestUrl = `${config.getVisitorAnalytics}?${searchParam}`
      return (await fetch(requestUrl)).json() 
    }catch(err){
      console.error(err)
      throw new Error('Failed to get visitor analytics')
    }
  }
}
