const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.js', path: 'dist' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [
            'es2017',
            [
              'es2015',
              {
                modules: false
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({ title: 'Tree-shaking' }) 
  ]
};