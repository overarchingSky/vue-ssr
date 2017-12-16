<template>
	<div class="user-ctrl">
		<el-row>
			<el-col :span="24" class="user-head">
				<img src="/static/images/logo2.png" class="user-head-img" @click="clickHandler" />
				<a class="user-name" v-text="userInfo && userInfo.name" @click="changePass"></a>
				<a v-if="show" class="change-pass" @click="goSetPass">修改密码</a>
				<span class="ctrl btns">
				<el-button size="small" @click="logout">注销</el-button>
			</span>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import {Row, Col, Button} from 'element-ui'
export default{	
	data(){
		return{
			userInfo:{},
			show:false
		}
	},
	components: {
		[Row.name]: Row, 
		[Col.name]: Col,
		[Button.name]: Button
	},
	methods:{
		clickHandler(){
			alert('你好！')
		},
		logout(){
			this.$confirm('此操作将退出当前登录用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          	this.$auth.logout()
        })
		},
		changePass(){
			this.show=!this.show
			console.log(this.userInfo)
		},
		goSetPass(){
			this.show=!this.show
			this.$router.push({name:'reset-password'})
		}
	},
	created(){
		//this.userInfo = this.$auth.user()	
	}
}
</script>
<style lang="less">
.user-ctrl{
	.user-head{
		position: relative;
		text-align:right;
		.user-head-img{
			height:1.8rem;
			padding:0;
			margin:0;
			border-radius:50%;
			cursor:pointer;
			vertical-align:middle;
			&:hover{
				// box-shadow:0 0 1px 1px #ccc;
			}
		}
		.user-name{
			font-size:1rem;
		}
		.change-pass{
			position: absolute;
			top:2.8rem;
			right: 3rem;
			// width:10rem;
			line-height:3rem;
			background:#fff;
			padding:0 1rem 0 6rem;
			box-shadow: 0px 0px 10px #eee;
		}
	}
	.btns{
		font-size:1rem;
		line-height:1;
		.el-button{
			color:red;
			border-color:red;
			margin-left: 1rem;
			&:hover{
				color:darken(red,10%);
				border-color:darken(red,10%);
			}
		}
	}
}
</style>