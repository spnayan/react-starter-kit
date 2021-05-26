/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = (env = {}) => {
  const { NODE_ENV } = env;
  return merge([
    {
      entry: ['react-hot-loader/patch', '@babel/polyfill', APP_DIR],
      output: {
        publicPath: '/',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          'react-dom': '@hot-loader/react-dom',
          '@src': path.resolve(__dirname, '../src'),
          '@Components': path.resolve(__dirname, '..', 'src', 'components'),
          '@Assets': path.resolve(__dirname, '..', 'src', 'assets'),
          '@Actions': path.resolve(__dirname, '..', 'src', 'actions'),
          '@Services': path.resolve(__dirname, '..', 'src', 'services'),
          '@Sagas': path.resolve(__dirname, '..', 'src', 'sagas'),
          '@Reducers': path.resolve(__dirname, '..', 'src', 'reducers'),
          '@Utils': path.resolve(__dirname, '..', 'src', 'utils'),
          // App: path.join(__dirname, '..', 'src'),
        },
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
              failOnWarning: true,
              failOnError: true,
            },
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                envName: NODE_ENV,
              },
            },
          },
          {
            test: /\.css$/,
            use: [NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
          },
          {
            test: /\.s(a|c)ss$/,
            use: [
              NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: ['file-loader'],
          },
          {
            test: /\.woff(2)?(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
            use: ['url-loader?limit=10000'],
          },
          {
            test: /\.(ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
            use: ['file-loader'],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'MY_APP',
          template: 'public/index.html',
          filename: 'index.html',
          inject: true,
          minify: {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyURLs: true,
            minifyJS: true,
            removeComments: true,
            removeRedundantAttributes: true,
          },
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        }),
      ],
      devtool: 'eval-source-map',
    },
  ]);
};
