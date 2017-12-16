<template>
  <section class="container">
    <div>
      <logo @click.native="clickHandle"/>
      <h1 class="title">
        vue-ssr
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHubs</a>
        <div v-for="(item,index) in allparentinfo.subjects">{{item.title}}</div>
      </div>
      <vv ref="progress" style="width:100%;"/>
    </div>
    <nuxt-link to="/page2">toPage2</nuxt-link>
    <el-tag type="success">page2</el-tag>
    
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import vv from '../.nuxt/components/nuxt-loading'
import {Tag} from 'element-ui'
//import axios from '~/plugins/axios.js'
export default {
  layout:'app-main',
  async asyncData (ctx) {
    let axios = ctx.app.$axios
    let { data } = await axios.get('movie/in_theaters')
    return {
      allparentinfo: data
    }
  },
  data(){
    return {
      allparentinfo:[]
    }
  },
  components: {
    Logo,
    vv,
    ['el-tag']:Tag
  },
  methods: {
    clickHandle () {
      //this.$refs.progress.start()
    }
  },
  created(){
    console.log('vue-auth',this.$auth)
  },
}
</script>y
<style lang="less">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>



