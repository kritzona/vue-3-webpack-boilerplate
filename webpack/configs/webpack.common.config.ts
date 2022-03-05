import { WebpackConfig } from '../types';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';

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
    new ESLintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    }),

    new StylelintWebpackPlugin({
      extensions: ['css', 'scss', 'sass'],
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../../public/index.html'),
      inject: 'body',
    }),
  ],
};

export default config;
