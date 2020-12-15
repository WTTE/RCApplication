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
			<view class="jiaotong" @click="jiaotong">
				查看交通指南
			</view>
			<view class="huiyuan">
				<image src="../../images/任享会员688+45天会期-通用通栏.png" mode="widthFix"></image>
			</view>
			<!-- {{JSON.stringify(storeModuleInfoVos)}} -->
			<view class="canguan">
				参观这间酒店
			</view>
			<view class="storeModuleInageVos" v-for="item in storeModuleInfoVos" :key="item.moduleId">
				<!-- {{item.title}} -->
				<view class="san">
					<view v-for="item2 in item.storeModuleImageVos">
						<image :src="item2.imageUrl"></image>
					</view>
				</view>
				<view class="gongqu">
					{{item.title}}
				</view>
			</view>
			<view class="cakan" @click="cakan">
				查看全部照片
			</view>
			<view class="youwan">
				游玩攻略
			</view>
			<!-- {{JSON.stringify(storeModuleInfoVos)}} -->
			<view class="attractionsImage">
				<image :src="this.attractionsImage" mode="widthFix"></image>
			</view>
			<view class="attractionsTitle">
				{{this.attractionsTitle}}
			</view>
			<view class="gengduo" @click="gengduo">
				查看更多
			</view>
			<view class="ruzhu">
				入住笔记
			</view>
			<!-- {{JSON.stringify(defaultImage)}} -->
			<view class="defaultImage" v-for="item in defaultImageList" :key="item.storeNo">
				<image :src="item.defaultImage"></image>
			</view>
			<view class="title" v-for="item in defaultImageList" :key="item.storeNo">
				{{item.title}}
			</view>
			<view class="nickname" v-for="item in defaultImageList" :key="item.storeNo">
				{{item.nickname}}
			</view>
			<view class="quanbu">
				查看全部
			</view>
			<view class="dingfang">
				订房必读
			</view>
			<view class="enterNoticeSubTitle">
				{{this.enterNoticeSubTitle}}
			</view>
			<view class="xiangqing" @click="xiangqing">
				查看详情
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
				storeModuleInfoVos: [],
				attractionsImage: "",
				attractionsTitle: {},
				enterNoticeSubTitle: {},
				defaultImageList: [],
			}
		},
		onLoad() {
			this.getPicture();
			this.getName()
		},
		methods: {
			jiaotong() {
				uni.navigateTo({
					url: "../trafficGuidance/trafficGuidance"
				});
			},
			
			cakan() {
				uni.navigateTo({
					url: "../viewAllphotos/viewAllphotos"
				});
			},
			gengduo() {
				uni.navigateTo({
					url: "../toViewmore/toViewmore"
				});
			},
			xiangqing() {
				uni.navigateTo({
					url: "../viewDetails/viewDetails"
				});
			},
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
				this.storeModuleInfoVos = result.respData.storeModuleInfoVos
				this.attractionsImage = result.respData.attractionsImage
				this.attractionsTitle = result.respData.attractionsTitle
				this.enterNoticeSubTitle = result.respData.enterNoticeSubTitle
				console.log(this.res);
			},
			async getName() {
				let result = await myRequestPost("/sojo.order.store.evaluation.list.es", {

					"storeNo": "401000002719",
					"userGuid": "rc787915dd3b521a385d0f",
					"pageNum": 1,
					"pageSize": 5,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608003909000,
					"sign": "636A7A1B8055E3A979B9A941A18239F2"
				});
				this.defaultImageList = result.respData.list

			}
		},

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
		height: 3400rpx;
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

		.huiyuan {
			width: 100%;
			text-align: center;
			margin-top: 30rpx;
		}

		.jiaotong {
			margin-left: 40rpx;
			margin-top: 20rpx;
			font-size: 30rpx;
			color: #0399d4;
		}

		.canguan {
			margin-top: 40rpx;
			margin-left: 40rpx;
			font-size: 45rpx;
			font-weight: 600;
		}

		.storeModuleInageVos {

			margin-left: 40rpx;
			margin-top: 40rpx;

			.san {
				display: inline-flex;
				flex-direction: row;
			}

			image {
				width: 200rpx;
				height: 200rpx;
				margin-left: 20rpx;
			}

			.gongqu {
				margin-top: 40rpx;
				margin-left: 20rpx;
				font-size: 35rpx;
				font-weight: 200;
			}
		}

		.cakan {
			margin-left: 40rpx;
			margin-top: 40rpx;
			font-size: 30rpx;
			color: #0399d4;
		}

		.attractionsImage {
			text-align: center;
			margin-top: 40rpx;

			image {
				height: 400rpx;
				border-radius: 3px;
			}
		}

		.attractionsTitle {
			font-size: 29rpx;
			font-weight: 300;
			text-align: center;
			margin-top: 40rpx;
			margin-left: 35rpx;
			margin-right: 30rpx;
		}

		.youwan {
			margin-top: 100rpx;
			margin-left: 40rpx;
			font-size: 45rpx;
			font-weight: 600;
		}

		.gengduo {
			margin-left: 40rpx;
			margin-top: 40rpx;
			font-size: 30rpx;
			color: #0399d4;
		}

		.dingfang {
			margin-top: 100rpx;
			margin-left: 40rpx;
			font-size: 45rpx;
			font-weight: 600;
		}

		.enterNoticeSubTitle {
			font-size: 29rpx;
			font-weight: 300;
			text-align: center;
			margin-top: 40rpx;
			margin-left: 40rpx;
			margin-right: 30rpx;
		}

		.xiangqing {
			margin-left: 40rpx;
			margin-top: 40rpx;
			font-size: 30rpx;
			color: #0399d4;
		}

		.ruzhu {
			margin-top: 100rpx;
			margin-left: 40rpx;
			font-size: 45rpx;
			font-weight: 600;
		}

		.defaultImage {
			margin-top: 20rpx;
			display: inline-flex;
			flex-direction: row;

			image {
				width: 300rpx;
				height: 300rpx;
				margin-left: 50rpx;
			}
		}

		.title {
			margin-top: 20rpx;
			margin-left: 100rpx;
			display: inline-block;
			font-size: 30rpx;
			font-weight: 300;
		}

		.nickname {
			margin-top: 20rpx;
			margin-left: 260rpx;
			display: inline-block;
			font-size: 20rpx;
			font-weight: 200;
		}

		.quanbu {
			margin-left: 40rpx;
			margin-top: 40rpx;
			font-size: 30rpx;
			color: #0399d4;
		}
	}
</style>
