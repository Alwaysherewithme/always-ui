const path = require('path')
const { VueLoaderPlugin }= require('vue-loader')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    aside: './packages/aside',
    button: './packages/button',
    container: './packages/container',
    header: './packages/header',
    main: './packages/main'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: {
      name: 'AlwaysUI',
      type: 'umd'
    },
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devtool: 'source-map',
  externals: ['vue']
}
