import { WebpackModuleRule } from './types';

const rule: WebpackModuleRule = {
  development: {
    test: /\.vue$/,
    loader: 'vue-loader',
  },

  production: {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
};

export default rule;
