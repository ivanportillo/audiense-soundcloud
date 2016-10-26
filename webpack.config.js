const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: ['src', 'node_modules']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      include: [path.join(__dirname, 'src')],
      loader: 'babel'
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.css$/,
      include: [path.join(__dirname, 'src')],
      loaders: ['style-loader', {
        loader: 'css-loader',
        query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' }
      }, 'postcss-loader']
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss(webpackInstance) {
          return [
            require('postcss-import')({
              addDependencyTo: webpackInstance,
              root: __dirname,
              path: [path.join(__dirname, '../src')]
            }),
            require('postcss-cssnext')({
              features: {
                rem: {
                  rootValue: 10,
                  html: false
                }
              }
            }),
            require('postcss-reporter')({ clearMessages: true })
          ];
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: true }),
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT_ID: JSON.stringify('80bdab0ecb2b65b57e1629f1b65cb3f1'),
        NODE_ENV: JSON.stringify('development'),
      }
    }),
  ]
};
