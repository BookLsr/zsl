<template>
    <div>
        <div class="top">
            <div class="top_top">
                <span class="l">专注车辆两百年</span>
                <div class="top_right">
                    <img src="../assets/top_tel_icon.jpg"/>咨询电话：0577-8296 8888&nbsp;&nbsp;&nbsp;&nbsp;24小时服务热线：40004-888888
                </div>
            </div>
        </div>
        <div class="app-header">
            <span class="app-logo">Souche 搜车Vue</span>
            <div class="app-nav">
                <ul>
                    <li v-for="(relation, index) in relations" :key="relation.id" @click='tabToggle(index, relation.href)'>
                        <span :class="{active: index == nowIndex}" class="menu">{{relation.text}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="shadow"></div>
    </div>
</template>

<script>
/**
 *  import { mapActions } from 'vuex'
 */

export default {
    name: 'Header',
    data () {
        return {
            relations: [
                {text: '首页', id: 'index', href: 'index'},
                {text: '产品展示', id: 'product', href: 'product'},
                {text: '动态新闻', id: 'news', href: 'news'},
                {text: '关于我们', id: 'about', href: 'about'},
                {text: '联系我们', id: 'call', href: 'call'}
            ],
            nowIndex: 0
        }
    },

    /**
     * 初始化
     */
    created () {
        this.init()
    },

    /**
     * 挂载函数
     */
    mounted () {

    },

    /**
     * 方法集合体
     */
    methods: {
        /**
         * 初始化函数
         */
        init () {
            if (this.$route.path.indexOf('index') > 0) {
                this.nowIndex = 0
            }
            if (this.$route.path.indexOf('product') > 0) {
                this.nowIndex = 1
            }
            if (this.$route.path.indexOf('news') > 0) {
                this.nowIndex = 2
            }
            if (this.$route.path.indexOf('about') > 0) {
                this.nowIndex = 3
            }
            if (this.$route.path.indexOf('call') > 0) {
                this.nowIndex = 4
            }
        },

        /**
         * 导航菜单跳转
         */
        tabToggle: function (index, href) {
            this.nowIndex = index
            this.$router.push('/manage/' + href)
            if (index === 0) {
                return
            } else {
                this.dropdownActive = false
            }
        }
    }

}
</script>

<style lang="less">
.top {
    width: 1000px;
    display: flex;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    background: #1f2229;
    color: #F3782A;
    overflow: hidden;
    .top_top {
        font-size: 12px; 
        width: 1000px;
        .l {
            margin-left: 10px;
            float: left;
        }
        .top_right {
            height: 30px;
            text-align: left;
            float: right;
            margin-right: 10px;
            img {
                width: 18px;
                height: 21px;
            }  
        }
     
    }
    
}
.app-header {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    height: 80px;
    background-color:#fff;
    .app-logo {
        display: flex;
        margin: auto 10px;
        width: 200px;
        color: black;
        font-size: 25px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .app-nav {
        margin-right: 20px;
        width: 800px;
        background-color: #fff;
        float: right;
        ul {
            float: right;
            list-style: none;
            li {
                display: list-item;
                position: relative;
                width: 86px;
                margin: 0 20px 0 0;
                float: left;
                text-align: center;
                .active {
                    color: #f3782a !important;
                    border-bottom: 3px solid #f3782a;
                }
                .menu {
                    font-family: "微软雅黑";
                    padding-top: 30px;
                    width: 90px;
                    height: 50px;
                    display: block;
                    font-size: 16px;
                    color: #686868;
                }
                .menu:after {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 50%;
                    right: 50%;
                    bottom: -3px;
                    height: 3px;
                    opacity: 0;
                    background-color: #dc6103;
                }
            }
        }
    }
}
.shadow {
    width: 1000px;
    height: 7px;
    font-size: 0;
    overflow: hidden;
    background: url(../assets/nav_shadow.png) repeat-x;
    margin: 0 auto;
}
</style>
