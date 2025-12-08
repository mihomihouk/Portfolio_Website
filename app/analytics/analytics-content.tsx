'use client'

import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { PageTitle } from '../../components/PageTitle'
import { PageWrapper } from '../_layout/page-wrapper'
import * as echarts from 'echarts'
import { formatDate } from '../../utils/date'
import { pathToDisplayName } from '../../utils/path'
import { EChart } from '../../components/Echart'
import { chartColors, chartTheme } from '../../config/chart'
import { createGradient } from '../../utils/chart'
import { Card } from '../../components/Card'
import { VisitorAnalyticsResponseData } from '../../services/analytics'

export function AnalyticsContent({
  data
}: {
  data: VisitorAnalyticsResponseData
}) {
  const { visitorCount, pagePopularity } = data

  return (
    <PageWrapper>
      <PageTitle pageTitle="Analytics" />
      <Text color="gray.500" fontSize="sm" mb={6}>
        Showing data from the past 30 days
      </Text>
      {/* Charts */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        <ChartCard title="Recent Visitors">
          <VisitorCountChart visitorCount={visitorCount} />
        </ChartCard>
        <ChartCard title="Page Views">
          <PageViewChart pagePopularity={pagePopularity} />
        </ChartCard>
      </SimpleGrid>
    </PageWrapper>
  )
}

function ChartCard({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      {children}
    </Card>
  )
}

function VisitorCountChart({
  visitorCount
}: {
  visitorCount: VisitorAnalyticsResponseData['visitorCount']
}) {
  const dates = visitorCount.map(d => formatDate(d.date, 'D MMM'))
  const visits = visitorCount.map(d => d.visits)

  const option: echarts.EChartsOption = {
    grid: {
      left: 50,
      right: 20,
      top: 20,
      bottom: 40
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // Line starts from edge
      data: dates,
      axisLine: chartTheme.axisLine,
      axisTick: chartTheme.axisTick,
      axisLabel: chartTheme.axisLabel
    },
    yAxis: {
      type: 'value',
      axisLine: chartTheme.axisLine,
      axisTick: chartTheme.axisTick,
      splitLine: chartTheme.splitLine,
      axisLabel: chartTheme.axisLabel
    },
    series: [
      {
        name: 'Visitors',
        type: 'line',
        smooth: 0.4, // Smooth curve (0-1)
        symbol: 'none', // Hide dots
        data: visits,
        lineStyle: {
          width: 3,
          color: chartColors.primary
        },
        areaStyle: {
          color: createGradient(chartColors.primary)
        }
      }
    ]
  }

  return <EChart option={option} />
}

function PageViewChart({
  pagePopularity
}: {
  pagePopularity: VisitorAnalyticsResponseData['pagePopularity']
}) {
  const allPages: string[] = []
  const visitorCounts: number[] = []
  for (const pageData of pagePopularity) {
    const pageDisplayName = pathToDisplayName(pageData.page)
    if (pageDisplayName) {
      allPages.push(pageDisplayName)
      visitorCounts.push(pageData.visits)
    }
  }

  const option: echarts.EChartsOption = {
    xAxis: {
      type: 'category',
      data: allPages,
      axisLine: chartTheme.axisLine,
      axisTick: chartTheme.axisTick,
      axisLabel: {
        ...chartTheme.axisLabel,
        interval: 0,
        rotate: allPages.length > 4 ? 30 : 0 // Rotate if many items
      }
    },
    yAxis: {
      type: 'value',
      axisLine: chartTheme.axisLine,
      axisTick: chartTheme.axisTick,
      splitLine: chartTheme.splitLine,
      axisLabel: chartTheme.axisLabel
    },
    series: [
      {
        data: visitorCounts,
        type: 'bar',
        itemStyle: {
          color: createGradient(chartColors.secondary, [0.8, 0.4])
        }
      }
    ]
  }

  return <EChart option={option} />
}
