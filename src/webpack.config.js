const path = require('path');

var config = {
  devtool: 'cheap-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  },

  entry: path.resolve(__dirname, './client/app.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  plugins: [],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './client'),
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
