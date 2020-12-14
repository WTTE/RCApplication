<template>
	<view class="home">
		<Preferent></Preferent>
		<Search></Search>
		<swiper>
			<swiper-item >
				<image src="https://image.ructrip.com/ructrip/1564132913649/_DSC2483.jpg?imageView2/1/w/672/h/430" ></image>
			</swiper-item>
			<swiper-item >
				<image src="https://image.ructrip.com/ructrip/1564132913621/_DSC2486.jpg?imageView2/1/w/672/h/430" ></image>
			</swiper-item>
			<swiper-item >
				<image src="https://image.ructrip.com/ructrip/1564132913658/_DSC2482.jpg?imageView2/1/w/672/h/430" ></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Search from '../../components/search.vue'
	import Preferent from '../../components/preferent.vue'
	import {
		myRequestPost
	} from "@/utils/request.js"
	export default {
		components: {
			Search,
			Preferent,

		},
		data() {
			return {
			res:""
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
				this.res = result.respData.storeImage
				console.log(result.respData.storeImage);
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 690rpx;
			height: 390rpx;
			margin: auto;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
