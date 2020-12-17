<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots :autoplay="true" :interval="3000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.pics" mode="widthFix" @click="gopages(item)"></image>
			</swiper-item>
		</swiper>

		<!-- 搜索框 -->
		<button @click="search" class="search">根据城市/出行日程进行搜索</button>
		
		<!-- nav板块 -->
		<uni-grid :column="4" :highlight="false" :showBorder="false">
			<uni-grid-item v-for="item in navs" :key="item.title">
				<image :src="item.pics" @click="gopages(item)"></image>
			</uni-grid-item>
		</uni-grid>

		<!-- 试睡专区 -->
		<view class="sleepFather">
			<image :src="sleep" mode="widthFix" class="sleep" @click="goSleep"></image>
		</view>

		<!-- 广告部分 -->
		<view class="adv">
			<image :src="adv[0]" mode="widthFix" @click="goVip"></image>
			<image :src="adv[1]" mode="widthFix" @click="goPrize"></image>
		</view>

		<!-- 首页浮标 -->
		<image :src="floatTip" class="floatTip" mode="widthFix" @click="goVip"></image>


		<!-- 文字部分 -->
		<view class="words">
			<text class="words-up">最新上线</text>
			<text class="words-down">空房预约，快速入住~</text>
		</view>

		<!-- 轮播图部分 -->
		<!-- <view class="downSwiper">
			<uni-swiper-dot :info="info" :current="current" :mode="nav" :dots-styles="dotsStyles" field="content">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view :class="item.colorClass" class="swiper-item">
							<image class="image" :src="item.url" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view> -->


		<!-- 底部子组件板块 -->
		
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue"
	import uniGrid from "@/components/uni-ui/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-ui/uni-grid-item/uni-grid-item.vue"
	import uniSwiperDot from "@/components/uni-ui/uni-swiper-dot/uni-swiper-dot.vue"
	// import {
	// 	myRequestPost
	// } from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				// resPic: [],
				info: [{
					index: 0,
					url: "https://image.ructrip.com/ructrip/1608023690656/DSC_9499-1.jpg",
					content: '1/5'
				}, {
					index: 1,
					url: "https://image.ructrip.com/ructrip/1608014044445/DSC_0172-1.jpg",
					content: '2/5'
				}, {
					index: 2,
					url: "https://image.ructrip.com/ructrip/1607949042234/封一.jpg",
					content: '3/5'
				}, {
					index: 3,
					url: "https://image.ructrip.com/ructrip/1607516137549/1601154983921.jpg",
					content: '4/5'
				}, {
					index: 4,
					url: "https://image.ructrip.com/ructrip/1607426919075/封一.jpg",
					content: '5/5'
				}],
				current: 0,
				mode: 'round',
				swipers: [{
						id: 0,
						pics: "https://image.ructrip.com/ructrip/1607437690458/NO46&47民宿上新banner-双十二  新版.jpg",
						title: "民宿上新",
						path: "/pages/news/news"
					},
					{
						id: 1,
						pics: "https://image.ructrip.com/ructrip/1607512632892/双十二每日抢购头图的副本banner.jpg",
						title: "双十二每日抢购",
						path: "/pages/welfare/welfare"
					},
					{
						id: 2,
						pics: "https://image.ructrip.com/ructrip/1608030369899/1215 如程-高定（江西丨高岭宿集）banner.jpg",
						title: "高定（江西丨高岭宿集）",
						path: "/pages/reservationList/reservationList"
					},
					{
						id: 3,
						pics: "https://image.ructrip.com/ructrip/1607420370102/1204-如程小程序版本更新-客服热线-banner .jpg",
						title: "小程序版本更新",
						path: "/pages/customer/customer"
					},
					{
						id: 4,
						pics: "https://image.ructrip.com/ructrip/1607420414465/1204-如程小程序版本更新-12月上新预告.jpg",
						title: "上新预告",
						path: "/pages/hotel/hotel"
					},
					{
						id: 5,
						pics: "https://image.ructrip.com/ructrip/1608128246925/%E5%8F%8C%E5%8D%81%E4%BA%8C%E5%B2%81%E6%9C%AB%E6%9A%96%E5%86%AC%E5%AD%A3banner.jpg",
						title: "冬季福利",
						path: "/pages/winter/winter"
					}
				],
				navs: [{
						pics: "https://image.ructrip.com/ructrip/1607422116032/最新上线@3x.png",
						title: "最新上线",
						path: "/pages/news/news"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422043859/预订指南@3x.png",
						title: "预定指南",
						path: "/pages/reservation/reservation"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422059182/专属客服@3x.png",
						title: "专属客服",
						path: "/pages/customer/customer"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422152381/酒店合集@3x.png",
						title: "酒店合集",
						path: "/pages/hotel/hotel"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422268333/开放城市@3x.png",
						title: "开放城市",
						path: "/pages/cities/cities"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422291089/预订榜单@3x.png",
						title: "预定榜单",
						path: "/pages/reservationList/reservationList"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422363618/天天抽奖@3x.png",
						title: "天天抽奖",
						path: "/pages/prize/prize"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422386263/新人福利@3x.png",
						title: "新人福利",
						path: "/pages/welfare/welfare"
					}
				],
				adv: [
					"https://image.ructrip.com/ructrip/1607607428908/【new688】.png",
					"https://image.ructrip.com/ructrip/1607513447380/双十二.jpg"
				],
				floatTip: "https://image.ructrip.com/ructrip/1603255818332/首页浮标1.png",
				sleep: "https://image.ructrip.com/ructrip/1607512681756/试睡专区通栏.jpg"
			}
		},
		onLoad(options) {
			// this.getindexSwiper()
		},
		methods: {
			search(){
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			gopages(item) {
				uni.navigateTo({
					url: item.path
				})
			},
			goVip() {
				uni.navigateTo({
					url: "/pages/welfare/welfare"
				})
			},
			goPrize() {
				uni.navigateTo({
					url: "/pages/prize/prize"
				})
			},
			goSleep() {
				uni.navigateTo({
					url: "/pages/sleep/sleep"
				})
			},
			// async getindexSwiper() {
			// 	let result = await myRequestPost("/sojo.equity.store.anniversary.store.list", {
			// 		"pageNum": 1,
			// 		"pageSize": 5,
			// 		"client": "applets",
			// 		"mobileBrand": "microsoft",
			// 		"mobileModel": "microsoft",
			// 		"osVersion": "Windows 10 x64",
			// 		"timestamp": 1608125706000,
			// 		"sign": "BF47BC48F1B83C4DCAD24FCA56ED3177"
			// 	});
			// 	if (result.respCode === "00") {
			// 		this.res = result.respData.equityVoPageInfo.list
			// 		for (var i = 0; i < 5; i++) {
			// 			this.resPic[i] = this.res[i].storeImage.split(',')[0]
			// 		}
			// 		console.log(this.resPic, "22222222")
			// 	}
			// }
		},
		components: {
			uniGrid,
			uniGridItem,
			uniSwiperDot

		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			height: 572rpx;

			image {
				width: 750rpx;

			}

		}
		.search{
			margin-top: 10rpx;
			width: 700rpx;
			height: 100rpx;
			line-height: 100rpx;
			border:1px solid white;
			outline: none;
			outline-color: #FFFFFF;
			border-radius: 35rpx;
			background-color: #FFFFFF;
			color: #9d9d9d;
			position: absolute;
			margin-left:25rpx;
			top:410rpx;
		}
		.uni-grid-item {
			text-align: center;

			image {
				width: 185rpx;
				height: 156rpx;
				margin-top: 10rpx;
			}
		}

		.adv {
			text-align: center;

			image {
				width: 330rpx;
				margin-top: 10rpx;
				margin-left: 18rpx;
				margin-right: 18rpx;
			}
		}

		.sleepFather {
			padding: 0 25rpx;
			margin-bottom: 20rpx;

			.sleep {
				width: 700rpx;
			}
		}

		.floatTip {
			width: 150rpx;
			position: fixed;
			top: 950rpx;
			left: 570rpx;
			z-index: 999;
		}
		.words{
			.words-up{
				display: block;
				text-align: left;
				padding-left: 30rpx;
				margin-top: 30rpx;
				margin-bottom: 7rpx;
				color: #ec7041;
				font-weight: 700;
			}
			.words-down{
				display: block;
				text-align: left;
				padding-left: 30rpx;
				margin-bottom: 10rpx;
				color: #9b9b9b;
				font-size: 25rpx;
			}
		}
		.downSwiper {
			swiper {
				height: 380rpx;

				image {
					width: 750rpx;

				}

			}
		}

	}
</style>
