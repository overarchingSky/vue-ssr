<template>
<div v-swiper:mySwiper="swiperOption" class="v-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
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
			default: _ => ["images/logo.jpg", "images/logo.jpg"]
		}
	},
	data() {
		return {
			swiperOption: {
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
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
.v-slider {
	.swiper-button {
		display: block;
	}
}
@media screen and (max-width: 800px) {
	.v-slider {
		.swiper-button {
			display: none;
		}
	}
}
</style>
