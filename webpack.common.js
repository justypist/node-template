const path = require( 'path' );
const nodeExternals = require( 'webpack-node-externals' );

const WebpackConfig = {
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals(),
  ],
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve( './dist' ),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts/i,
        use: [
          {
            loader: 'ts-loader',
            // options: {
            //   transpileOnly: true,
            // },
          },
        ],
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: [ '.json', '.ts', '.js' ],
    alias: {
      '@controller': path.resolve( 'src', 'controller' ),
      '@service': path.resolve( 'src', 'service' ),
      '@entity': path.resolve( 'src', 'entity' ),
      '@util': path.resolve( 'src', 'util' ),
      '@middleware': path.resolve( 'src', 'middleware' ),
    },
  },
};

module.exports = WebpackConfig;
