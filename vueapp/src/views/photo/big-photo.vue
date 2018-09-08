<template>
    <!--<div>-->
        <!--<img :src="'/img/'+ index +'.jpg'" alt="">-->
    <!--</div>-->
    <router-link to="/photo">
        <v-touch class="imgs" :style="{'background-image':'url(/img/'+ index +'.jpg)'}"  @swipeleft="left" @swiperight="right">
            <!--<img :src="'/img/'+ index +'.jpg'" alt="">-->
        </v-touch>
    </router-link>

</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){

        },
        computed :mapState (['index']),
        methods:{
            left(){

                this.$store.dispatch('add');
            },
            right(){
                this.$store.dispatch('sub');
            }

        },
    }
</script>
<style scoped >
.imgs{
    background-size: contain ;
    background-position: center ;
    background-color: #000000;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>