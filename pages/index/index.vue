<template>
	<view @click="dianji">
		这是首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			dianji(){
				uni.navigateTo({
					url:"../hotelDetails/hotelDetails"
				})
			}
		}
	}
</script>

<style>

</style>
