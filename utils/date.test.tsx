import { describe, beforeAll, test, expect } from 'vitest'
import { formatDate } from './date'
import dayjs from 'dayjs'

describe('formatDate', () => {
  const testDate = '2025-12-08T12:00:00Z'

  beforeAll(() => {
    // Mock navigator.language for testing different locales
    Object.defineProperty(global, 'navigator', {
      value: { language: 'en-gb' },
      writable: true
    })
  })

  test('formats date with default locale en-gb', () => {
    const result = formatDate(testDate, 'LL')
    expect(result).toBe(dayjs(testDate).locale('en-gb').format('LL'))
  })

  test.each([
    ['en', 'en'],
    ['ja', 'ja'],
  ])(
    'formats date correctly for locale %s',
    (navigatorLang, expectedLocale) => {
      Object.defineProperty(global.navigator, 'language', { value: navigatorLang })
      const result = formatDate(testDate, 'LL')
      expect(result).toBe(dayjs(testDate).locale(expectedLocale).format('LL'))
    }
  )

  test('falls back to en-gb for unsupported locale', () => {
    Object.defineProperty(global.navigator, 'language', { value: 'fr' })
    const result = formatDate(testDate, 'LL')
    expect(result).toBe(dayjs(testDate).locale('en-gb').format('LL'))
  })
})
