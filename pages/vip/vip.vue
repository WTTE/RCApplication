<template>
	<view>
		<view>
			<image src="https://image.ructrip.com/ructrip/1597395391331/1280元如程详情页更新-官方.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670328318/1280元如程详情页更新-官方_03.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670352795/1280元如程详情页更新-官方_04.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1593312867801/如程详情页更新-官方_05.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670361565/1280元如程详情页更新-官方_06.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670364380/1280元如程详情页更新-官方_07.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670367646/1280元如程详情页更新-官方_08.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670370975/1280元如程详情页更新-官方_09.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670386417/1280%E5%85%83%E5%A6%82%E7%A8%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E6%9B%B4%E6%96%B0-%E5%AE%98%E6%96%B9_10.jpg"
			 mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670408037/1280元如程详情页更新-官方_15.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670432771/1280元如程详情页更新-官方_17.jpg" mode="widthFix"></image>
			<image src="https://image.ructrip.com/ructrip/1585670437598/1280元如程详情页更新-官方_20.jpg" mode="widthFix"></image>
			<view class="bottom">
				<button class="left" @click="tan">加入会员</button>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},

		methods: {
			tan() {
				uni.showToast({
					title: '开通成功',
					duration: 2000
				});
			}
		}

	}
</script>

<style scoped lang="less">
	image {
		width: 100%;
	}

	.bottom {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #FFFFFF;
		box-shadow: 0 2px;
		padding: 16rpx 0;

		button {
			width: 325rpx;
			height: 90rpx;
			background-color: #fc6315;
			font-size: 36rpx;
			font-weight: 700;
			color: #FFFFFF;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
