import { describe, test, expect } from 'vitest'
import { createGradient } from './chart'

describe('createGradient', () => {
  test('creates a linear gradient with default opacity', () => {
    const result = createGradient('#FF0000') // red

    expect(result).toEqual({
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: 'rgba(255, 0, 0, 0.3)' },
        { offset: 1, color: 'rgba(255, 0, 0, 0.05)' }
      ]
    })
  })

  test('creates a gradient with custom opacity', () => {
    const result = createGradient('#00ff00', [0.5, 0.2]) // green

    expect(result.colorStops[0].color).toBe('rgba(0, 255, 0, 0.5)')
    expect(result.colorStops[1].color).toBe('rgba(0, 255, 0, 0.2)')
  })

  test('handles lowercase hex codes', () => {
    const result = createGradient('#0000ff') // blue

    expect(result.colorStops[0].color).toBe('rgba(0, 0, 255, 0.3)')
    expect(result.colorStops[1].color).toBe('rgba(0, 0, 255, 0.05)')
  })
})
