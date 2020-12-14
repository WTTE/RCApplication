<template>
	<view class="top-nav">
		<view class="top-nav-bar" >
			<view @click="chenked(1)" >全部</view>
			<view @click="chenked(2)" >待付款</view>
			<view @click="chenked(3)" >待入住</view>
			<view @click="chenked(4)" >已入住</view>
			<view @click="chenked(5)" >已完成</view>
			<view @click="chenked(6)" >已取消</view>
		</view>
		<view>
			<image src="../../static/icons/捕获1.png"></image>
		</view>
		<view v-if="isactive==1">
			<Goods></Goods>
		</view>
		<view v-if="isactive==2">
			<List></List>
		</view>
		<view v-if="isactive==3">
			<Next></Next>
		</view>
		<view v-if="isactive==4">
			<YiRu></YiRu>
		</view>
		<view v-if="isactive==5">
			<WanChen></WanChen>
		</view>
		<view v-if="isactive==6">
			<QuXiao></QuXiao>
		</view>


	</view>
</template>

<script>
	import Goods from '@/components/dingdan/goods.vue'
	import List from '@/components/dingdan/list.vue'
	import Next from '@/components/dingdan/next.vue'
	import YiRu from  '@/components/dingdan/yiru.vue'
	import WanChen from  '@/components/dingdan/wanchen.vue'
	import QuXiao from  '@/components/dingdan/quxiao.vue'
	export default {
		data() {
			return {
				isactive: 1
			}
			
		},
		onLoad() {
             
		},
		methods: {
			chenked(type) {
				this.isactive = type;
			}
		},
		components: {
			Goods,
			List,
			Next,
			YiRu,
			WanChen,
			QuXiao
		}
	}
</script>


<style>
	.top-nav {
	  width: 750rpx;
	  position: fixed;
	  top: 10rpx;
	}
	
	.top-nav-bar {
		border: 2px solid white;
		display: flex;
		justify-content: space-around;
		font-size: 13px;
		padding: 10px 0;
		background-color: #fff;
		border-top: 1px solid #e5e5e5;
	}
	image {
		width: 750rpx;
		height: 120rpx;
	}
</style>
