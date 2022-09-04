const { merge } = require( 'webpack-merge' );
const common = require( './webpack.common' );

module.exports = merge( common, {
  mode: 'production',
  devtool: 'source-map',
  ignoreWarnings: [
    // typeorm
    {
      module: /node_modules\/typeorm\//,
    },
    // Critical dependency
    {
      module: /node_modules\//,
      message: /Critical dependency/,
    },
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  // },
} );
