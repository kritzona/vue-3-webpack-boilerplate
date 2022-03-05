import { WebpackModuleRule } from './types';

const rule: WebpackModuleRule = {
  development: {
    test: /\.(ts|tsx)$/i,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
    },
    exclude: /node_modules/,
  },

  production: {
    test: /\.(ts|tsx)$/i,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
    },
    exclude: /node_modules/,
  },
};

export default rule;
