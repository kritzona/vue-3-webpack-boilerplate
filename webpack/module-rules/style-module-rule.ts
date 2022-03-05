import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackModuleRule } from './types';

const rule: WebpackModuleRule = {
  development: {
    test: /\.(scss|sass)$/i,
    use: [
      {
        loader: 'vue-style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('dart-sass'),
          sourceMap: true,
        },
      },
    ],
    exclude: /node_modules/,
  },

  production: {
    test: /\.(scss|sass)$/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('dart-sass'),
        },
      },
    ],
    exclude: /node_modules/,
  },
};

export default rule;
