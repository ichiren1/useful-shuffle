const path = require('path');
const webpack = require('webpack');
const AsyncAwaitPlugin = require('webpack-async-await');
const LicenseWebpackPlugin = require('license-webpack-plugin');

const BASE_PLUGINS = [
  new AsyncAwaitPlugin({}),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

module.exports = {
  entry: process.env.NODE_ENV === 'production'
  ? [
    './src/root.jsx'
  ]
  : [
    'react-hot-loader',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/root.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    port: 8080,
    hot: true
  },
  plugins: process.env.NODE_ENV === 'production'
  ? BASE_PLUGINS.concat([
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new LicenseWebpackPlugin({
      pattern: /^(.*)$/,
      filename: 'licenses.txt'
    })
  ])
  : BASE_PLUGINS.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-1']
          }
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
