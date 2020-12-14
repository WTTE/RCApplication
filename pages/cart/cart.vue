<template>
	<view>
		这是订单页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: ""
			}
		},
		onLoad(options) {
			this.id=options.id
			console.log(options,"1111111111111")
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
