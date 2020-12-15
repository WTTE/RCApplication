<template>
	<view class="all">
		<view class="content">
			<!-- #ifdef H5 -->
			<rich-text :nodes="trafficGuide"></rich-text>
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
				trafficGuide: [],
			}
		},
		onLoad(options) {
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
				console.log(this.trafficGuide)
				this.trafficGuide = result.respData.trafficGuide
			}
		}
	}
</script>
<style lang="scss">

</style>
