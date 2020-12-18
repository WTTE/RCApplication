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
				// id: "13090",
				pageNum: 1,
				swipers: [],
				// image: []
				ddd: []
			}
		},
		onLoad(options) {
			console.log(options,"lllllllllllllllllllll")
			this.k = options.in;
			console.log(this.k,"ddddddddddddd");
			this.th = options.id;
			this.getRecommend();

			console.log(options.id, "wwwwwwwwwwwwwww")
		},
		methods: {
			// async getSwipers() {

			// 	let result = await myRequestPost("/sojo.order.evaluation.get.detail", {
			// 		"id": this.th,
			// 		"userGuid": "rc61007bb64721f4f46f68",
			// 		"client": "applets",
			// 		"mobileBrand": "microsoft",
			// 		"mobileModel": "microsoft",
			// 		"osVersion": "win10",
			// 		"timestamp": 1607935973000,
			// 		"sign": "C6203604290E8A2FB9C943DE3DA85F24"
			// 	});

			// 	console.log(result, "xxxx")

			// 	var str = result.respData.evaluationImage;
			// 	var arr = str.split(",");
			// 	console.log(arr, "wwewqeqw")
			// 	this.swipers = arr;
			// 	// for(var i=0;i<this.swipers.length;i++){
			// 	//  var arr = this.swipers[i].evaluationImage.split(",");
			// 	//  this.image = arr;
			// 	//  }
			// 	// console.log(this.image,'weewqrfeweffe2fefewfe3wfe24')
			// },
			async getRecommend() {
				let Recommend = await myRequestPost("/sojo.order.evaluation.get.detailListByStoreNo", {
					
						"pageSize": 6,
						"pageNum": 1,
						"orderByType": 10,
						"userGuid": "rcf151a6f852339008659f",
						"evaluationId": this.ddd[this.k],
						"storeNo": "401000002938",
						"client": "applets",
						"mobileBrand": "microsoft",
						"mobileModel": "microsoft",
						"osVersion": "win10",
						"timestamp": 1608205781000,
						"sign": "B220895ED92A99BB33A3F6E22738AB4C"
					
				})
				var arr = [ null,null,13086];
				this.ddd = arr;
				console.log(this.ddd,"kskkkssk")
				console.log(Recommend, "uuuuuuuuuuuuuuuuuuu")
			}
		}
	}
</script>

<style>

</style>
