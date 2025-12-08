
// ECharts requires a real DOM with non-zero width/height.
// jsdom (used in Vitest/Testing Library) does not calculate layout, so rendering a real chart
// would fail with "Can't get DOM width or height" errors. This mock allows tests to check
// headings, data, and structure without rendering the actual chart.
export function EChart () {
  return <div data-testid="echart-mock" />
}