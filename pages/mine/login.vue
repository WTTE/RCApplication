<template>
	<view>
		<button 
		type="primary" 
		open-type="getUserInfo" 
		@getuserinfo="getUserInfo" 
		>登录</button>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		methods: {
			getUserInfo(e){
				console.log(e)
				const userinfo = e.detail.rawData;
				// console.log(userinfo)
				uni.setStorageSync("userinfo",userinfo);
				uni.navigateBack({
					delta:1
				});
			}
		}
	}
</script>

<style>

</style>
