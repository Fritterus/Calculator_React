const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
})
