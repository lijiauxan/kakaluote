<template>
    <ul class="footer" :style="{backgroundColor:bgColor}">
        <li v-for="val in menuList" @click="change(val)">
            <router-link :to="val.path">{{val.name}}</router-link>
        </li>
    </ul>
</template>
<script>
    import {mapState} from 'vuex';
export default {
    props:["menuList"],
    computed :mapState (['bgColor']),
    methods:{
        change(val){
            this.$store.dispatch('change',val);
        }
    }
}
</script>
<style lang="scss">
    .footer{
        height: 1rem;
        width: 100%;

        color: #fff;
        position:fixed;
        bottom:0;
        line-height: 1rem;
        display: flex;
        li{
            flex-grow:1;
            text-align: center ;
            a{
                color: #FFF38F;
                outline: none;
                &.router-link-active{
                    color:#a71d5d;
                }
            }
        }


    }
</style>