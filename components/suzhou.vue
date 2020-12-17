<template>
	<view class="contents" @click="hotel(res)">
		<view class="content1">
			<swiper :interval="4500" circular>
				<template v-if="res.storeImage">
					<swiper-item v-for="item in res.storeImage.split(',')" :key="item">
						<image :src="item" mode="widthFix"></image>
					</swiper-item>
				</template>
			</swiper>
		</view>
		<view class="word">
			<view class="laber">
				<text class="reserve">{{res.storeReserve}}</text>
				<template v-if="res.sellingLabel">
					<text v-for="item in res&&res.sellingLabel&&res.sellingLabel.split(',')">{{item}}</text>
				</template>
			</view>
			<view class="title">
				{{res.subTitle}}
			</view>
			<view class="name">
				<text>{{res.storeName}}</text>
				<text>特色度假酒店</text>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		myRequestPost
	} from "@/utils/request.js"
	export default {
		props: ['res', 'pageNum', 'cityCode'],
		data() {
			return {
				storeNo:""
			}
		},

		methods: {
			hotel(res) {
				uni.navigateTo({
					url: "/pages/hotelDetails/hotelDetails?storeNo=" + res.storeNo,
				});

			},


		}
	}
</script>

<style lang="scss">
	.contents {
		width: 93%;
		margin: auto;
		margin-top: 30rpx;
		border: 2rpx solid #eeee;

		.content1 {
			height: 440rpx;

			swiper {
				height: 196px;

				image {
					width: 348px;
					height: 210px;

				}
			}

		}

		.word {

			margin-left: 20rpx;

			.laber {
				opacity: 0.8;
				display: flex;

				.reserve {
					color: orangered;
				}

				text {
					display: block;


					font-size: 15rpx;
					background-color: #eee;
					margin-right: 8rpx;

				}
			}

			.title {
				opacity: 0.8;
				margin-top: 30rpx;
				display: block;
				font-size: 42rpx;
				font-weight: 300;
				margin-bottom: 20rpx;
			}
		}

		.name {
			display: flex;
			opacity: 0.5;

			text {
				display: block;
				margin-bottom: 30rpx;
			}
		}
	}
</style>
