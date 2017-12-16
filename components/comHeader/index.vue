<template>
	<div class="header">
		<el-row>
			<el-col :span="24">
				<user></user>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import user from './user'
import {Row, Col} from 'element-ui'
export default{
	components: {
		user,
		[Row.name]: Row, 
		[Col.name]: Col
	},
	methods:{
		searchHanlder(keys){
			alert(keys)
		}
	}
}
</script>
<style lang="less">
	.header{
		padding:0.9rem 5rem;
		background:#fff;
	}
</style>