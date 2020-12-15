<template>

	<view class="hot_goods">
		<view class="buju">
			<view class="zuixin" @click="chenked(1)">
				<text class="wen">最新发布</text>
			</view>
			<view class="zuixin active">
				|
			</view>
			<view class="zuixin" @click="chenked(2)">
				<text class="ben">最多点赞</text>
			</view>
		</view>
		<view v-if="isActive == 1">
			<Goods :res="res" :pageNum="pageNum"></Goods>
		</view>
		<view v-if="isActive == 2">
			<Dianzan :msg="msg"></Dianzan>
		</view>

		<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
		<uni-load-more v-else :status="'noMore'"></uni-load-more>
	</view>



</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	import Goods from '@/components/goods/goods.vue'
	import Dianzan from '@/components/goods/dianzan.vue'
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue"


	export default {
		data() {
			return {
				isActive: 1,
				res: [],
				msg: [],
				flag: false,
				pageNum: 1,
			}
		},
		onLoad() {
			this.getList();
			this.getLoods();
		},
		methods: {
			chenked(type) {
				this.isActive = type;
				this.pageNum=1;
				
			
			
			},
			async getList() {

				let result = await myRequestPost("/sojo.order.evaluation.list.page", {

					"pageSize": 6,
					"pageNum": this.pageNum,
					"orderByType": 10,
					"userGuid": "rc61007bb64721f4f46f68",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "win10",
					"timestamp": 1607427013000,

				});

				this.res = [...this.res, ...result.respData.list]

				console.log(this.res);



			},
			async getLoods() {

				let res = await myRequestPost("/sojo.order.evaluation.list.page", {


					
						"pageSize": 6,
						"pageNum": this.pageNum,
						"orderByType": 20,
						"userGuid": "rc355e390778041925cb4d",
						"client": "applets",
						"mobileBrand": "microsoft",
						"mobileModel": "microsoft",
						"osVersion": "Windows 10 x64",
						"timestamp": 1607426292000,
						"sign": "45A1C99613B96EE1F0A16A1A46EA4DEC"
					


				});

				this.msg = [...this.msg, ...res.respData.list]
				console.log(this.msg);
			},
			

		},
		onReachBottom() {
			this.pageNum++;
			if (this.pageNum <= 5) {
				this.getLoods();
				this.getList();

			} else {
				//没有更多数据了
				this.flag = true;
			}
		},
		components: {
			uniLoadMore,
			Goods,
			Dianzan
		},
	}
</script>
<style lang="scss">
	.hot_goods {
		background: #eee;

		.buju {
			
			display: flex;
			width: 750rpx;
			height: 100rpx;
			background-color: white;
			margin-bottom: 10px;
			position: fixed;
			z-index: 2;

			.zuixin {
				
				flex: 1;
				font-size: 16px;
				color: rgb(74, 74, 74);

				text-align: center;
				line-height: 100rpx;
				

				.wen {
					position: absolute;
					left: 50px;
				}

				.ben {
					position: absolute;
					right: 50px;
				}

			}

			.active {
				font-size: 10px;
			}
		}


	}
</style>
