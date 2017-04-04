var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var config = require('./webpack.base.config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

config.entry = {
  AlbumShowcase: './src'
};

config.externals = [nodeExternals()];

config.plugins = [
  new webpack.optimize.UglifyJsPlugin(),
  new ExtractTextPlugin("[name].css"),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
  })
];

config.module.loaders = [{
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.js$|.jsx$/,
  loader: 'babel-loader',
  exclude: [/node_modules/, /lib/]
}, {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css!sass?includePaths[]=./node_modules')
}];

config.output = {
  path: __dirname + '/lib',
  filename: '[name].js',
  library: ['album-showcase', '[name]'],
  libraryTarget: 'umd'
};

module.exports = config;
