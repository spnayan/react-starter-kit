const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfiguration = () => {
  return merge([
    {
      output: {
        publicPath: '/',
        filename: '[name].[contenthash].js',
      },
      optimization: {
        minimizer: [new UglifyJsPlugin(), new OptimizeCssAssetsPlugin()],
        splitChunks: {
          chunks: 'all',
        },
        runtimeChunk: {
          name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
        },
      },

      plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
        new Visualizer({ filename: './statistics.html' }),
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0,
        }),
      ],
      devtool: '',
    },
  ]);
};

module.exports = (env) => {
  return merge(baseConfig(env), prodConfiguration(env));
};
