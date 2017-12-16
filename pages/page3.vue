<template>
  <section class="container">
    <div>
      <logo @click.native="clickHandle"/>
      <h1 class="title">
        vue-ssr
      </h1>
      <h2 class="subtitle">
        Nuxt.js page3
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        <div v-for="({name, price}, index) in prods" :key="index">{{name + ':' + price}}</div>
        <div>{{apple.name + ' ' + apple.price}}</div>
      </div>
      <vv ref="progress" style="width:100%;"/>
    </div>
    <nuxt-link to="/page2">toIndex</nuxt-link>
    <el-tag type="success" @click="submit">page2</el-tag>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import vv from '../.nuxt/components/nuxt-loading'
export default {
  components: {
    Logo,
    vv,
  },
  data(){
    return {
      prods:this.$store.state.prods
    }
  },
  computed:{
    apple(){
      return this.$store.getters.getProdsByName('苹果')
    },
  },
  methods: {
    clickHandle () {
      this.$refs.progress.start()
    }
  },
  created(){
    console.warn('vuex',this)
  },
}
</script>

<style>
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
