import { HexColor } from '../../types/color'

export function createGradient(
  hexColor: HexColor,
  opacity: [number, number] = [0.3, 0.05]
) {
  // Extract RGB from hex
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  return {
    type: 'linear' as const,
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      { offset: 0, color: `rgba(${r}, ${g}, ${b}, ${opacity[0]})` },
      { offset: 1, color: `rgba(${r}, ${g}, ${b}, ${opacity[1]})` }
    ]
  }
}
