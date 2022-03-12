/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
          './App1': './src/App',
      },
      shared: [
          {
              ...deps,
              react: {
                  singleton: true,
                  requiredVersion: deps.react,
              },
              'react-dom': {
                  singleton: true,
                  requiredVersion: deps['react-dom'],
              },
          },
      ],
    }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
  ]
}
