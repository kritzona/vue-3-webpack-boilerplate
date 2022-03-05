import { WebpackModuleRule } from './types';

const rule: WebpackModuleRule = {
  development: {
    test: /\.(js|jsx)$/i,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },

  production: {
    test: /\.(js|jsx)$/i,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
};

export default rule;
