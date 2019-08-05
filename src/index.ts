import { readFile } from 'xlsx'
import getAllTranslationsAsJson from './getAllTranslationsAsJson'
import getLocaleList from './getLocalList'
import getLocaleMessagesAsString from './getLocaleMessagesAsString'

export default function i18nXlsxLoader(this: any) {
  const workbook = readFile(this.resourcePath)
  const translations = getAllTranslationsAsJson(workbook)
  const locales = getLocaleList(translations)

  return getLocaleMessagesAsString(locales, translations)
}
