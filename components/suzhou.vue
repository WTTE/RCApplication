<template>
	<view>
		<swiper :interval="3000" circular>
			<swiper-item v-for="item in b">
				<image:src="item"></image>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	import{
		myRequestPost
	} from"@/utils/request.js"
	export default {
		data() {
			return {
			b:[]	
			};
		},
		onLoad(){
			this.getword1();
		},
		methods:{
			async getword1(){
				let result =await myRequestPost("/sojo.equity.store.detail.v.two",{
					"storeNo": "401000001935",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607426297000,
					"sign": "48805753110D7AB46CA4EE8E34737E9F"
				})
				this.b = result.respData.storeImage.split(',')
				console.log(result)
			}
		}
	}
</script>

<style>

</style>
