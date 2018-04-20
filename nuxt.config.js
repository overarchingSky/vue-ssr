var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "芸朵星辰",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "js/flexible.js",
        type: "text/javascript"
      }
    ]
  },
  env: {
    HOST: process.env.host || "localhost",
    PORT: process.env.port || "3000",
    API_URL_BROWSER: "/api"
  },
  modules: ["@nuxtjs/auth", "@nuxtjs/axios", "@nuxtjs/proxy"],
  auth: {
    user: {
      endpoint: "",
      propertyName: ""
    },
    login: {
      endpoint: ""
    },
    logout: {
      endpoint: "",
      method: "get"
    },
    redirect: {
      notLoggedIn: "/login",
      loggedIn: "/"
    }
  },
  router: {
    //middleware: ['auth', 'no-auth']
  },
  proxy: [
    [
      "/api",
      {
        target: "http://api.douban.com/v2", // api主机
        pathRewrite: { "^/api": "/" }
      }
    ]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "rgb(69, 193, 164)" }, //{ color: "#3B8070" },
  /*
  ** Build configuration
  */
  plugins: [
    //plugins里的js会自动打到vender里
    // { src: "~/plugins/babel-polyfill", ssr: true },//按需引入vue-material时打开
    // "~/plugins/auth",
    { src: "~/plugins/swiper", ssr: false },
    { src: "~plugins/vue-material", ssr: true }
  ],
  css: ["~/less", "vue-material/dist/vue-material.min.css"],
  performance: {
    gzip: false
  },
  build: {
    filenames: {
      css: "[name].[contenthash].css",
      vendor: "vendor.[chunkhash].js"
    },
    vendor: [
      "swiper/dist/css/swiper.css",
      "vue-material/dist/vue-material.min.css"
    ],
    extend(webpackConfig, env) {
      webpackConfig.resolve.alias["cps"] = resolve("components");
      webpackConfig.resolve.alias["lib"] = resolve("lib");
    },
    extractCSS: {
      allChunks: true
    }
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
};

// pages_index.a819f08ed94c53f76237.js  11.8 kB       0  [emitted]         pages_index
// layouts_default.44166a714cb5b7d7f98f.js   146 kB       1  [emitted]         layouts_default
// 		 vendor.77218f86cb5bfb4419cc.js   652 kB       2  [emitted]  [big]  vendor
// 			app.c0261778bd646c52b53c.js  35.6 kB       3  [emitted]         app
// 	   manifest.9c6700df827ec58eb009.js  1.47 kB       4  [emitted]         manifest
// app.cab3f2f006c93939855ee12ef5b880ee.css  15.1 kB       3  [emitted]         app
// vendor.04142887070306a8e42590949ef03903.css   112 kB       2  [emitted]         vendor
// 							   LICENSES   1.4 kB          [emitted]

// pages_index.a819f08ed94c53f76237.js  11.8 kB       0  [emitted]         pages_index
// layouts_default.44166a714cb5b7d7f98f.js   146 kB       1  [emitted]         layouts_default
// 		 vendor.0d54a5922081bf2635f4.js   684 kB       2  [emitted]  [big]  vendor
// 			app.113d43ffcbe42ca37971.js  35.5 kB       3  [emitted]         app
// 	   manifest.b1816f19a45703ce2cc0.js  1.47 kB       4  [emitted]         manifest
// app.cab3f2f006c93939855ee12ef5b880ee.css  15.1 kB       3  [emitted]         app
// vendor.04142887070306a8e42590949ef03903.css   112 kB       2  [emitted]         vendor
// 							   LICENSES  2.78 kB          [emitted]
