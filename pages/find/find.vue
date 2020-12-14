<template>
	<view>
		<swiper indicator-dots :autoplay="false">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				swipers: []
			}
		},
		onLoad() {
			this.getSwipers();
		},
		methods: {
			let result = await myRequestPost("/sojo.order.evaluation.list.page", {
				"pageSize": 6,
				"pageNum": this.pageNum,
				"orderByType": 10,
				"userGuid": "rc61007bb64721f4f46f68",
				"client": "applets",
				"mobileBrand": "microsoft",
				"mobileModel": "microsoft",
				"osVersion": "win10",
				"timestamp": 1607427013000,
				"sign": "A02492345B07C193BBB46F469E98CB5F"
			});
			this.swipers = result.message;
		},
	}
</script>

<style lang="scss">
</style>
