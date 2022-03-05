import { WebpackModuleRule } from './types';

const rule: WebpackModuleRule = {
  development: {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[hash][ext]',
    },
  },

  production: {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[hash][ext]',
    },
  },
};

export default rule;
