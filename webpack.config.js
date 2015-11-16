'use strict';

const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'], include: APP_PATH },
    ],
  },
};

if(TARGET === 'start' || !TARGET) {

  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // parse host and port from env so this is easy to customize
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new HtmlwebpackPlugin({ title: 'Redux Boilerplate' }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      preLoaders: [
        {test: /\.jsx?$/, loader: 'eslint-loader', include: APP_PATH },
      ],
      loaders: [
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: APP_PATH },
      ],
    },
  });

}


