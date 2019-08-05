import { WorkBook } from 'xlsx'
import concatKeysWithSheetName from './concatKeysWithSheetName'

export default function(workbook: WorkBook) {
  return workbook.SheetNames.reduce((finalArray: any[], sheetName: string) => {
    const sheetRows: any[] = concatKeysWithSheetName(workbook, sheetName)

    finalArray.push(...sheetRows)

    return finalArray
  }, [])
}
