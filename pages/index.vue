<template>
  <section class="page">
	  <slider ></slider>
    <logo @click.native="clickHandle"/>
    <nuxt-link to="/page2">toPage2</nuxt-link>
    
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import slider from "~/components/slider";
//import axios from '~/plugins/axios.js'
export default {
	layout: "default",
	// layout() {
	// 	return window.flag ? "default" : "app-main";
	// },
	async asyncData(ctx) {
		let axios = ctx.app.$axios;
		let { data } = await axios.get("movie/in_theaters");
		return {
			allparentinfo: data
		};
	},
	data() {
		return {
			allparentinfo: []
		};
	},
	components: {
		Logo,
		slider
	},
	methods: {
		clickHandle() {
			//this.$refs.progress.start()
		}
	},
	created() {
		console.log("vue-auth", this.$auth);
	}
};
</script>



