const path = require('path');

module.exports = {
  mode: (process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
  entry: './src/index.js',
  output: {
    library: 'SpinnerFavicon',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
      }
    ]
  }
};
