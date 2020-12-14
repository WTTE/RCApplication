<template>
	<view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="input" message="成功" :duration="2000" :before-close="true" @close="goIndex" @confirm="goIndex"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniPopupMessage from '@/components/uni-ui/uni-popup-message/uni-popup-message.vue';
	import uniPopupDialog from '@/components/uni-ui/uni-popup-dialog/uni-popup-dialog.vue'
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			this.$refs.popup.open()
		},
		methods: {
			goIndex(done) {
				done(),
				uni.navigateTo({
					url: "/pages/index/index"
				})
			}
		},
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		}
	}
</script>

<style>

</style>