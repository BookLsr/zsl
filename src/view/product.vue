<template>
    <div class="app-container-product">
        <div class="hot-product">
            <div class="hot-product-top">
                <div class="clearfix">特色</div>
                <!-- <slide :slides="slides" :inv="inv" :style="styleObject"></slide> -->
                <vue-seamless-scroll :data="slides" :class-option="optionLeft" class="seamless-warp2">
                    <ul class="item">
                        <li v-for="(slide, index) in slides" :key="index">
                            <img height="100px" width="100px" :src="slide.src">
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="product">
    
             <div style="width:900px">分类</div>
                
        </div>
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
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg'
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg'
                },
                {
                    src: 'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg'
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
                height: '500px',
                margin: ['0', 'auto']
            },
            msg: 'Welcome to Your Vue.js App'      
        }
    },
    computed: {
        optionLeft () {
            return {
                direction: 2,
                limitMoveNum: 10
            }
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
.app-container-product {
    width: 1000px;
    height: 500px;
    margin:0 auto;

    .hot-product {
        display: flex;
        padding: 0;
        margin: 0 auto;
        width: 970px;
        height: 140px;
        box-shadow: 0 0 2px #ccc;
        background-color: #fff;
        .hot-product-top {
            margin: 0 auto;
            height: 100px;
            padding: 0 10px;
        }

        .seamless-warp2 {
            overflow: hidden;
            height: 100px;
            width: 950px;
            ul.item {
                height: 100px;
                width: 990px;
                li {
                    float: left;
                    margin-right: 10px;
                }
            }
        }
        .clearfix {
            zoom: 1;
            margin-bottom: 10px;
            color: #666;
            font-size: 16px
        }
    }

    .product {
        display: flex;
        padding: 0;
        width: 970px;
        margin: 5px auto;
        height: 140px;
        box-shadow: 0 0 2px #ccc;
        background-color: black;

    }
    
}

</style>
