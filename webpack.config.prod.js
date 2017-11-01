'use strict';

const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
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
