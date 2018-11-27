import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '../layout/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'CommonLayout',
        component: CommonLayout
    }]
})
