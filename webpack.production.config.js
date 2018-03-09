var webpack = require('webpack');
var path = require('path');
var glob = require("glob");

module.exports = {
  content: path.resolve(__dirname, 'source'),
  devtool: 'cheap-module-source-map',
  entry: './source/javascripts/main.js',
  output: {
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: [/node_modules/,/source\/javascripts\/lib/]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  /* プラグインの設定 */
  plugins: [
    /* DefinePluginの実行 */
    new webpack.DefinePlugin({
      // process.env.NODE_ENVを'production'に置き換える
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    /* UglifyJsPluginの実行 */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        drop_console: true,
        unused: true,
        warnings: true
      }
    })
  ]


};
