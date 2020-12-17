<template>
	<view>
		<view class="lunbo">
			<swiper indicator-dots :autoplay="false">
				<swiper-item v-for="item in swipers" :key="item.id">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="big">
			<view class="content">
				<view class="link">
					<image :src="res.avatarLink"></image>

				</view>
				<view class="nickname"><text>{{res.nickname}}</text></view>
				<view class="zan" @click="zan">
					<uni-icons type="heart" size="25" :style="flag?'color:red':''"></uni-icons>
				</view>
				<view class="share" @click="open">
					<uni-icons type="redo" size="25" color="#636e72"></uni-icons>
				</view>
			</view>
			<view class="word"><text>{{res.evaluation}}</text></view>

			<!-- middle -->
			<view class="middle">
				<view class="left">
					<image :src="res.storeImage"></image>
				</view>
				<view class="right">
					<view class="zi">
						<text>{{wor[0]}}</text>
						<text class="ti">/</text>
						<text class="ti">{{wor[1]}}</text>
						<text class="ti">/</text>
						<text class="ti">{{wor[2]}}</text>
					</view>
					<view class="hotel">{{res.storeName}}</view>
					<view class="area">{{res.city}} {{res.area}}</view>
				</view>
			</view>
			<!-- 为你推荐 -->


			<!-- 分享 -->
			<uni-popup ref="sharepopup" type="bottom">
				<!-- <share-btn :sharedataTemp="sharedata"></share-btn> -->
				<share-btn></share-btn>
			</uni-popup>

		</view>
	</view>

</template>

<script>
	import shareBtn from '@/components/share-btn/share-btn.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniIcons from "@/components/uni-ui/uni-icons/uni-icons.vue";
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				evaluationId: "",
				id: "13090",
				pageNum: 1,
				swipers: [],
				wor: [],
				res: {},
				flag: false
			}
		},
		components: {
			uniIcons,
			uniPopup,
			shareBtn
		},
		onLoad(options) {
			this.id = options.id;
			this.getSwipers();
			this.getRecommend();
		},
		methods: {
			async getSwipers() {

				let result = await myRequestPost("/sojo.order.evaluation.get.detail", {
					"id": this.id,
					"userGuid": "rc61007bb64721f4f46f68",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "win10",
					"timestamp": 1607935973000,
					"sign": "C6203604290E8A2FB9C943DE3DA85F24"
				});
				// console.log(result,'gggg')
				var res = result.respData;
				this.res = res;
				// console.log(res, 'ttttttt')
				// console.log(res.avatarLink,'tutut')
				var str = result.respData.evaluationImage;
				var arr = str.split(",");
				// console.log(arr, "wwewqeqw")
				this.swipers = arr;
				var words = res.sellingLabels;
				this.wor = words
			},
			// 为你推荐
			async getRecommend() {
				let Recommend = await myRequestPost("/sojo.order.evaluation.get.detailListByStoreNo", {
					"pageSize": 6,
					"pageNum": 1,
					"orderByType": 10,
					"userGuid": "rc5b65f379743c2be46ab1",
					"evaluationId": 13087,
					"storeNo": "401000002890",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 7 x64",
					"timestamp": 1608166227000,
					"sign": "8AFD47AA15F43B5D0A61D1F0222206F8"
				});
				console.log(Recommend, "rrrrrrrrr")
				// var arr1 = "13087"

			},
			zan() {
				this.flag = !this.flag;
				console.log(this.flag)
			},

			open: function() {
				this.$refs.sharepopup.open();
			},
		}
	}
</script>

<style lang="scss">
	.lunbo {
		swiper {
			height: 580rpx;

			image {
				width: 750rpx;
				height: 580rpx;
			}
		}
	}

	.big {
		height: 1000rpx;
		border: 1px solid white;
		border-radius: 10px 10px 0px 0px;
		background-color: white;
		position: absolute;
		top: 51%;

		.content {
			display: flex;
			margin-top: 70rpx;
			padding: 0 25rpx;

			.link {
				// flex: 1;
				height: 70rpx;

				image {
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}

			}

			.nickname {
				flex: 1;
				font-size: 30rpx;
				height: 70rpx;
				line-height: 70rpx;
				margin-left: 30rpx;
			}

			.zan {
				margin-right: 50rpx;
			}
		}

		.word {
			font-size: 35rpx;
			margin-top: 50rpx;
			padding: 0 25rpx;
		}

	}

	.middle {
		display: flex;
		width: 700rpx;
		height: 180rpx;
		// border: 1px solid red;
		background-color: white;
		margin-top: 50rpx;
		margin-left: 25rpx;
		border-top: 1px solid rgb(238, 238, 238);
		box-shadow: 12px 12px 12px -12px #000;

		.left {
			image {
				width: 200rpx;
				height: 100%;
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			margin-top: 15rpx;
			margin-left: 45rpx;
			overflow: hidden;

			.zi {
				overflow: hidden;
				white-space: nowrap;
				width: 100%;
				font-size: 20rpx;
				color: rgb(252, 99, 21);

				.ti {
					display: inline-block;
					margin-left: 6rpx;
				}
			}

			.hotel {
				font-size: 30rpx;
				margin-top: 20rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.area {
				font-size: 10rpx;
				color: lightgrey;
				margin-top: 20rpx;
			}
		}
	}
</style>
