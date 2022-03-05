import { WebpackModuleRule } from './types';

const rule: WebpackModuleRule = {
  development: {
    test: /\.(png|jpe?g|gif|svg)$/,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name].[hash][ext]',
    },
  },

  production: {
    test: /\.(png|jpe?g|gif|svg)$/,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name].[hash][ext]',
    },
  },
};

export default rule;
