/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = require('./webpack.base.config')({
  mode: 'development',
  // Add hot reloading in development
  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    path.join(process.cwd(), 'app/src/index.js')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/public/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'app/public/views/basic.html',
      filename: 'views/basic.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename:'css/[id].css',
    })
  ],
  devtool: 'eval-source-map',
  performance: {
    hints: false
  }
});
