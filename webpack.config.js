'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/js',
  entry: './app.js',
  output: {
    path: __dirname,
    filename: './build.js',
    library: 'app'
  },

  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 300
  },

  devtool: NODE_ENV === 'development' ? 'source-map' : null,

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules/
      },
      // {
      //   test: /\.json$/,
      //   loader: 'raw-loader'
      // }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};
