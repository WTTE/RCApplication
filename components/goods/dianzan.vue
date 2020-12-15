<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in msg" :key="item.id">
			<image :src="item.defaultImage"></image>
			<view class="price">
				<text>{{item.evaluation}}</text>
	
			</view>
			<view class="name">{{item.nickname}}</view>
		</view>
		<view>1222</view>
	</view>
</template>
	

<script>
	export default {
		props: ['msg'],
		data() {
			return {
				
			};
		},
		
	}
</script>
<style lang="scss">
	.goods_list {
		display: flex;
		padding: 0 15rpx;
		justify-content: space-between;
		overflow: hidden;
		flex-wrap: wrap;
	
		.goods_item {
			width: 355rpx;
			margin-bottom: 15rpx;
			background: #fff;
			padding: 10px;
			box-sizing: border-box;
	
			image {
				height: 150px;
				width: 100%;
				mix-width: 160px;
				margin: 10px auto;
			}
	
			.price {
	
				width: 320rpx;
				height: 50rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 12px;
				color: rgb(74, 74, 74);
				padding: 8px 0;
	
				text:nth-child(2) {
					color: #ccc;
					text-decoration: line-through;
					margin-left: 10px;
					font-size: 13px;
				}
			}
	
			.name {
				font-size: 14px;
	
			}
		}
	}
</style>


