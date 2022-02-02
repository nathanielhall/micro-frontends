/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path')
const APP_PATH = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: './src/index',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3001/'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      src: path.resolve(__dirname, './src/')
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: [
          /dist/,
          /node_modules/,
          /\\.test\\.tsx?$/,
          /__tests__/,
          /typings/
        ],
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      library: { type: 'var', name: 'app1' },
      filename: 'remoteEntry.js',
      remotes: {
      },
      exposes: {
        app1: './src/index',
      },
      shared: ['react', 'react-dom', 'single-spa-react']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}
