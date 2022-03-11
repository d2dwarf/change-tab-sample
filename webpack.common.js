const { join } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  entry: {
    app: join(__dirname, 'src', 'entry.ts')
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      title: 'Change TAB Sample.',
      filename: 'index.html',
      scriptLoading: 'defer'
    })
  ],
  resolve: {
    extensions: [
      '.js', '.jsx', '.ts', '.tsx'
    ]
  }
})