<template>
    <div>
        <h4>{{count}}</h4>
        <h4>{{msg}}</h4>
        <h4>{{xx}}</h4>
        <h4>{{count100}}</h4>
        <!--<button @click="add(2)">+</button>-->
        <button @click="addNum(2)">+</button>
        <button @click="sub">-</button>
        <br>
        <input type="text" v-model="str">
    </div>
</template>
<script>
    import {mapState, mapMutations,mapGetters,mapActions  } from "vuex";
export default {

    data(){
        return {
            str:'sssssssssssssssss'
        }
    },
    // methods:{
    //     sub(){
    //         return this.$store.commit ('sub');
    //     },
    //     add(){
    //         return this.$store.commit ('add',2);
    //     }
    // },
    methods:{
        ...mapMutations (['sub','add']),
        ...mapActions (['addNum'])
    },
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // }             //  第一种


    // computed:mapState({
    //     count:state=>state.count,
    //     msg:state=>state.msg
    // })             第二种


    // computed:mapState(['count','msg'])    第三种


    computed:{
        xx(){
            return this.str.length;
        },
        ...mapState(['count', 'msg']),
        ...mapGetters(['count100'])
    }




















}
</script>
<style>

</style>