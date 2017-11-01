'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'cheap-source-map',

  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/index.js')
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
