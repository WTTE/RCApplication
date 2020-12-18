<template>
	<view class="home">
		<button class="search" @click="goSearch">
			<text class="country">全国</text>
			<text class="icon1 icon-jiantou9 iconfont"></text>
			<text class="city">{{title}}</text>
		</button>
		<image :src="url" mode="widthFix" @click="goVip"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"点击选择城市",
				url:"https://image.ructrip.com/ructrip/1608122201728/1204-未购卡-任享会员688+20天会期-通用通览.jpg"
			}
		},
		methods: {
			goSearch(){
				uni.navigateTo({
					url: "/pages/searchCities/searchCities"
				})
			},
			goVip() {
				uni.navigateTo({
					url: "/pages/welfare/welfare"
				})
			}
		}
	}
</script>

<style lang="less">
	.home{
		.search {
			margin-top: 20rpx;
			width: 680rpx;
			height: 80rpx;
			line-height: 80rpx;
			border: 1px solid #e0e0e0;
			background-color: #FFFFFF;
			outline: hidden;
			color: #9d9d9d;
			margin-left: 35rpx;
			font-size: 28rpx;
			position: relative;
			.country {
				font-size: 28rpx;
				font-weight: 600;
				color: #4a4a4a;
				margin-right: 22rpx;
				float: left;
			}
			.icon1{
				font-size: 18rpx;
				color: #b1b1b1;
				margin-right: 12rpx;
				float: left;
			}
			.city{
				float: left;
			}
		}
		image{
			width: 680rpx;
			margin-top: 20rpx;
			margin-left: 35rpx;
		}
	}
	
</style>
