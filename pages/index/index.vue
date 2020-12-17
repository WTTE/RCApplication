<template>
	<view class="home">
		<Preferent></Preferent>
		<Search :cityCode="cityCode" @func="receive"></Search>
		<view  v-for="item in res.length" :key="item">
			<Suzhou :res="res[item]" :pageNum="pageNum" :cityCode="cityCode"></Suzhou>
		</view>
		<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
		<uni-load-more v-else :status="'noMore'"></uni-load-more>
	</view>
</template>

<script>
	import Search from '../../components/search.vue'
	import Preferent from '../../components/preferent.vue'
	import Suzhou from '../../components/suzhou.vue'
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue"
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
				
				res: [],
				flag: false,
				pageNum: 1,
				pageSize: 6,
				cityCode: "",

			}
		},
		onLoad() {
			this.getword();
		},
		methods: {
			receive(code) {
				console.log(code, "999999999")
				this.cityCode = code;

				this.pageNum = 1;
				this.res = [];
				this.getword()
			},
			chenked(type) {
				this.isActive = type;
				this.pageNum = 1;
				this.cityCode = 320200
			},

			async getword() {
				let result = await myRequestPost("/sojo.equity.home.listIndexCityMenuRecommend", {
					"pageNum": this.pageNum,
					"pageSize": 3,
					"cityCode": this.cityCode,
					"platFrom": 10,
					"memberCityCode": "320200",
					"storeNoListStr": "",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608105167000,
					"sign": "2BD4F2E388596CE4EB209B0C440BD3EF"
				});
				this.res = [...this.res, ...result.respData.list]
				/* list.filter(result.respData.list.item.storeImage =>{
					return result.respData.list.item.storeImage != null;
				}) */
				if(result.respData.list.item.storeImage != null){
					return res;
				}
				
				console.log(this.res, "11111111")
				// console.log(this.res[0].storeImage)
				/* console.log(this.res[0], "0000000000") */

			},
			

			onReachBottom() {
				this.pageNum++;
				if (this.pageNum <= 10) {
					this.getword();


				} else {
					//没有更多数据了
					this.flag = true;
				}
				/* switch (){
					
				} */
			},
		}
	}
</script>

<style>

</style>
