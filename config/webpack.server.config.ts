import path from 'node:path';
import { Configuration } from 'webpack';
import { rules } from './webpack.rules';
// import TerserPlugin from 'terser-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

const config: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
  entry: {
    index: './src/server/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../out/server'),
    filename: '[name].js',
    clean: true
    // devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]',
  },
  optimization: {
    // 隐藏所有注释，包括 License 声明
    // minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       format: {
    //         comments: false,
    //       },
    //     },
    //     extractComments: false,
    //   })
    // ],

    // 将 node_modules 依赖分割到单独文件中，但如果指定 externals 忽略了node_modules 就没必要了
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        }
      }
    }
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  plugins: [],

  // @link https://webpack.docschina.org/configuration/externals/
  // 不打包依赖
  // externals: [
  //   /^koa.*/i,
  //   'dotenv'
  // ],
  // 还可以考虑通过 webpack-node-externals 插件实现
  externals: [nodeExternals()],
  // 指定外部依赖引入方式
  externalsType: 'node-commonjs'
};

export default config;
