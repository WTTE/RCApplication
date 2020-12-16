<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 700px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 31.107114,
				longitude: 120.302037,
				covers: [{
					latitude: 31.107114,
					longitude: 120.302037,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 31.107114,
					longitude: 120.302037,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
