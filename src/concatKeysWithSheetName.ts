import { utils, WorkBook } from 'xlsx'

export default function(workbook: WorkBook, sheetName: string) {
  return utils.sheet_to_json(workbook.Sheets[sheetName]).map((row: any) => ({
    ...row,
    key: `${sheetName}.${row.key}`,
  }))
}
