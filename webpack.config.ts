import { WebpackConfig, WebpackMergeArgs } from './webpack/types';
import { merge } from 'webpack-merge';
import commonConfig from './webpack/configs/webpack.common.config';
import devConfig from './webpack/configs/webpack.dev.config';
import prodConfig from './webpack/configs/webpack.prod.config';

export default (env: string, args: WebpackMergeArgs): WebpackConfig => {
  const isProduction = Boolean(args.env.WEBPACK_BUILD);

  if (isProduction) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
};
