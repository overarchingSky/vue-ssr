<template>
	<div class="search">
		<el-input
			placeholder="搜索"
			icon="search"
			v-model="keywords"
			:on-icon-click="startSearch">
		</el-input>
	</div>
</template>
<script>
import {Input} from 'element-ui'
export default{
	data(){
		return {
			keywords:''
		}
	},
	components: {
		[Input.name]:Input
	},
	methods:{
		startSearch(){
			this.$emit('toggle-search',this.keywords)
		}
	}
}
</script>
<style lang="less">
.search{
	max-width:25rem;
	.el-input__inner{
		border-radius:2rem;
		background-color:#FAFBFA;
		height:1.8rem;
		border:none;
		color:#777;
	}
}
</style>