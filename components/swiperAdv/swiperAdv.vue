<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="nav">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="item in storeImage">
					<view class="swiper-item">
						<image :src="item"></image>
						<!-- {{item.content}} -->
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-ui/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		data() {
			return {
				info: [{
					content: '内容 A'
				}, {
					content: '内容 B'
				}, {
					content: '内容 C'
				}],
				current: 0,
				mode: 'round',
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		},
		components: {
			uniSwiperDot
		}
	}
</script>

<style>

</style>
