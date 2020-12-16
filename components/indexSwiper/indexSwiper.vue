<template>
	<view class="home">
		<!-- 顶部文字部分 -->
		<view class="top">
			<view class="top-left">
				<text class="top-up">最新上线</text>
				<text class="top-down">空房预约，快速入住~</text>
			</view>
			<view class="top-right">
				<text>{{num}}/24</text>
			</view>
		</view>

		<!-- 轮播图部分 -->
		<!-- <swiper indicator-dots :autoplay="true" :interval="4500" circular>
			<swiper-item v-for="item in res.storeImage.split(',')" :key="item">
				<image :src="item" mode="widthFix"></image>
			</swiper-item>
		</swiper> -->
	</view>
</template>

<script>
	props:['res']
	export default {
		data() {
			return {
				num: 1
			};
		}
	}
</script>

<style lang="less">
	.home {
		.top {
			display: flex;
			flex-direction: row;
			margin-top: 30rpx;

			.top-left {
				flex-grow: 1;
				width: 350rpx;
				height: 50rpx;

				.top-up {
					display: block;
					text-align: left;
					padding-left: 30rpx;
					margin-bottom: 7rpx;
					color: #ec7041;
					font-weight: 700;
				}

				.top-down {
					display: block;
					text-align: left;
					padding-left: 30rpx;
					margin-bottom: 7rpx;
					color: #9b9b9b;
				}

			}

			.top-right {
				flex-grow: 1;
				align-self: center;
				width: 350rpx;
				height: 50rpx;

				// background-color: red;
				text {
					display: block;
					text-align: right;
					padding-right: 30rpx;
				}
			}
		}

	}
</style>
