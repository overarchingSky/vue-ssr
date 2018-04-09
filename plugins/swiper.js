//github:https://github.com/surmon-china/vue-awesome-swiper
//demo:https://surmon-china.github.io/vue-awesome-swiper/
import Vue from "vue";
if (process.browser) {
  const VueAwesomeSwiper = require("vue-awesome-swiper/dist/ssr");
  Vue.use(VueAwesomeSwiper);
}
