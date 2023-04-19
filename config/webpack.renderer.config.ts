import type { Configuration } from 'webpack';

import { resolve, plugins, rules } from './webpack.common';

rules.push(
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
  },
  {
    test: /\.less$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }]
  }
);

export const rendererConfig: Configuration = {
  module: {
    rules
  },
  plugins,
  resolve
};
