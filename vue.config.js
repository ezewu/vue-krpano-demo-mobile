const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    port: 8080,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src/components'),
        '#': resolve('src/common'),
      },
    },
  },
}
