import * as objectPath from 'object-path'

export default function(translations: any[], locale: string) {
  return translations.reduce((finalObj: any[], row: any) => {
    objectPath.set(finalObj, row.key, row[locale])
    return finalObj
  }, {})
}
