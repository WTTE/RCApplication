<template>
	<view class="coupon_box">
		<view class="other_type">
			<view class="text"><span>全面型优惠券</span></view>
		</view>
		<coupon v-for="(item, index) in coupon[0].list" :key="index" v-bind:item="item" theme="#ff0000"></coupon>
		<view class="other_type">
			<view class="text"><span>简洁型优惠券</span></view>
		</view>
		<coupon v-for="(item, index) in coupon[0].list" :key="index" v-bind:item="item" types="carts" theme="#ff6c00" color="#ffffff" solid="#ff6c00"></coupon>
	</view>
</template>

<script>
	import coupon from '@/components/coolc-coupon/coolc-coupon';
	export default {
		components: {
			coupon
		},
		data(){
			return {
				coupon:[{
					list: [{
						url: "/pages/brand/index/id/1",
						money: "150",
						title: "满2000减150元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "艺栈特色度假酒店",
						end_time: "2020-12-23 00:00:20",
						state: "1"
					},
					{
						url: "/pages/brand/index/id/1",
						money: "50",
						title: "满1000减50元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "金林逸舍度假酒店",
						end_time: "2020-12-20 00:00:00",
						state: "1"
					}]
				}]
			}
		},
		onLoad() {

		},
		methods:{

		}
	}
</script>

<style lang='scss'>
page { background:#ffffff; }
.coupon_box {
	width:100%; height:auto; display:table; padding:6upx 26upx 26upx 26upx;
}

.other_type {
	width:100%; height:90upx; padding-top:50upx;
	
	.text { width:91%; border-top:1px solid #eeeeee; display:block; text-align:center; position:relative; }
	.text span { width:180upx; height:40upx; line-height:40upx; color:#999999; display:block; background:#ffffff; position:absolute; left:50%; top:50%; margin-left:-90upx; margin-top:-20upx; font-size:28upx; }
}

</style>