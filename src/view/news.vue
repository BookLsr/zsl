<template>
    <div class="app-container-index">
        <marquee :srcList="srcList"></marquee>
    </div>
</template>

<script>

/**
 *  import { mapActions } from 'vuex'
 */
export default {
    name: 'ViewNews',
    data () {
        return {
            srcList: [
                'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg',
                'http://i3.mifile.cn/a4/xmad_14915894814419_zNYsr.jpg',
                'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg',
                'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg',
                'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg'
            ],
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
