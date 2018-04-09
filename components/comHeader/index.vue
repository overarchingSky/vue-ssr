<template>
	<div class="header" :style="{'width':bgWidth}">
		<div class="content" :style="{'max-width':contentWidth,'width':'100%'}">
			<img src="/images/logo.jpg" class="logo" />	
			<ul class="nav">
				<nuxt-link v-for="(item,index) in nav" :to="item.url" :key="index">
					<md-button class="nav-item">{{item.title}}</md-button>
				</nuxt-link>
			</ul>
			<md-menu class="min-nav">
				<md-button md-menu-trigger class="md-icon-button">
					<img src="/images/more.png" />
				</md-button>
				<md-menu-content>
					<md-menu-item @click="() => {}" v-for="(item,index) in nav" :key="index" :to="item.url">
						<md-button class="warp" >
							{{item.title}}
						</md-button>
					</md-menu-item>
				</md-menu-content>
    		</md-menu>			
		</div>
		
	</div>
</template>
<script>
//import { MdMenu } from "vue-material/dist/components";
export default {
	props: {
		contentWidth: {
			type: String,
			default: "1366px"
		},
		bgWidth: {
			type: String,
			default: "100%"
		}
	},
	components: {
		//MdMenu
	},
	data() {
		return {
			nav: [
				{
					title: "关于",
					url: "/#about"
				},
				{
					title: "产品",
					url: "/#prod"
				},
				{
					title: "动态",
					url: "/#new"
				},
				{
					title: "合作",
					url: "/#co"
				},
				{
					title: "联系",
					url: "/#contact"
				}
			]
		};
	},
	methods: {
		searchHanlder(keys) {
			alert(keys);
		}
	}
};
</script>
<style lang="less">
.md-menu-content {
	max-height: none !important;
	z-index: 9;
	background-color: #fff;
	.warp {
		margin: 6px 0;
	}
}
.md-menu {
	display: flex;
	align-items: center;
}
.md-list-item-content {
	padding: 4px 0;
	.md-button {
		width: 100%;
	}
}
.header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9;
	width: 100%;
	background: #1f5b99;
	height: 5rem;
	.content {
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 auto;
		.logo {
			width: 16rem;
		}
		.nav {
			font-size: 0;
			.nuxt-link-active {
				.nav-item {
					color: antiquewhite;
				}
			}
			a {
				font-size: 1rem;
				display: 1;
				height: 100%;
				display: inline-block;
				text-decoration: none;
				.nav-item {
					height: 100%;
					margin: 0;
					color: #fff;
				}
			}
		}
	}
}
.nav {
	display: inline-block;
}
.min-nav {
	display: none;
}
@media screen and (max-width: 800px) {
	.min-nav {
		display: flex;
	}
	.nav {
		display: none;
	}
}
</style>