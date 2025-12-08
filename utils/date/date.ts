import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/en-gb'
import 'dayjs/locale/en'
import 'dayjs/locale/ja'

dayjs.extend(localizedFormat)

export function formatDate(dateStr: string, format: string): string {
  const supportedLocales = ['en-gb', 'en', 'ja']
  const userLocale =
    typeof navigator !== 'undefined'
      ? navigator.language.toLowerCase()
      : 'en-gb'
  const locale = supportedLocales.includes(userLocale) ? userLocale : 'en-gb'
  return dayjs(dateStr).locale(locale).format(format)
}
