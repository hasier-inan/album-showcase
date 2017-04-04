const config = require('./webpack.base.config.js');
var renderer = require('./markdown-render.js');

config.markdownLoader = { renderer: renderer };

config.entry = ['./preview.js'];
config.output = {
  path: '/',
  publicPath: '/assets/',
  filename: 'bundle.js'
};

config.module.loaders = [{
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.js$|.jsx$/,
  loader: 'babel-loader',
  exclude: [/node_modules/, /lib/]
}, {
  test: /\.css$/,
  loader: 'style!css',
}, {
  test: /.scss/,
  loaders: [
    'style',
    'css',
    'sass?includePaths[]=./node_modules'
  ]
}, {
  test: /\.md$/,
  exclude: [/lib/],
  loader: 'html!markdown'
}];

module.exports = config;