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
		<view class="page-body">
		       <view class="page-section page-section-gap">
		           <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers" >
		           </map>
		       </view>
		   </view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				           title: '即刻',
				           latitude: 39.909,
				           longitude: 116.39742,
				           covers: [{
				               latitude: 39.909,
				               longitude: 116.39742,
				               iconPath: '../../../static/location.png'
				           }, {
				               latitude: 39.90,
				               longitude: 116.39,
				               iconPath: '../../../static/location.png'
				           }]
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
		height: 500rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: center;
		flex-direction: column;	
	
		input{
			width: 650rpx;
			height: 80rpx;
			
			background-color: rgb(245,245,245);
			// margin-top: 30rpx;
		}
		textarea{
			width: 650rpx;
			height: 400rpx;
			background-color: rgb(245,245,245);
			// margin-top: 60rpx;
			
		}
	}
	

</style>
