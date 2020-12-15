<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in res" :key="item.id" @click="itemchange(item)">
			<image :src="item.defaultImage"></image>
			<!-- <view class="xuanfu"><text>{{item.storeName}}</text></view> -->
			<view class="price">
				<text class="tex">{{item.evaluation}}</text>
			</view>
			<view class="bao">
				<view class="tupian">
					<image :src="item.avatarLink" mode=""></image>
				</view>
				<view class="info">
					<text>{{item.nickname}}</text>
				</view>
				<view class="item" :class="{active:istrue==true}" @click="ai(istrue)">❤</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: ['res', "pageNum"],
		data() {
			return {
				istrue: false,
			};
		},

		methods: {
			itemchange(item) {
				uni.navigateTo({
					url: '/pages/finddetail/finddetail?id='+ item.id
				})
			},
			ai(istrue) {
				if (istrue) {
					this.istrue = false;
				} else {
					this.istrue = true;
				}
			}
		}

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
			// .xuanfu{
			// 	position: relative;
			// 	width: 200px;
			// 	height: 30px;
			// 	text{
					
			// 	}
			// }

			.price {

				width: 160px;
				height: 25px;
				font-size: 12px;
				color: rgb(74, 74, 74);
				padding: 8px 0;

				.tex {
					display: inline-block;
					width: 150px;
					height: 35px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.bao {
				display: flex;
				height: 25px;
				position: relative;

				// overflow: hidden;
				.tupian {
					image {
						width: 20px;
						height: 20px;
						position: absolute;
						top:-10px;
						line-height: 20px;
						border-radius: 50%;
						
					}
				}

				.info {
					text {
						height: 20px;
						color: rgb(193, 193, 193);
						font-size: 8px;
						position: absolute;
						left: 25px;
						top:-2px;
						line-height: 20px;
						
					}
				}

				.item {
					height: 20px;
					flex: 1;
					display: inline-block;
					text-align: right;
					
					line-height: 20px;
				}

				.active {
					color: rgb(255, 99, 21);
				}
			}

		}
	}
</style>
