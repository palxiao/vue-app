const vuxLoader = require('vux-loader')
module.exports = {
  // 基本路径
  // baseUrl: '/',
  publicPath: './',
  // 输出文件目录
  outputDir: '../widget',
  productionSourceMap: false,
  filenameHashing: false,
  configureWebpack: config => {
    vuxLoader.merge(config, {
      plugins: ['vux-ui']
    })
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}