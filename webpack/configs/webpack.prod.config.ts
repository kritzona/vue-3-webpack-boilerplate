import { WebpackConfig } from '../types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import jsModuleRule from '../module-rules/js-module-rule';
import tsModuleRule from '../module-rules/ts-module-rule';
import styleModuleRule from '../module-rules/style-module-rule';
import vueModuleRule from '../module-rules/vue-module-rule';
import WebpackBar from 'webpackbar';
import { VueLoaderPlugin } from 'vue-loader';
import imageModuleRule from '../module-rules/image-module-rule';
import fontModuleRule from '../module-rules/font-module-rule';

const config: WebpackConfig = {
  mode: 'production',

  module: {
    rules: [
      vueModuleRule.production,
      jsModuleRule.production,
      tsModuleRule.production,
      styleModuleRule.production,
      imageModuleRule.production,
      fontModuleRule.production,
    ],
  },

  optimization: {
    chunkIds: 'named',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },

  plugins: [
    new WebpackBar({
      name: 'Production',
      color: 'blue',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css',
      chunkFilename: '[name].[contenthash].chunk.css',
    }),
    new VueLoaderPlugin(),
  ],
};

export default config;
