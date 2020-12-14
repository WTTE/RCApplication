<template>
	<view class="searchall">
		<view class="search">推荐</view>
		<view class="search">无锡</view>
		<view class="search">苏州</view>
		<view class="search">南京</view>
		<view class="search">上海</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
.searchall{
	margin-top: 40rpx;
	width: 95%;
	margin-left: 25rpx;
	display: flex;
}
.search{
	background-color: #eee;
	width: 200rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	border: 7rpx solid #fff;
	opacity: 0.7;
	
}

</style>
