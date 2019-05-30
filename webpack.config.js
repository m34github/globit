const path = require('path');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: path.join('assets'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new PrettierPlugin({
      configFile: path.resolve(__dirname, 'prettier.config.js')
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 53000,
    historyApiFallback: true,
    watchContentBase: true
  }
};
