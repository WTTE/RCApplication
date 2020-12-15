<template>
	<view class="content">
		<swiper indicator-dots :autoplay="false">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item"></image>
			</swiper-item>
		</swiper>
	</view>
	
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				id: "13090",
				pageNum: 1,
				swipers: [],
			}
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
				var str = result.respData.evaluationImage;
				var arr = str.split(",");
				console.log(arr, "wwewqeqw")
				this.swipers = arr;

			}

		}
	}
</script>

<style lang="scss">
	.content {
		swiper {
			height: 500rpx;
			image {
				width: 750rpx;
				height: 500rpx;
			}
		}
	}
</style>
