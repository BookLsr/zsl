<template>
    <div>
         <slide :slides="slides" :inv="inv" :style="styleObject"></slide>
    </div>
</template>

<script>
/**
 *  import { mapActions } from 'vuex'
 */

// import Slide from '@/components/slide/slide.vue'
export default {
    name: 'ViewProduct',
    data () {
        return {
            slides: [
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg'
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14915894814419_zNYsr.jpg'
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg'
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg'
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg'
                }
            ],
            inv: 2000,
            styleObject: {
                width: '1000px',
                height: '450px',
                margin: ['0', 'auto']
            },
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
    height: 450px;
}
</style>
