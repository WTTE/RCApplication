import Vue from 'vue'
import App from './App'
import verification from './static/js/verification' //自定义表单验证
Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(verification)
const app = new Vue({
    ...App
})
app.$mount()
