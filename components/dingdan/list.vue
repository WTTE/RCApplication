<template>
	<view>
	<view class="view1">
		<image class="img" src="../../static/icons/u=3582511192,1930776935&fm=26&gp=0.jpg"></image>
	</view>
	<view class="bottom">
		<button class="left" @click="goDengLu()">立即登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			goDengLu() {
				uni.navigateTo({
					url: "/pages/shouquan/shouquan"
				})
			},
		},
	}
</script>

<style>
   .view1{
	   margin-top: 20px;
	   margin-left: 74rpx; 
	  
   }
   .img{
	   height: 250px;
	   bottom: 0;
   }
   .bottom{
   	display: flex;
   	/*position: fixed;*/
   	bottom: 0;
   	width: 100%;
   	background-color: #FFFFFF;
   	box-shadow: 0 2px;
   padding: 95rpx 0;  
	margin-top: 0;
	}
   	button{
   		width: 325rpx;
   		height: 90rpx;
   		background-color: #fc6315;
   		font-size: 36rpx;
   		font-weight: 700;
   		color: #FFFFFF;
   		margin-left: auto;
   		margin-right: auto;
		
   	}
   	
</style>
