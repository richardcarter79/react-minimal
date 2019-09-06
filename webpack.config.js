const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

const outputDirectory = 'dist';
const apiPort = 8080;

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        //tell webpack to run .js and .jsx files through the babel transpiler
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass into CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    //resolve .jsx extensions to .js files
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: `http://localhost:${apiPort}`,
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    //new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(), //cleans build folders before every build to make sure no old assets are still lingering
    new HtmlWebpackPlugin({
      // tell webpack where the index.html lives to inject the bundle.js file into during development
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};
