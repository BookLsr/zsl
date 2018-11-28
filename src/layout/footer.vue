<template>
<div class="app-footer">
    <table class="table1" cellspacing=0 cellpadding=0;>
        <tbody>
            <tr>
                <td width="41">
                    <img src="../assets/2_16.jpg" width="41" height="65"/>
                </td>
                <td>
                    <table width="917px" border="0" cellspacing="0" cellpadding="0" class="foot_neiye" height="60">
                        <tbody>
                            <tr>
                                <td align="center" style="color:#fff;" height="60"> 
                                    Copyright(C)2018 souche（杭州）汽车服务有限公司
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="42">
                    <img src="../assets/2_18.jpg" width="42" height="65"/>
                </td>
            </tr>
        </tbody>
    </table>
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
    mounted () {},

    /**
     * 方法集合体
     */
    methods: {
    /**
     * 初始化函数
     */
        init () {}
    }
}
</script>

<style lang="less">
.app-footer {
    width: 1000px;
    margin: 0 auto;
    height: 50px;
    background-color: #010006;

    .table1 {
        width: 1000px;
        margin: 0 auto;
        border: 0;
    }
    .foot_neiye {
        background: url(../assets/footbg_1.jpg)
    }

}
</style>
