'use strict';

const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const bundleanalyser = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var config = {

  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
    vendor: ['react', 'react-dom']
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new bundleanalyser({
    //   analyzerMode: 'static'
    // }),
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
