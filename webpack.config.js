const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015',
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('postcss-preset-env')({ stage: 0 })],
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: isDevelopment
      ? {
          host: 'localhost',
          port: 3000,
          historyApiFallback: true,
          compress: true,
          hot: true,
        }
      : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      !isDevelopment && new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new EnvironmentPlugin({
        NODE_ENV: argv.mode,
      }),
    ].filter(Boolean),
    target: 'web',
  };
};
