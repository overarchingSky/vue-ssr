<template>
  <div class="view">
	<com-header class="header"></com-header>
	<div class="section">
		<nuxt/>
	</div>
    
  </div>
</template>

<script>
import "less";
import comHeader from "~/components/comHeader";
import "../plugins/mobile.js";
export default {
	components: {
		comHeader
	}
};
</script>

<style lang="less">
html,
body,
#__nuxt,
#__layout {
	height: 100%;
}
.view {
	padding-top: 1.79rem;
	height: 100%;
	.section {
		height: 100%;
		overflow: auto;
	}
}
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}
</style>
