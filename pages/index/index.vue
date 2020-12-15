<template>
	<view class="home">
		<Preferent></Preferent>
		<Search></Search>
		<Suzhou></Suzhou>
		<view class="content1">
			<swiper :interval="4500" circular>
				<swiper-item v-for="item in a">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
			<view class="xiazhou">
				<view class="title1">
					<text class="title" v-for="item in title">{{item}}</text>
				</view>
				<view class="word1"><text>{{this.word1}}</text></view>
				<view class="word2">
					<text>{{this.addr}}</text>
					<text>{{this.word2}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Search from '../../components/search.vue'
	import Preferent from '../../components/preferent.vue'
	import Suzhou from '../../components/suzhou.vue'
	import {
		myRequestPost
	} from "@/utils/request.js"
	export default {
		components: {
			Search,
			Preferent,
			Suzhou
		},
		data() {
			return {
				res: "",
				title: [],
				word1: "",
				word2: "",
				addr: "",
				a: []
			}
		},
		onLoad() {
			this.getword();
		},
		methods: {
			async getword() {
				let result = await myRequestPost("/sojo.equity.store.detail.v.two", {
					"storeNo": "401000001935",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607426297000,
					"sign": "48805753110D7AB46CA4EE8E34737E9F"
				})

				this.title = result.respData.sellingLabel.split(",")
				this.word1 = result.respData.subTitle
				this.addr = result.respData.city
				this.word2 = result.respData.storeName
				this.a = result.respData.storeImage.split(",")
				console.log(result.respData);

			}
		}
	}
</script>

<style lang="scss">
	.content1 {
		border: 1rpx solid #eee;
		height: 650rpx;
		width: 90%;
		margin: auto;
		margin-top: 30rpx;

		.xiazhou {
			width: 700rpx;
			margin-left: 30rpx;
		}


		.title1 {
			display: flex;
			margin: auto;


		}

		swiper {
			width: 100%;
			height: 390rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.title {
			height: 50rpx;
			font-size: 25rpx;
			line-height: 50rpx;
			text-align: center;
			display: block;
			margin-right: 10rpx;
			margin-top: 30rpx;
			padding-left: 8rpx;
			padding-right: 8rpx;
			background-color: #E5E5E5;
			opacity: 0.6;
		}

		.word1 {
			text {
				display: block;
				margin-top: 30rpx;
				margin-right: 20rpx;
				font-size: 45rpx;
				opacity: 0.6;
			}

		}

		.word2 {
			margin-top: 20rpx;
			margin-right: 20rpx;
			opacity: 0.4;
		}
	}
</style>
