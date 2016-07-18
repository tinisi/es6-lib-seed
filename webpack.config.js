const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './lib',
    filename: 'library.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
