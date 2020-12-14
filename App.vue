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
  src: url('//at.alicdn.com/t/font_2263203_2g20oagc2zt.eot?t=1607870753669'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2263203_2g20oagc2zt.eot?t=1607870753669#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_2263203_2g20oagc2zt.woff?t=1607870753669') format('woff'),
  url('//at.alicdn.com/t/font_2263203_2g20oagc2zt.ttf?t=1607870753669') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2263203_2g20oagc2zt.svg?t=1607870753669#iconfont') format('svg'); /* iOS 4.1- */
}


	.iconfont {
		font-family: "iconfont" !important;
		font-size: 24px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #fff;
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
