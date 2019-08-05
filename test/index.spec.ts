import compiler from './compiler'

jest.setTimeout(30000)

const result = [
  'export const fr = {\n',
  '  "common": {\n',
  '    "common": {\n',
  '      "helloName": "Bonjour {name} !"\n',
  '    }\n',
  '  }\n',
  '}\n',
  'export const en = {\n',
  '  "common": {\n',
  '    "common": {\n',
  '      "helloName": "Hello {name}!"\n',
  '    }\n',
  '  }\n',
  '}\n',
].join('')

describe('i18nXlsxLoader', () => {
  it('should say hi', async () => {
    const stats: any = await compiler('fixtures/trads.xlsx')

    const output = stats.toJson().modules[0].source
    console.info(output) // eslint-disable-line

    expect(output).toBe(result)
  })
})
