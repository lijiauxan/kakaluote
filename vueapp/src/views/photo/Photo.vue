<template>
    <div class="photo">
        <!--<div v-for="(photo,index) in imgs" class="img" @click="bphoto(index)">-->
            <!--<img  :src="photo.src" alt="" >-->
        <!--</div>-->
        <router-link to="/bigphoto" v-for="(photo,index) in imgs" class="img" @click.native="bphoto(index)">
            <img  :src="photo.src" alt="" >
        </router-link>
    </div>
</template>
<script>
    import Axios from 'axios';
export default {

    data(){
        return{
            imgs:[]
        }
    },
    created (){
        Axios.get('data/photodata.json').then(res=>{
            // console.log(res.data)
            this.imgs = res.data.photoData;
            console.log(res.data.photoData);
        })
    },
    methods:{
        bphoto(index){
            this.$store.dispatch('changeI',index);
        }
    }
}
</script>
<style lang="scss" scoped>
    .img{
        width:50%;
        height: 100px;
        float: left;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
</style>