const path = require('path')
const webpack = require('webpack')
const memoryfs = require('memory-fs')

export default (fixture: any) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: path.resolve('test/fixtures/trads.xlsx'),
          use: {
            loader: path.resolve(__dirname, '../dist/index.js'),
            options: {},
          },
        },
      ],
    },
  })

  compiler.outputFileSystem = new memoryfs()

  return new Promise((resolve, reject) => {
    compiler.run((err: any, stats: any) => {
      if (err) reject(err)
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors))

      resolve(stats)
    })
  })
}
