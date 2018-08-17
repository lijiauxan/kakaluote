<template>
    <div>
        <ul>
            <li v-for="val in movieList" @click="ff(val.id)">
                <!--<router-link :to="'/movieId/'+val.id">-->
                    {{val.name}} | {{val.age}}
                <!--</router-link>-->
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                movieList:[
                    {
                        id:1,
                        name:'黄渤',
                        age:40
                    },
                    {
                        id:2,
                        name:'孙红雷',
                        age:30
                    },
                    {
                        id:3,
                        name:'张艺兴',
                        age:20
                    },
                ]
            }
        },
        methods :{
            ff(id){
                console.log(111);
                this.$router.push('/movieId/'+ id)
            }
        }
    }
</script>
<style>
    li{
        list-style: none ;

    }
</style>