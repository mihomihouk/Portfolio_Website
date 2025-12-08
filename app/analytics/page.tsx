import { AnalyticsContent } from './AnalyticsContent'
import { AnalyticsService } from '../../services/analytics'

export default async function Analytics() {
  const data = await AnalyticsService.getVisitorAnalytics()
  return <AnalyticsContent data={data} />
}
