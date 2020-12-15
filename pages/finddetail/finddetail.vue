<template>
	<view>
		<swiper indicator-dots :autoplay="true">
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
				// image: []
			}
		},
		onLoad(options) {
			
			this.id = options.id;
			this.getSwipers();

			// console.log(options.id, "wwwwwwwwwwwwwww")
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

				console.log(result, "xxxx")

				var str = result.respData.evaluationImage;
				var arr = str.split(",");
				console.log(arr,"wwewqeqw")
				this.swipers = arr;
				// for(var i=0;i<this.swipers.length;i++){
				//  var arr = this.swipers[i].evaluationImage.split(",");
				//  this.image = arr;
				//  }
				 // console.log(this.image,'weewqrfeweffe2fefewfe3wfe24')
				 }

			}
		}
	
</script>

<style>

</style>
