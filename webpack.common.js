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
    alias: {
      '@controller': path.resolve('src', 'controller/index'),
      '@controller/*': path.resolve('src', 'controller/'),
      '@service/*': path.resolve('src', 'service/'),
      '@entity/*': path.resolve('src', 'entity/'),
      '@util/*': path.resolve('src', 'util/'),
    },
  },
};

module.exports = WebpackConfig;
