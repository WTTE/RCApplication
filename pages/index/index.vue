<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots :autoplay="true" :interval="3000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.pics" mode="widthFix" @click="gopages(item)"></image>
			</swiper-item>
		</swiper>
		<!-- 搜索框 -->
		<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
		<!-- nav板块 -->
		<uni-grid :column="4" :highlight="false" :showBorder="false">
			<uni-grid-item v-for="item in navs" :key="item.title">
				<image :src="item.pics" @click="gopages(item)"></image>
			</uni-grid-item>
		</uni-grid>
		<!-- 广告部分 -->
		<view class="adv">
			<image :src="adv[0]" mode="widthFix" @click="goVip"></image>
			<image :src="adv[1]" mode="widthFix" @click="goPrize"></image>
		</view>
		<!-- 下方轮播图 -->
		
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue";
	import uniSearchBar from '@/components/uni-ui/uni-search-bar/uni-search-bar-search.vue';
	import uniGrid from "@/components/uni-ui/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-ui/uni-grid-item/uni-grid-item.vue"
	
	export default {
		data() {
			return {
				swipers: [{
						id: 0,
						pics: "https://image.ructrip.com/ructrip/1607512632892/双十二每日抢购头图的副本banner.jpg",
						title: "双十二每日抢购",
						path: "/pages/welfare/welfare"
					},
					{
						id: 1,
						pics: "https://image.ructrip.com/ructrip/1607437690458/NO46&47民宿上新banner-双十二  新版.jpg",
						title: "民宿上新",
						path: "/pages/news/news"
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
				
			}
		},
		onLoad() {
			
		},
		methods: {
			gopages(item) {
				uni.navigateTo({
					url: item.path
				})
			},
			goVip(){
				uni.navigateTo({
					url:"/pages/welfare/welfare"
				})
			},
			goPrize(){
				uni.navigateTo({
					url:"/pages/prize/prize"
				})
			}
		},
		components: {
			uniSearchBar,
			uniGrid,
			uniGridItem
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			height: 450rpx;

			image {
				width: 750rpx;
				
			}

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
		
	

	}
</style>
