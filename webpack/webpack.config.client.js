var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './lib/core-js-no-number',
    'regenerator/runtime',
    '../meteorpress-core/client/index',
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'client.bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      app: path.join(__dirname, '../meteorpress-core'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules|lib/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
    ],
  },
  plugins: [
    new webpack.PrefetchPlugin('react'),
    new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment')
  ]
};
