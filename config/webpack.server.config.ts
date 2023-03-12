import path from 'node:path';
import { Configuration } from 'webpack';
import { rules } from './webpack.rules';

const config: Configuration = {
  mode: 'production',
  // devtool: 'eval-source-map',
  target: 'node',
  entry: './src/server/index.ts',
  output: {
    path: path.resolve(__dirname, '../out/server'),
    filename: 'index.js',
    // devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
};

export default config;
