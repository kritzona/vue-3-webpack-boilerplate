import { WebpackConfig } from '../types';
import jsModuleRule from '../module-rules/js-module-rule';
import tsModuleRule from '../module-rules/ts-module-rule';
import styleModuleRule from '../module-rules/style-module-rule';
import vueModuleRule from '../module-rules/vue-module-rule';
import imageModuleRule from '../module-rules/image-module-rule';
import fontModuleRule from '../module-rules/font-module-rule';
import WebpackBar from 'webpackbar';
import { VueLoaderPlugin } from 'vue-loader';

const config: WebpackConfig = {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    https: true,
    open: true,
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      vueModuleRule.development,
      jsModuleRule.development,
      tsModuleRule.development,
      styleModuleRule.development,
      imageModuleRule.development,
      fontModuleRule.development,
    ],
  },

  plugins: [
    new WebpackBar({
      name: 'Development',
      color: 'green',
    }),
    new VueLoaderPlugin(),
  ],
};

export default config;
