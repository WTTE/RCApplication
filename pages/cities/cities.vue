<template>
	<view>
		<view v-for="item in res">
			<image :src="item.scenicSpotImage" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				url: []
			}
		},
		onLoad() {
			this.getSwiperAdv()
		},
		methods: {
			async getSwiperAdv() {
				let result = await myRequestPost("/sojo.equity.morehot.attractions.list", {
					"cityCode": "320200",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608037956000,
					"sign": "10D0698D8C83768447166403B7592513"
				});
				if (result.respCode === "00") {
					this.res = result.respData
					console.log(this.res,"11111111111")
				}
			},
		}
	}
</script>

<style>
	image{
		width: 750rpx;
	}
</style>
