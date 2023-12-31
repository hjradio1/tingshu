'use strict'
const path = require('path')
const { kill } = require('process')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = '听书app'

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
    devServer: {
        proxy: {  //配置跨域
            '/api': {
                // target: '127.0.0.1:5000/api',
                target: 'https://app.tings8.com/listen/api',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/apptingchina':{
                target: 'https://app.tings8.com/listen/apptingchina',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/apptingchina': ''
                }
            },
        }
    },
}