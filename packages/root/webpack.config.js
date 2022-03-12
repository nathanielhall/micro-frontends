/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
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
      name: 'root',
      filename: 'remoteEntry.js',
      remotes: {
          app1: 'app1@http://localhost:8081/remoteEntry.js',
          app2: 'app2@http://localhost:8082/remoteEntry.js'
      },
      shared: [
          {
          },
      ],
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
