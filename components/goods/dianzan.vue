<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in msg" :key="item.id" @click="itemchange(item)">
			<image :src="item.defaultImage"></image>
			<view :class="{xuanfu:isend==true}" ><text class="fu">{{item.storeName}}</text></view>
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
		props: ['msg'],
		data() {
			return {
				isend :true,
				istrue: false
			};
		},

		methods: {
			// shan(item){
			// 	if(item){
			// 		this.isend=true;
			// 	}
			// 	else{
			// 		this.isend=false;
			// 	}
			// },
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
			position: relative;
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
			.xuanfu{
				position: absolute;
				left: 15px;
				top: 140px;
				width: 135px;
				height: 20px;
				font-size: 8px;
				background-color: rgba(118,115,114,0.7);
				border-radius: 10px;
				text{
					line-height: 20px;
					//text-align: center;
					margin-left: 10px;
					color: white;
				}
			}

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
					border: 1px solid gray;
				}
			}

		}
	}
</style>
