<template>
<div v-swiper:mySwiper="swiperOption" class="v-slider">
    <div class="swiper-wrapper" :class="{'shown':show}">
      <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
		  <div class="message animate">我们专注为医疗健康、生命科学、食品药品流通与追溯及教育等行业提供智能化产品和服务，支持高效可信的跨行业协作</div>
        <img :src="banner" />
		
      </div>
    </div>
	<div class="swiper-pagination"  slot="pagination"></div>
	<div v-show="show" class="swiper-button">
		<div class="swiper-button-prev" slot="button-prev"></div>
    	<div class="swiper-button-next" slot="button-next"></div>
	</div>
    
  </div>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: _ => ["images/banner.jpg", "images/beijing1.jpg"]
		}
	},
	data() {
		return {
			swiperOption: {
				// autoplay: {
				// 	delay: 2500,
				// 	disableOnInteraction: false
				// },
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			},
			show: false,
			banners: this.items
		};
	},
	mounted() {
		this.show = true;
	}
};
</script>

<style lang="less">
.vertical-middle {
	height: 100%;
	&:before {
		content: "";
		display: inline-block;
		visibility: hidden;
		vertical-align: middle;
		width: 0;
		height: 100%;
	}
	> * {
		display: inline-block;
		vertical-align: middle;
	}
}
.v-slider {
	height: 7.2rem;
	overflow: hidden;
	.swiper-slide {
		// display: flex;
		// align-items: center;
		// justify-content: center;
		// text-align: center;
		position: relative;
		width: 100%;
		overflow: hidden;
		img {
			min-width: 100%;
			max-width: inherit;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 100%;
			z-index: -1;
		}
	}
	.message {
		position: absolute;
		top: 58vh;
		left: 50%;
		width: 70vw;
		max-width: 300px;
		padding: 1em 3em;
		background-color: rgba(0, 0, 0, 0.5);
		color: #ccc;
		text-align: center;
		transform: translateX(-50%);
		opacity: 0;
		transition-property: opacity;
		transition-delay: 0.5s;
	}
	.shown {
		.message {
			opacity: 1;
		}
	}
	.swiper-button {
		display: block;
		position: absolute;
		z-index: 1;
		max-width: 1366px;
		top: 50%;
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
	}
	// .swiper-button-prev {
	// 	left: 50%;
	// 	margin-right: -683px;
	// }
	// .swiper-button-next {
	// 	left: 50%;
	// 	margin-left: -683px;
	// }
}
@media screen and (max-width: 800px) {
	.v-slider {
		.swiper-button {
			display: none;
		}
	}
}
</style>
