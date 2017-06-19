const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: {
    app: './src/main'
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.sass', '.scss', '.vue'],
    alias: {
      '@': './src'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue Start',
      template: path.resolve(__dirname, './index.html')
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:4000`
    })
  ],
  devServer: {
    contentBase: './src',
    host: '0.0.0.0',
    port: 4000,
    // hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true
  }
}
