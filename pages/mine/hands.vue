<template>
	<view>
		<view>输入酒店简要信息</view>
		<view class="table" v-for="item in tabs">
			<view class="title">{{item.name}}</view>
			<input class="detail" :placeholder="item.placeholder"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				 tabs:[ 
					 {
					 	id:0,
					 	name:'酒店名称',
					 	placeholder:'请输入酒店名称'
					 },
					 {
					 	id:1,
					 	name:'区域',
					 	placeholder:'请输入酒店名称'
					 },
					 {
					 	id:2,
					 	name:'房间数量',
					 	placeholder:'请输入房间数量'
					 },
					 {
					 	id:3,
					 	name:'联系人',
					 	placeholder:'请输入联系人手机号'
					 },
					 {
					 	id:4,
					 	name:'联系人',
					 	placeholder:'请输入联系人名称'
					 },
					 {
					 	id:5,
					 	name:'手机号',
					 	placeholder:'请输入联系人手机号'
					 },
					 {
					 	id:6,
					 	name:'OTA链接',
					 	placeholder:'请输入携程/去哪儿网/飞猪/等OTA酒店链接'
					 }
				 ]
			}
		},
		
	}
</script>

<style>

</style>
 