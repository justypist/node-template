const path = require('path');

const WebpackConfig = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.ts', '.js'],
    alias: {},
  },
};

module.exports = WebpackConfig;
