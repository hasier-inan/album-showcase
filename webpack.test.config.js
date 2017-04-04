var config = require('./webpack.base.config');

config.module.loaders = [{
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.js$|.jsx$/,
  loader: 'babel-loader',
  exclude: [/node_modules/, /lib/]
}, {
  test: /\.scss$/,
  exclude: /core\.scss$/,
  loader: 'style!css!sass?includePaths[]=./node_modules'
}];

module.exports = config;
