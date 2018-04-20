<template>
	<span class="section-title-box" ref="title">
		<div v-if="theme">
			<h1 v-text="title" class="section-title" :class="theme"></h1>
			<div class="line" :class="theme"></div>
		</div>
		<div v-else>
			<h1 v-text="title" class="section-title" :style="{'color':color}"></h1>
			<div class="line" :style="{'background-color':color}"></div>
		</div>
		
	</span>
</template>

<script>
export default {
	props: {
		title: String,
		color: String,
		theme: String
	}
};
</script>

<style lang="less">
.section-title-box {
	margin: 0 0 0.72rem 0;
	display: inline-block;
	line-height: 1.08rem;
	.line {
		height: 0.072rem;
	}
	.light {
		color: #fff;
		&.line {
			background-color: #fff;
		}
	}
	.dark {
		color: #2e6aa9;
		&.line {
			background-color: #2e6aa9;
		}
	}
}
</style>
