<template>
    <div>
        <div class="app-header">
            <span class="app-logo">GOS 工硕螺丝</span>
            <div class="app-nav">
                <ul>
                    <li v-for="(relation, index) in relations" :key="relation.id" @click='tabToggle(index)'>
                        <span class="menu" :class="{active: index == nowIndex}">{{relation.text}}</span>
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
                {text: '首页', id: 'index'},
                {text: '产品展示', id: 'product'},
                {text: '动态新闻', id: 'news'},
                {text: '关于我们', id: 'about'},
                {text: '联系我们', id: 'call'}
            ],
            msg: 'Welcome to Your Vue.js App',
            nowIndex: -1
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
            alert('tb Init')
        },

        tabToggle: function (index) {
            alert('bbbb')
            this.nowIndex = index
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
        margin-right: 10px;
        width: 800px;
        background-color: #fff;
        float: right;
        ul {
            float: right;
            list-style: none;
        }
        li {
            display: list-item;
            position: relative;
            width: 86px;
            margin: 0 5px 0 6px;
            float: left;
            text-align: center;
            .active {
                color: red;
            }
            a {
                text-decoration: none;
                color: #686868;
            }
            .menu {
                font-family: "微软雅黑";
                padding-top: 10px;
                width: 86px;
                height: 42px;
                font-size: 12px;
                display: block;
                font-size: 1.33em;
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
