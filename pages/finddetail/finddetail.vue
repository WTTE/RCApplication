<template>
	<view>
		<swiper>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				swipers:[0];
			}
		},
		onLoad() {
			this.getSwipers();
		},
		methods: {
			async getSwipers() {
				let result = await myRequestPost("/sojo.order.evaluation.list.page");
				if (result.status === 0) {
					this.swipers = result.message;
				}
			},
		}
	}
</script>

<style lang="scss">
</style>
