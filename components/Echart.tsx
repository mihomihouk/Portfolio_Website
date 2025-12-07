'use client'

import { Box } from '@chakra-ui/react'
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

type EChartProps = {
  option: echarts.EChartsOption
  width?: string
  height?: string
}

export function EChart({
  option,
  width = '100%',
  height = '400px'
}: EChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Initialize chart
    chartInstance.current = echarts.init(chartRef.current)
    chartInstance.current.setOption(option)

    // Resize handler
    const handleResize = () => {
      chartInstance.current?.resize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chartInstance.current?.dispose()
    }
  }, [option])

  return <Box ref={chartRef} width={width} height={height} />
}
