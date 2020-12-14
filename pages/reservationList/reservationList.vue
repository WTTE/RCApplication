<template>
	<view class="home">
		<!-- 顶部标题图片 -->
		<image :src="topurl" mode="widthFix"></image>
		<!-- 轮播图部分 -->
		<swiperAdv :storeImage="storeImage"></swiperAdv>
	</view>
</template>

<script>
	import swiperAdv from '@/components/swiperAdv/swiperAdv.vue'
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'

	export default {
		data() {
			return {
				topurl: "https://s3.ax1x.com/2020/12/13/reVo7T.png",
				storeImage: [],
				sellingLabel: []
			}
		},

		onLoad() {
			this.getSwiperAdv()
		},

		methods: {
			async getSwiperAdv() {
				let result = await myRequestPost("/sojourn.capi.rankReserve.listTop20", {
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607830073000,
					"sign": "D1A762F8F38768856D0A5B69085CE13A"
				});
				if (result.respCode === "00") {
					for (var i = 0; i <= 18; i++) {
						console.log("9999999999"),
						this.storeImage[i] = result.respData[i].storeImage,
						console.log(this.storeImage)
					}


				}
			},
		},
		components: {

		}
	}
</script>

<style>
	image {
		width: 750rpx;
	}
</style>
