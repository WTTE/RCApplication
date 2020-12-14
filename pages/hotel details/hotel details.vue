<template>
	<view class="content">
		<view class="picture">
			<image :src="this.res" mode="widthFix"></image>
		</view>
		<view class="all">
			<view class="sellingLabel">
				{{this.sellingLabel}}
				<image class="xing" src="../../images/五角星.png"></image>
				<image class="fen" src="../../images/分享.png"></image>
			</view>
			<view class="subTitle">
				{{this.subTitle}}
			</view>
			<view class="ab">
				<view class="storeName">
					{{this.storeName}}
					<view class="area">
						{{this.city}}
						{{this.area}}
						{{this.address}}
						<image class="ke" src="../../images/客服.png"></image>
					</view>
				</view>
			</view>
			<view class="trafficGuide">
				{{this.trafficGuide}}
			</view>
			<view class="huiyuan">
				<image src="../../images/任享会员688+45天会期-通用通栏.png" mode="widthFix"></image>
			</view>
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
				res: "",
				sellingLabel: {},
				subTitle: {},
				storeName: {},
				area: {},
				city: {},
				address: {},
				trafficGuide: {},
			}
		},
		onLoad() {
			this.getPicture()
		},
		methods: {
			async getPicture() {
				let result = await myRequestPost("/sojo.equity.store.detail.v.two", {
					"storeNo": "401000002719",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607425661000,
					"sign": "53E5E8A53FCC179B1006E2A61F2D6A8E"
				});
				this.res = result.respData.storeDetailImage
				this.sellingLabel = result.respData.sellingLabel
				this.subTitle = result.respData.subTitle
				this.storeName = result.respData.storeName
				this.area = result.respData.area
				this.city = result.respData.city
				this.address = result.respData.address
				this.trafficGuide = result.respData.trafficGuide
				console.log(this.res);
			}
		}
	}
</script>

<style lang="scss">
	.picture {
		width: 100%;
		background-color: pink;
		display: flex;

		image {
			width: 375px;
		}
	}

	.all {
		width: 100%;
		height: 1000rpx;
		// background-color: yellow;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;

		.sellingLabel {
			margin-top: 60rpx;
			margin-left: 40rpx;
			font-size: 16rpx;
			font-weight: 200;
			line-height: 100rpx;
			display: flex;

			.xing {
				width: 40px;
				height: 40px;
				margin-left: 100rpx;

			}

			.fen {
				width: 40px;
				height: 40px;
				margin-left: 70rpx;
			}
		}

		.subTitle {
			margin-top: 40rpx;
			margin-left: 40rpx;
			font-size: 45rpx;
			font-weight: 300;
		}

		.ab {
			border-radius: 3px;
			height: 130rpx;
			background-color: #f8f7f9;
			margin-left: 40rpx;
			margin-right: 40rpx;
			margin-top: 40rpx;

			.storeName {
				margin-top: 5px;
				margin-left: 40rpx;
				margin-right: 40rpx;
				font-size: 30rpx;
				font-weight: 300;
				line-height: 45px;

				.area {
					margin-top: -50rpx;
					font-size: 16rpx;
					font-weight: 100;

					.ke {
						width: 40px;
						height: 40px;
						margin-left: 170rpx;
						float: right;
						right: 30rpx;
						bottom: 100rpx;
					}
				}

			}
		}
		.huiyuan{
			width: 100%;
			text-align: center;
		}
	}
</style>
