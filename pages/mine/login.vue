<template>
	<view>
		<button type="primary" open-type="getUserInfo" @getuserinfo="handleGetUserInfo">登录</button>

	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleGetUserInfo(e){
				uni.reLaunch({
					url:'/pages/mine/mine?userinfo='+event.detail.userinfo
				})
			}
		}
	}
</script>

<style> 

</style>
