<template>
	<view>
		<view class="body">
			<!-- <swiper indicator-dots :autoplay="true" :interval="3000" circular>
				<swiper-item v-for="item in swipers">
					<image :src="item.pics" mode="widthFix"></image>
				</swiper-item>
			</swiper>
			<view class="child"></view> -->
		</view>
	</view>
</template>

<script>
	
	export default {
		props: ['res'],
		data() {
			return {
				
			}
		},
		onLoad() {
			this.start()
			
		},
		methods: {
			start(){
				console.log(res,"0000000000");
			}
		},
		components: {
			
		}
	}
</script>

<style lang="less">
	.body{
		width: 750rpx;
		height: 500rpx;
		padding: 50rpx;
		background-color: black;
		margin-bottom: 20rpx;
		display: flex;
		swiper {
			height: 380rpx;
		
			image {
				width: 650rpx;
				
			}
		.child{
			flex: 1;
			margin-top: 300rpx;
			width: 750rpx;
			height: 100rpx;
			background-color: #FFFFFF;
		}
		}
	}
</style>
