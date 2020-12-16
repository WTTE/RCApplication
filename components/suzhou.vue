<template>
	<view class="contents">
		<view class="content1">
			<swiper :interval="4500" circular>
				<swiper-item v-for="item in res.storeImage.split(',')" :key="item">
					<image :src="item" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="word">
			<view class="laber">
				<text class="reserve">{{res.storeReserve}}</text>
				<text v-for="item in res.sellingLabel.split(',')">{{item}}</text>
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
		props: ['res', 'pageNum'],
		data() {
			return {

			}
		},

		methods: {

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
			width: 96%;
			margin: auto;

			.laber {

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
				margin-top: 30rpx;
				display: block;
				font-size: 42rpx;
				font-weight: 300;
				margin-bottom: 20rpx;
			}
		}

		.name {
			display: flex;

			text {
				display: block;
				margin-bottom: 30rpx;
			}
		}
	}
</style>
