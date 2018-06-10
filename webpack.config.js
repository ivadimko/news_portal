const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const postCssConfig = require('./config/postcss.config');
const modernizrConfig = require('./config/modernizr.config');

const context = path.resolve(__dirname, 'src');
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const cssPlugin = new ExtractTextPlugin('css/[name].css');
const modernizrPlugin = new ModernizrWebpackPlugin(modernizrConfig);

const scssUtilsPath = 'src/styles/utils';


module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 3,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: postCssConfig
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'compact',
                sourceMap: true,
                sourceComments: true
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.join(__dirname, `${scssUtilsPath}/_vars.scss`),
                  path.join(__dirname, `${scssUtilsPath}/_mixins.scss`)
                ]
              },
            },
          ]
        })
      }
    ]
  },
  plugins: [ htmlPlugin, cssPlugin, modernizrPlugin ],
  resolve: {
    extensions: [ ".js", ".jsx" ],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
};
