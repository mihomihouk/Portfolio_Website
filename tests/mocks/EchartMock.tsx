// ECharts requires a real DOM with non-zero width/height.
// jsdom (used in Vitest/Testing Library) does not calculate layout, so rendering a real chart
// would fail with "Can't get DOM width or height" errors. This mock allows tests to check
// headings, data, and structure without rendering the actual chart.
export const EChart = ({ option, width, height }: any) => {
  return (
    <div data-testid="echart-mock" style={{ width, height }}>
      Mock EChart
    </div>
  )
}
