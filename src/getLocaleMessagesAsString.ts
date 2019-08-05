import getNestedKeys from './getNestedKeys'

export default function(locales: any[], translations: any[]) {
  return locales.reduce((concatMessages: string, locale: string) => {
    const localeMessages = getNestedKeys(translations, locale)
    const localeMessagesJsonString = JSON.stringify(localeMessages, null, 2)

    concatMessages += `export const ${locale} = ${localeMessagesJsonString}\n`

    return concatMessages
  }, '')
}
