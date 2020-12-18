<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	 
</style>
<style lang='scss'>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2263203_83m5op78r0b.eot?t=1608260623904'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2263203_83m5op78r0b.eot?t=1608260623904#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_2263203_83m5op78r0b.woff?t=1608260623904') format('woff'),
  url('//at.alicdn.com/t/font_2263203_83m5op78r0b.ttf?t=1608260623904') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2263203_83m5op78r0b.svg?t=1608260623904#iconfont') format('svg'); /* iOS 4.1- */
}



	.iconfont {
		font-family: "iconfont" !important;
		font-size: 24px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #fff;
	}

	.icon-sousuo:before {
	  content: "\e657";
	}
	
	.icon-jiantou9:before {
	  content: "\e60b";
	}
	
	.icon-shou_cang:before {
	  content: "\e614";
	}
	
	.icon-btn_scan:before {
	  content: "\e60d";
	}
	
	.icon-huida:before {
	  content: "\e7a0";
	}
	
	.icon-wenti:before {
	  content: "\e649";
	}
	
	.icon-zuojiantou:before {
	  content: "\e61c";
	}
	
	.icon-weibiaoti1:before {
	  content: "\e637";
	}
	
	.icon-xianxingtubiao_huabanfuben:before {
	  content: "\e62a";
	}
	
	.icon-jifen:before {
	  content: "\e636";
	}
	
	.icon-biji:before {
	  content: "\e6c2";
	}
	
	.icon-shoucang:before {
	  content: "\e612";
	}
	
	.icon-youhuiquan:before {
	  content: "\e623";
	}



</style>
