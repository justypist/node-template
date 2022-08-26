const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new NodemonWebpackPlugin({
      // If using more than one entry, you can specify
      // which output file will be restarted.
      script: './dist/index.js',

      // What to watch.
      watch: path.resolve('./dist'),

      // Arguments to pass to the script being watched.
      args: [],

      // Node arguments.
      nodeArgs: [],

      // Files to ignore.
      ignore: ['*.js.map'],

      // Extensions to watch.
      ext: 'js,json',

      // Unlike the cli option, delay here is in milliseconds (also note that it's a string).
      // Here's 1 second delay:
      delay: '1000',

      // Detailed log.
      verbose: true,

      // Environment variables to pass to the script to be restarted
      env: {
        NODE_ENV: 'development',
      },
    }),
  ],
});
