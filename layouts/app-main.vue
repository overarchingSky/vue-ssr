<template>
    <div class="app-main" :class="{'zoom':layoutZoom}">
        <div class="layout main">
            <com-header class="layout header"></com-header>
            <div class="full-content">
              <nuxt/>
            </div>
            
        </div>
        <aside class="layout aside">
            <div class="logo-wapper">
                <img src="/static/images/logo.jpg" alt="logo" class="logo" />
            </div>
            <div class="zoomCtrl animate" @click="zoomHandler"><i class="el-icon-menu"></i></div>
            <menu-tree :config="config" class="navigator" :collapse="layoutZoom"></menu-tree> 
        </aside>
    </div>
</template>
<script>
import menuTree from 'lib/components/menuTree'
import comHeader from 'cps/comHeader'
export default{
    name:'main',
    data(){
        return {
            orderMenu:[],
            config:[
							{
								text:'批次',
								icon:'icon-dingdan',
								action:'/lots',
								auth:['ADMIN']
							},
							// {
							// 	text:'套餐',
							// 	icon:'icon-dingdan',
							// 	action:'/users/CUSTOMER',
							// 	auth:['ADMIN']
							// },
              {
                text:'产品',
                icon:'icon-bianji',
                action:'/products',
                auth:['ADMIN'],
              },
            ],
            layoutZoom:false
        }
    },
    components:{
        menuTree,
        comHeader
    },
    methods:{
      zoomHandler(){
        this.layoutZoom = !this.layoutZoom
      },
    },
    created(){
      this.orderMenu = []
    }
}
</script>
<style lang="less">
body,
html,
#__nuxt{
  height:100%;
}
@green:rgba(143,176,84,1);
//侧边菜单栏正常宽度（可配置）
@asideWidth:12rem;
//侧边菜单栏缩小宽度（基于饿了么，最小宽度目前尚不可另行配置）
@zoomWidth:64px;
.animate{
	transition:all 0.3s ease-in-out;
}
.app-main{
  height:100%;
  .layout{
    box-shadow:0 0 1px 1px #ccc;
    .animate;
  }
  .aside{
    float:left;
    margin-left:-100%;
    display:inline-block;
    height:100%;
    width:@asideWidth;
    position:relative;
    .logo-wapper{
      .animate;
      background-color:#fff;
      position:relative;
      z-index:2;
      .logo{
        display:block;
        height:1.6rem;
        margin: 0 auto;
        padding:1rem 0;
      }
    }
    .zoomCtrl{
      position:relative;
      z-index:2;
      font-size:1rem;
      padding:0.5rem 0;
      background-color:@green;
      color:#fff;
      text-align:center;
      cursor:pointer;
      &:hover{
        background-color:darken(@green,8%)
      }
      i{
        vertical-align:middle;
      }
    }
    .menu-tree{
      position:absolute;
      top:0;
      left:0;
      box-sizing:border-box;
      padding-top:5.8rem;
      height:100%;
      overflow-x: hidden;
      background-color:darken(@green,8%);
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width:@asideWidth;
      }
    }
  }
  .main{
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding-left:@asideWidth;
    float:left;
    background: #fbfcfa;
    .header{
      position:relative;
      z-index:99;
    }
    .full-content{
      box-sizing:border-box;
      height:calc(~'100% - 3.6rem');
      padding-bottom:2rem;
      overflow:auto;
    }
  }
}


.zoom{
  .aside{
    width:@zoomWidth;
  }
  .logo{
    height:auto!important;
    width:50px;
    padding:1.4rem 0!important;
  }
  .main{
    padding-left:@zoomWidth;
  }
}
</style>