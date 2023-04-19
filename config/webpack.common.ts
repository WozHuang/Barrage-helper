import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { ModuleOptions, Configuration, DefinePlugin } from 'webpack';
import path from 'path';

export const resolve: Configuration['resolve'] = {
  extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.wasm'],
  alias: {
    '@render': path.join(__dirname, '../src/render'),
    '@main': path.join(__dirname, '../src/main'),
    '@shared': path.join(__dirname, '../src/shared'),
    '@preload': path.join(__dirname, '../src/preload')
  }
};

export const rules: Required<ModuleOptions>['rules'] = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader'
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules'
      }
    }
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  }
];

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export const plugins = [
  new DefinePlugin({
    __DEV__: process.env.NODE_ENV === 'development'
  }),
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure'
  })
];
