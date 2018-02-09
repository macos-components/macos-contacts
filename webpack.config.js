var path = require('path');

const JS_JSX_PATTERN = /\.jsx?$/;

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: JS_JSX_PATTERN,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'es2015', 'stage-1']
        }
      },
      {
        test: JS_JSX_PATTERN,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        loader: 'eslint-loader',
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};
