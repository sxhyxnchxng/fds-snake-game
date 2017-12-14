const merge = require('webpack-merge');
const common = require('./common');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'cheap-module-source-map', // 소스맵 활성화 시킴
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});