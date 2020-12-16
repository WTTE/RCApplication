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
					<uni-icons type="heart" size="25" :style="flag?'color:red':''" ></uni-icons>
				</view>
				<view class="share" >
					<uni-icons type="redo" size="25" color="black"></uni-icons>
				</view>
			</view>
			<view class="word"><text>{{res.evaluation}}</text></view>

		</view>
	</view>

</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniIcons from "@/components/uni-ui/uni-icons/uni-icons.vue";
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				id: "13090",
				pageNum: 1,
				swipers: [],
				res: {},
				flag:false
			}
		},
		components: {
			uniIcons,
			uniPopup
		},
		onLoad(options) {
			this.id = options.id;
			this.getSwipers();
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
				// console.log(res,'ttttttt')
				// console.log(res.avatarLink,'tutut')
				var str = result.respData.evaluationImage;
				var arr = str.split(",");
				// console.log(arr, "wwewqeqw")
				this.swipers = arr;
				
			},
			zan(){
				this.flag = !this.flag;
				console.log(this.flag)
			}
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
				height: 70rpx;

				image {
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
					// margin-left: 40rpx;
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


			.share {}
		}

		.word {
			font-size: 35rpx;
			margin-top: 50rpx;
			padding: 0 25rpx;
		}

	}
</style>
