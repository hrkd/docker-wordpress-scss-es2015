var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './source/javascripts/main.js',

  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    //new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  watch: false,
  devtool: '#eval'
}
