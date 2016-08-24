'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  context: __dirname + '/js',
  entry: './app.js',
  output: {
    path: __dirname,
    filename: './build.js',
    library: 'app'
  },

  externals: {
    lodash: '_'
  },

  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 1000
  },

  devtool: NODE_ENV === 'development' ? 'source-map' : null,

  module: {
    loaders: [{
      'loader': 'babel',
      'test': /\.js$/,
      'exclude': /node_modules/,
      'query': {
        'plugins': ['lodash'],
        'presets': ['es2015']
      }
    }]
    // [
    //   {
    //     test: /\.hbs$/,
    //     loader: "handlebars-loader"
    //   },
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules)/,
    //     // loader: 'babel?presets[]=es2015',
    //     loader: 'babel',
    //     query: {
    //       presets: ['es2015']
    //     }
    //   }
    // ]
  },

  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.optimize.OccurrenceOrderPlugin,
    // new webpack.optimize.UglifyJsPlugin,
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]
};
