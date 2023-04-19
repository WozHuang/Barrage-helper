import type { Configuration } from 'webpack';

import { DefinePlugin } from 'webpack';
import * as process from 'process';
import { resolve, rules } from './webpack.common';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main/index.ts',
  // Put your normal webpack config below here
  module: {
    rules
  },
  resolve,
  plugins: [
    new DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development'
    })
  ]
};
