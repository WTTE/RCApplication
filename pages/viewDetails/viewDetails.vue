<template>
	<view class="all">
		<view class="content">
			<!-- #ifdef H5 -->
			<rich-text :nodes="enterNotice"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<rich-text :nodes="enterNotice"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<rich-text :nodes="enterNotice"></rich-text>
			<!-- #endif -->
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
				enterNotice: [],
			}
		},
		onLoad(options) {
			this.storeNo=options.storeNo
			
			this.getPicture()
		},
		methods: {
			async getPicture() {
				let result = await myRequestPost("/sojo.equity.store.detail.v.two", {
					"storeNo": this.storeNo,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607425661000,
					"sign": "53E5E8A53FCC179B1006E2A61F2D6A8E"
				});
				this.enterNotice = result.respData.enterNotice
				console.log(this.enterNotice)
			}
		}
	}
</script>
<style lang="scss">
	
</style>

