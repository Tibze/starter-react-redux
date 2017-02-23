const path = require('path');
const webpack = require('webpack');
const WebpackStrip = require('webpack-strip');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const APP_DIR = path.resolve(__dirname, '../src/');
const BUILD_DIR = path.resolve(__dirname, '../dist/');
const BUILD_IMAGES = './assets/images/';
const BUILD_SVG = './assets/svg/';

const conf = require('../config/config.json');

var config = {
  context: APP_DIR,
  entry: './index.js',
  module: {
    loaders: [{
      test: /\.js?/,
      include: APP_DIR,
      exclude: /node_modules/,
      loaders: ['babel'],
      plugins: ['transform-decorators-legacy'],
      presets: ['es2015', 'react', 'stage-1']
    },
    {
      test: /\.scss$/,
      include: APP_DIR,
      loaders: ['style', 'css','sass', 'resolve-url']
    },
    {
        test: /\.(jpe?g|png|gif)$/,
        loader: "file?name="+BUILD_IMAGES+"[name].[ext]?[hash]"
    },
    {
        test: /\.(svg)$/,
        loader: "file?name="+BUILD_SVG+"[name].[ext]?[hash]"
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false,
      exclude: []
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(conf.prod)
    }),
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
            warnings: false,
            drop_console: true
        }
    }),
    new HtmlWebpackPlugin({
      title: conf.prod.meta.title,
      description: conf.prod.meta.description,
      image: conf.prod.meta.image,
      url: conf.prod.url,
      ua: conf.prod.ua,
      template: '../static/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[chunkhash].js'
  }
};

module.exports = config;
