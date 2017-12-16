import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from 'vue-auth'
Vue.use(VueAxios, axios)
// let options = {}
// // 需要全路径才能工作
// if (process.server) {
//   options.baseURL = `http://${process.env.HOST}:${process.env.PORT}`
// }
// console.log('options', options.baseURL)
//export default axios.create(options)

export default ({ app, store, redirect }) => {
  console.log('app',app)
  // 需要全路径才能工作
  if (process.server) {
    Vue.axios.defaults.baseURL = `http://${process.env.HOST}:${process.env.PORT}`
    //axios.defaults.baseURL = `http://${process.env.HOST}:${process.env.PORT}`
  }
}
