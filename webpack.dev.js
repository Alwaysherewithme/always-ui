const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: {
    index: './example/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'example/public/index.html'),
      filename: 'index.html',
      chunks: ['index']
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    static: [
      path.resolve(__dirname, 'example/public'),
      path.resolve(__dirname, 'dist')
    ]
  },
  devtool: 'source-map',
}
