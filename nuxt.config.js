var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    HOST: process.env.host || 'localhost',
    PORT: process.env.port || '3000',
    API_URL_BROWSER: '/api'
  },
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  auth: {
    user: {
      endpoint: '',
      propertyName: '',
    },
    login: {
      endpoint: ''
    },
    logout: {
      endpoint: '',
      method: 'get'
    },
    redirect: {
      notLoggedIn: '/login',
      loggedIn: '/'
    },
  },
  router:{
    //middleware: ['auth', 'no-auth']
  },
  proxy: [
    [
      '/api',
      {
        target: 'http://api.douban.com/v2', // api主机
        pathRewrite: {'^/api': '/'}
      }
    ]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    '~/plugins/auth'
  ],
  css:[
    'element-ui/lib/theme-chalk/index.css',
    '~/less'
  ],
  // css:[
  //   {src: 'less/common.less', lang: 'less'},
  // ],
  performance: {
    gzip: false
  },
  build: {
    filenames:{
      css:'element-ui.[contenthash].css',
      vendor:'vendor.[chunkhash].js'  
    },
    vendor: ['element-ui', 'axios', 'vue-axios','babel-polyfill'],
    extend (webpackConfig, env) {
      webpackConfig.resolve.alias['cps'] = resolve('components')
      webpackConfig.resolve.alias['lib'] = resolve('lib')
    },
    extractCSS:true,
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

// pages/vetur.e1e15341e9febc82fe4e.js  674 bytes       3  [emitted]         pages/vetur
// nodejs_v1 |         fonts/element-icons.2fad952.woff    6.16 kB          [emitted]
// nodejs_v1 | layouts/app-main.90dae23732d09749cdd4.js    10.4 kB       0  [emitted]         layouts/app-main
// nodejs_v1 |      pages/index.0a20be29a31f3bbd3305.js    4.91 kB       1  [emitted]         pages/index
// nodejs_v1 |      pages/page2.74be85b136136a12165a.js    4.47 kB       2  [emitted]         pages/page2
// nodejs_v1 |          fonts/element-icons.6f0a763.ttf      11 kB          [emitted]
// nodejs_v1 |  layouts/default.741b6570a55f53cb29d6.js     1.4 kB       4  [emitted]         layouts/default
// nodejs_v1 |           common.ec1153d8c80cb01ef181.js     808 kB       5  [emitted]  [big]  common
// nodejs_v1 |              app.8d833e1bbebad5c3799b.js     223 kB       6  [emitted]         app
// nodejs_v1 |         manifest.4730315047f63e1e831b.js    1.72 kB       7  [emitted]         manifest
// nodejs_v1 |                                 LICENSES  755 bytes          [emitted]