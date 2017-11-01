'use strict';

const webpack = require('webpack')
const path = require('path');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js'); //it includes the HMR plugin

let serverOptions = {
  hot: true,
  inline: true,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  port: 8080,
  contentBase: path.join(process.cwd(), './dist/'),
  host: '0.0.0.0',
  disableHostCheck: true
};

webpackDevServer.addDevServerEntrypoints(config, serverOptions);

const compiler = webpack(config);

const server = new webpackDevServer(compiler, serverOptions);

server.listen(serverOptions.port, () => {
  console.log('App dev server listening on ', serverOptions.port);
});
