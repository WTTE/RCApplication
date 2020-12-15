<template>
	<view class="home">
		<!-- 顶部标题图片 -->
		<image :src="topurl" mode="widthFix"></image>
		
		<!-- 子组件轮播图部分 -->
		<view>
			<swiperAdv v-if="res.length" :res="res[0]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[1]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[2]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[3]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[4]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[5]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[6]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[7]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[8]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[9]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[10]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[11]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[12]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[13]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[14]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[15]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[16]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[17]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[18]"></swiperAdv>
			<swiperAdv v-if="res.length" :res="res[19]"></swiperAdv>
		</view>
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
				res:[],
				// number:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
				flag: false
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
					// this.RespData = result.respData
					// console.log(this.RespData)
					this.res=[...this.res,...result.respData]
					// console.log(this.res,"11111111")
				}
			},
		},
		
		components: {
			swiperAdv,
			
		}
	}
</script>

<style lang="less">
	.home {
		background-color: #000000;
		image {
			display: block;
			width: 750rpx;
		}
	}
</style>
