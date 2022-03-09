import { WebpackConfig } from '../types';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import webpack from 'webpack';

const config: WebpackConfig = {
  entry: path.resolve(__dirname, '../../src/main.ts'),

  output: {
    clean: true,
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js',
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.css',
      '.scss',
      '.vue',
    ],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),

    new ESLintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    }),

    new StylelintWebpackPlugin({
      files: ['**/*.{vue,css,sss,less,scss,sass}'],
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../../public/index.html'),
      inject: 'body',
    }),
  ],
};

export default config;
