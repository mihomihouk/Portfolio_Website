import React from 'react'
import { AnalyticsPage } from '../_components/analytics-page'
import { AnalyticsService } from '../../services/analytics'

export default async function Analytics() {
  const data = await AnalyticsService.getVisitorAnalytics()
  return <AnalyticsPage data={data} />
}
