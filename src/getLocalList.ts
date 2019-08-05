export default function(translations: any[]) {
  return translations
    .reduce((finalArray: any[], row: any) => {
      return [...finalArray, ...Object.keys(row)]
    }, [])
    .filter((key: string) => key !== 'key')
    .reduce((filtered: any[], el: any) => {
      if (!filtered.includes(el)) {
        filtered.push(el)
      }
      return filtered
    }, [])
}
