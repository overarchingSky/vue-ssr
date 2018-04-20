<template>
  <div class="page main">
	  <slider class="slider"></slider>
		<section class="section-li" id="about">
			<div class="section-content font-blank">
				<section-header title="关于我们" color="#143E64"></section-header>
				<div class="md-layout md-gutter md-alignment-center">
					<div class="md-layout-item md-size-33 md-small-size-33 md-large-small-33 md-xsmall-size-100 desc text-indent">
						<p>芸朵星辰科技（Winged AI）创立于2016年，是在人工智能、SaaS和区块链领域拥有核心技术能力的创新企业，公司专注为医疗健康、生命科学、食品药品流通与追溯及教育等行业提供智能化产品和服务，支持高校可信的跨行业协作。<p>
						<p>公司核心团队来自GE、Intel、华为、Amazon及海外著名科技机构，团队成员个人拥有多项发明专利和学术著作，公司现有十余项软件著作权。</p>
					</div>
					<div class="md-layout-item md-xsmall-size-100">
						<img src="images/guanyu.jpg"/>
					</div>
				</div>
			</div>
		</section>
		<section class="section-li" id="core">
			<div class="section-content font-white">
				<section-header title="核心技术" theme="light"></section-header>
				<div class="md-layout md-gutter md-alignment-center">
					<div class="md-layout-item md-size-33 md-small-size-33 md-large-small-33 md-xsmall-size-100 desc text-indent">
						基于微服务构架+区块链技术的自研SaaS软件平台，解决了企业客户及终端用户的数据隐私问题，提供基于AI技术的食品药品流通追溯服务、医疗领域的科技病例数据库、就诊评估、随访管理等服务。
					</div>
					<div class="md-layout-item md-xsmall-size-100">
						<img src="images/ditu.png"/>
					</div>
				</div>
			</div>
		</section>
		<section class="section-li">
			<div id="prod" class="section-content previte font-blank">
				<section-header title="产品中心" class="darken" theme="dark"></section-header>
				<section-header title="产品中心" class="lighten" theme="light"></section-header>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-medium-size-100">
						<div class="prod">
							<div class="head">
								<div class="title">
									<h2>e医同创云诊所</h2>
									<h2>SaaS云品台</h2>
								</div>
								<img src="images/ey.png">
							</div>
							<div class="body">
								<p>面向科室、诊所、医生工作室的智能化管理SaaS云服务</p>
								<p>科室和诊所提升管理效率的工具</p>
								<p>医生建立个人品牌和吸引患者的平台</p>
								<div class="detail">
									<h3>主要功能：</h3>
									<p>科室和诊所的患者关系管理</p>
									<p>患者数据和病例的全程收集</p>
									<p>医生及医生团队的创业工具</p>
									<h3>产品特性：</h3>
									<p>区块链技术：基于智能合约的服务框架，能实现链上链下通联、数据隐私保护和授权访问。</p>
									<p>人工智能：基于自然语言识别技术，实现医疗客服机器人，大幅提升工作效率。</p>
								</div>
							</div>
						</div>
					</div>
					<div class="md-layout-item md-medium-size-100">
						<div class="prod">
							<div class="head">
								<div class="title">
									<h2>基因检测服务</h2>
									<h2>数据平台</h2>
								</div>
								<img src="images/jy.png">
							</div>
							<div class="body">
								<p>面向基因检测服务机构的基因数据云服务</p>
								<div class="detail">
									<h3>主要功能：</h3>
									<p>基因检测服务管理：</p>
									<p>渠道用户管理 实验室检测管理</p>
									<p>集成化数据分析：</p>
									<p>结果计算模型 自动报告生成</p>
									<p>知识库系统和服务：</p>
									<p>遗传咨询辅助 只能文献检索</p>
									<h3>产品特性：</h3>
									<p>用户数据 临床数据 基因数据集成化分析</p>
									<p>生信 遗传 临床信息智能化分析</p>
									<p>SaaS服务 轻客户端结构 易部署</p>
								</div>
							</div>
						</div>
					</div>
					<div class="md-layout-item md-medium-size-100">
						<div class="prod">
							<div class="head">
								<div class="title">
									<h2>食品、药品流通</h2>
									<h2>和溯源智能化平台</h2>
								</div>
								<img src="images/sp.png">
							</div>
							<div class="body">
								<p>为农产品、食品、药品流通和溯源服务的智能化解决方案</p>
								<div class="detail">
									<h3>主要功能：</h3>
									<p>进、销、存系统</p>
									<p>供应链金融解决方案</p>
									<p>商城系统、门店系统物流智能分析</p>
									<p>溯源系统 供应链大数据分析</p>
									<h3>产品特性：</h3>
									<p>二维码产品全称追溯</p>
									<p>应用于智能化分析一体平台</p>
									<p>提供完整解决方案</p>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- 如果动态条数少与2条，则添加hide样式，将高度设为0 -->
		<section class="section-li" id="new"> 
			<div id="news" class="section-content previte font-white">
				<section-header title="公司动态" class="darken" theme="dark"></section-header>
				<section-header title="公司动态" class="lighten" theme="light"></section-header>
				<div class="md-layout md-gutter md-alignment-center">
					<div class="md-layout-item md-size-50 md-xsmall-size-100">
						<div class="new">
							<div class="date">
								<div class="detail box">21</div>
								<div class="year box">2015</div>
							</div>
							<div class="body">
								<h2 class="title">title</h2>
								<p class="content">撒地方数据多了放假啊圣诞节福利撒打飞机阿里斯顿缴费拉升阶段法拉就是第六届爱上邓丽君啊萨达龙卷风阿里电视剧法拉电视剧法拉第及随访拉看电视剧阿里贷款啥都看激发#sdfasdfasfas是的发发￥</p>
								<div class="more">查看更多</div>
							</div>
						</div>
					</div>
					
					<div class="md-layout-item md-size-50 md-xsmall-size-100">
						<div class="new">
							<div class="date">
								<div class="detail box">21</div>
								<div class="year box">2015</div>
							</div>
							<div class="body">
								<h2 class="title">title</h2>
								<p class="content">撒地方数据多了放假啊圣诞节福利撒打飞机阿里斯顿缴费拉升阶段法拉就是第六届爱上邓丽君啊萨达龙卷风阿里电视剧法拉电视剧法拉第及随访拉看电视剧阿里贷款啥都看激发#sdfasdfasfas是的发发￥</p>
								<div class="more">查看更多</div>
							</div>
						</div>
					</div>
					<div class="md-layout-item md-size-50 md-xsmall-size-100">
						<div class="new">
							<div class="date">
								<div class="detail box">21</div>
								<div class="year box">2015</div>
							</div>
							<div class="body">
								<h2 class="title">title</h2>
								<p class="content">撒地方数据多了放假啊圣诞节福利撒打飞机阿里斯顿缴费拉升阶段法拉就是第六届爱上邓丽君啊萨达龙卷风阿里电视剧法拉电视剧法拉第及随访拉看电视剧阿里贷款啥都看激发#sdfasdfasfas是的发发￥</p>
								<div class="more">查看更多</div>
							</div>
						</div>
					</div>
					
					<div class="md-layout-item md-size-50 md-xsmall-size-100">
						<div class="new">
							<div class="date">
								<div class="detail box">21</div>
								<div class="year box">2015</div>
							</div>
							<div class="body">
								<h2 class="title">title</h2>
								<p class="content">撒地方数据多了放假啊圣诞节福利撒打飞机阿里斯顿缴费拉升阶段法拉就是第六届爱上邓丽君啊萨达龙卷风阿里电视剧法拉电视剧法拉第及随访拉看电视剧阿里贷款啥都看激发#sdfasdfasfas是的发发￥</p>
								<div class="more">查看更多</div>
							</div>
						</div>
					</div>
					
					
					
				</div>
			</div>
		</section>
		<section class="section-li" id="co">
			<div class="section-content">
				<section-header title="合作伙伴" color="#143E64"></section-header>
				<div class="md-layout md-gutter md-alignment-left">
					<div class="md-layout-item md-xsmall-size-33 md-small-size-33">
						<img src="images/1.jpg" />
					</div>
					<div class="md-layout-item md-xsmall-size-33 md-small-size-33">
						<img src="images/2.jpg" />
					</div>
					<div class="md-layout-item md-xsmall-size-33 md-small-size-33">
						<img src="images/3.jpg" />
					</div>
					<div class="md-layout-item md-xsmall-size-33 md-small-size-33">
						<img src="images/4.jpg" />
					</div>
					<div class="md-layout-item md-xsmall-size-33 md-small-size-33">
						<img src="images/5.jpg" />
					</div>
				</div>
			</div>
		</section>
		<section class="section-li" id="contact">
			<div class="section-content">
				<section-header title="联系我们" color="#143E64"></section-header>
				<div class="md-layout  md-alignment-left">
					<div class="address">
						<div class="info">
							<span class="meta">地址:</span>
							<span class="content">北京市亦庄经济技术开发区力宝广场13号楼1106</span>
						</div>
					</div>
					<div class="md-layout-item postcode">
						<div class="info">
							<span class="meta">邮编:</span>
							<span class="content">100176</span>
						</div>
					</div>
					<div class="md-layout-item md-size-100">
						<div class="info">
							<span class="meta">邮箱:</span>
							<span class="content">wingedinfo@wingedcare.com</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section-li" id="footer">
			<footer>版权所有©2017北京芸朵星辰科技有限公司 京ICP备16062147号</footer>
		</section>

    
  </div>
</template>

<script>
import slider from "~/components/slider";
import sectionHeader from "~/components/sectionHeader";
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
		slider,
		sectionHeader
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
<style lang="less">
.main {
	.slider {
		width: 100%;
		height: calc(~"100vh - 1.8rem");
		.swiper-button-prev {
			background-image: url(/images/prev.png);
		}
		.swiper-button-next {
			background-image: url(/images/next.png);
		}
	}
	.section-li {
		width: 100%;
		.section-content {
			max-width: 1366px;
			margin: 0 auto;
			padding: 1.44rem;
			img {
				float: right;
			}
		}
	}
}
.text-indent {
	text-indent: 2em;
}
.desc {
	line-height: 1.8em;
}
.bg-white {
	background-color: #fff;
}

.font-white {
	color: #fff;
}

.font-blank {
	color: #666;
}

.previte {
	transform: translateY(-7.5rem);
}

p {
	line-height: 1.8em;
}

#about,
#core {
	.md-layout {
		align-items: flex-start;
	}
}

//产品样式
#prod {
	.darken {
		display: none;
	}
	.lighten {
		display: inline-block;
	}
}
.prod {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1.44rem 0.72rem;
	background-color: #eee;
	.head {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		.title {
			flex: 1;
			h2 {
				margin: 0.18rem 0;
				color: #2e6aa9;
			}
		}
		img {
			width: 1.8rem;
		}
	}
	.body {
		padding-top: 0.72rem;
		h3 {
			margin-top: 0.72rem;
			margin-bottom: 0.108rem;
		}
	}
}

//新闻样式
#new {
	.md-layout-item:nth-last-child(1),
	.md-layout-item:nth-last-child(2) {
		.new {
			position: absolute;
			width: calc(~"50% - 76px");
		}
	}
	.md-layout-item:nth-child(2) ~ .md-layout-item {
		.new {
			transform: translateY(1.8rem);
		}
		.title {
			color: #4ca4ff;
		}
		.content {
			color: #fff;
		}
		.more {
			color: #4ca4ff !important;
			&:after {
				border: 2px solid #4ca4ff;
				border-left-color: transparent;
				border-bottom-color: transparent;
			}
		}
	}
	.darken {
		display: inline-block;
	}
	.lighten {
		display: none;
	}
}
.hide {
	height: 0;
}
.new {
	display: flex;
	padding-bottom: 1.08rem;
	.date {
		color: #fff;
		margin-right: 0.72rem;
		.box {
			width: 5em;
			height: 5em;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.detail {
			background-color: #2e6aa9;
		}
		.year {
			background-color: #999;
		}
	}
	.body {
		.title {
			color: #2e6aa9;
		}
		.content {
			text-indent: 2em;
			color: #333;
			line-height: 2em;
			margin: 2.5em 0 1em;
			display: -webkit-box;
			-webkit-box-orient: vertical;

			-webkit-line-clamp: 3;
			overflow: hidden;
		}
		.more {
			display: flex;
			align-items: center;
			color: #2e6aa9;
			cursor: pointer;
			&:after {
				content: "";
				width: 0.7em;
				height: 0.7em;
				border: 2px solid #2e6aa9;
				border-left-color: transparent;
				border-bottom-color: transparent;
				transform: rotate(45deg);
				margin-left: 0.6em;
				display: inline-block;
				// background: url(/images/jiantou.png) no-repeat;
			}
			&:hover {
				text-decoration: underline;
			}
		}
	}
}

#core {
	background: url(/images/beijing1.jpg);
	padding-bottom: 4.32rem;
}

#new {
	background: url(/images/beijing2.jpg);
}

#co {
	img {
		width: 100%;
		margin: 4px 0;
	}
}
@media screen and (min-width: 601px) {
	#co {
		img {
			margin: 8px 0;
		}
	}
}

#contact {
	.address {
		padding-right: 0.36rem;
	}
	.postcode {
		.content {
			word-break: inherit !important;
		}
	}
	.info {
		display: flex;
		flex-direction: row;
		line-height: 1.8em;
		.meta {
			width: 3em;
		}
		.content {
			flex: 1;
			word-break: break-word;
		}
	}
}

#footer {
	padding: 0.5rem;
	text-align: center;
	background-color: #2e6aa9;
	color: #fff;
	// font-size: 1.2em;
}

@media screen and (max-width: 502px) {
	#contact {
		.address {
			padding-right: 0;
		}
	}
}

@media screen and (max-width: 600px) {
	.section-li {
		width: 100%;
		.section-content {
			padding: 0.72rem !important;
		}
	}
	.prod {
		padding: 0.72rem !important;
	}
}

@media screen and (max-width: 1264px) {
	#core {
		padding-bottom: 0;
	}
	.previte {
		transform: translateY(0);
	}
	#prod {
		.md-layout-item {
			padding: 0.36rem 0;
		}
		.detail {
			display: none;
		}
		.darken {
			display: inline-block;
		}
		.lighten {
			display: none;
		}
	}
	#new {
		.md-layout-item:nth-last-child(1),
		.md-layout-item:nth-last-child(2) {
			.new {
				transform: translateY(0) !important;
				position: static !important;
				width: inherit !important;
			}
		}
		.md-layout-item {
			.title {
				color: #4ca4ff !important;
			}
			.content {
				color: #fff !important;
			}
		}
		.more {
			color: #4ca4ff !important;
			&:after {
				border: 2px solid #4ca4ff;
				border-left-color: transparent;
				border-bottom-color: transparent;
			}
		}
		.darken {
			display: none;
		}
		.lighten {
			display: inline-block;
		}
	}
}
</style>




