'use client'

import { PageTitle } from '../../components/PageTitle'
import { PageWrapper } from './page-wrapper'

type VisitorAnalyticsResponseData = {
    visitorCount: {
        visits: number
        date: string
    }
    pagePopularity:{
        visits: number
        page: string
    }
}

export function AnalyticsPage({data}:{data:VisitorAnalyticsResponseData}) {
    const {visitorCount, pagePopularity} = data

  return (
    <PageWrapper>
        <PageTitle pageTitle="Analytics" />
    </PageWrapper>
  )
}