import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '../layout'
import ViewIndex from '../view/index'
import ViewProduct from '../view/product'
import ViewNews from '../view/news'
import ViewAbout from '../view/about'
import ViewCall from '../view/call'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/manage',
            name: 'CommonLayout',
            component: CommonLayout,
            children: [
                {
                    path: 'index',
                    name: 'ViewIndex',
                    component: ViewIndex
                },
                {
                    path: 'product',
                    name: 'ViewProduct',
                    component: ViewProduct
                },
                {
                    path: 'news',
                    name: 'ViewNews',
                    component: ViewNews
                },
                {
                    path: 'about',
                    name: 'ViewAbout',
                    component: ViewAbout
                },
                {
                    path: 'call',
                    name: 'ViewCall',
                    component: ViewCall
                }
            ]
        }
    ],
    mode: 'history'
})
