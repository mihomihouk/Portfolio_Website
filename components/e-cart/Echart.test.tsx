import { screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { renderWithProviders } from '../../tests/utils/test-utils'

import * as echarts from 'echarts'
import { EChart } from './Echart'

vi.mock('echarts', () => {
  return {
    init: vi.fn().mockReturnValue({
      setOption: vi.fn(),
      resize: vi.fn(),
      dispose: vi.fn()
    })
  }
})

describe('EChart', () => {
  const mockOption: echarts.EChartsOption = {
    xAxis: { type: 'category', data: ['Mon', 'Tue'] },
    yAxis: { type: 'value' },
    series: [{ data: [120, 200], type: 'bar' }]
  }

  function renderComponent(option = mockOption) {
    renderWithProviders(<EChart option={option} />)
  }

  test('calls echarts.init and setOption', () => {
    renderComponent()
    expect(echarts.init).toHaveBeenCalled()
    const chartInstance = (echarts.init as any).mock.results[0].value
    expect(chartInstance.setOption).toHaveBeenCalledWith(mockOption)
  })

  test('resizes on window resize', () => {
    renderComponent()
    const chartInstance = (echarts.init as any).mock.results[0].value
    window.dispatchEvent(new Event('resize'))
    expect(chartInstance.resize).toHaveBeenCalled()
  })
})
