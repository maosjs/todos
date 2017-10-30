const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(3000, () => {
  console.log('Express/webpack server is listening on port 3000');
});
