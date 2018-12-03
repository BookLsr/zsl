// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Slide from '@/components/slide'
import VueSeamlessScroll from 'vue-seamless-scroll'

Vue.config.productionTip = false
Vue.use(Slide)
Vue.use(VueSeamlessScroll)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
