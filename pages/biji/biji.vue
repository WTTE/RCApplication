<template>
	<view>
		<view class="tianjia">
			<view class="ju">+</view>
		</view>
		<input type="file" />
		<view class="fabu">

			<input type="text" placeholder="想好一个标题会有更多的赞哦" />
			<textarea placeholder="多说一说~" />
			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.tianjia{
		
		background-color: rgb(245,245,245);
		
		width: 100px;
		height: 100px;
		position: relative;
		.ju{
			margin-bottom: 30px;
			width: 50px;
			height: 50px;
			font-size: 35px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -25px;
			margin-left: -25px;
		}
		
	}
	
	.fabu{
		width: 750rpx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		flex-direction: column;	
	
		input{
			width: 600rpx;
			height: 80rpx;
			
			background-color: rgb(245,245,245);
			margin-top: 30rpx;
		}
		textarea{
			width: 600rpx;
			height: 400rpx;
			background-color: rgb(245,245,245);
			margin-top: 60rpx;
			
		}
	}
	

</style>
