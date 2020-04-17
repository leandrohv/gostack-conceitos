const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' }, /** pega o css interpretado e injeta dentro do html */
          { loader: 'css-loader' }, /** ler e interpretar os css */
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      },
    ]
  },
};