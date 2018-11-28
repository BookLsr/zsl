<template>
    <div class="app-container-index">
        产品展示
    </div>
</template>

<script>
/**
 *  import { mapActions } from 'vuex'
 */

export default {
    name: 'ViewProduct',
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
.app-container-index {
    width: 1000px;
    margin: 0 auto;
    height: 50px;
    background-color: blue;
}
</style>
