import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

export default {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(m|c)?(t|j)sx?$/,
        exclude: /(node_modules|bower_components).*(?<!shack-get-routes\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              '@babel/preset-react',
              '@babel/preset-env',
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
            ]
          }
        }
      },
      {
        test: /shack-get-routes\.tsx$/,
        use: {
          loader: '@shack-js/auto-routes-loader',
          options: {
            folder: 'src/pages'
          }
        }
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".mjs", ".cjs"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-react',
      template: join(dirname(fileURLToPath(import.meta.url)), 'src', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
  ],
  output: {
    path: join(dirname(fileURLToPath(import.meta.url)), 'dist'),
    filename: '[contenthash].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}