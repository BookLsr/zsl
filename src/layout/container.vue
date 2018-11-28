<template>
    <div class="app-container">
        <router-view></router-view>
    </div>
</template>

<script>
/**
 *  import { mapActions } from 'vuex'
 */

export default {
    name: 'Container',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
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
            
        }
    }

}
</script>

<style lang="less">
.app-container {
    width: 1000px;
    margin: 0 auto;
    height: 550px;
}
</style>
