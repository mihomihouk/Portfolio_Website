import { HexColor } from '../types/color'

export const chartColors: Record<string, HexColor> = {
  primary: '#3b82f6', // Blue
  secondary: '#10b981', // Green
  accent: '#8b5cf6', // Purple
  warning: '#f59e0b' // Amber
}

export const chartTheme = {
  axisLabel: { color: '#666' },
  axisLine: { show: false },
  axisTick: { show: false },
  splitLine: { lineStyle: { color: '#f0f0f0' } },
  grid: {
    left: 50,
    right: 20,
    top: 20,
    bottom: 40
  }
}
