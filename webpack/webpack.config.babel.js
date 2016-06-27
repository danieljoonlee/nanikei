var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');

module.exports = {
  root: path.join(__dirname, '..'),
  devtool: 'eval-source-map',
  alias: {
    'nanikei': __dirname,
    'app': 'app',
    'server': 'server'
  },
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    path.join(__dirname, '..', 'app', 'index')
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE === 'development'
    }) 
  ],
  resolve: {
    root: path.resolve(__dirname, '..'),
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, '..')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, '..')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/, 
        loader: 'url', 
        query: {limit: 10240} 
      }
    ]
  }
  // postcss: function() {
  //   return [autoprefixer, cssnano];
  // }
};