const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const APP_DIR = path.resolve(__dirname, '../src/');
const BUILD_DIR = path.resolve(__dirname, '../public/');

const conf = require('../config/config.json');

var config = {
  context: APP_DIR,
  entry: './index.js',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  module: {
    loaders: [
    {
      test: /\.js?/,
      include: APP_DIR,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      plugins: ['transform-decorators-legacy'],
      presets: ['es2015', 'react', 'stage-1']
    },
    {
      test: /\.scss$/,
      include: APP_DIR,
      loaders: ['style', 'css','sass', 'resolve-url', 'sass?sourceMap']
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "file?name=[path][name].[ext]"
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
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(conf.dev)
    }),
    new HtmlWebpackPlugin({
      title: conf.dev.meta.title,
      description: conf.dev.meta.description,
      image: conf.dev.meta.image,
      url: conf.dev.url,
      ua: conf.dev.ua,
      template: '../static/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
