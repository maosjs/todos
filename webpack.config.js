'use strict';
/* This is the only webpack config file for now */
// There will be different configs for 'PRODUCTION' & 'DEVELOPMENT' later.
const webpack = require('webpack');
const path = require('path');

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
    new webpack.HotModuleReplacementPlugin()
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
