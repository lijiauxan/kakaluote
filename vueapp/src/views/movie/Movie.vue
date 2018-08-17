<template>
    <ul>
        <li class="movie" v-for="movie in movieList">
            <div class="movie-img">
                <img :src="movie.images.small" alt="">
            </div>
            <div class="movie-dec">
                <h3>{{movie.title}}</h3>
                <p>观众评 <span class="aver">{{movie.rating.average}}</span></p>
                主演：<span v-for="actor in movie.casts">{{actor.name }} </span>
            </div>
        </li>
    </ul>
</template>
<script>
    import Axios from 'axios';
export default {
    data(){
      return {
          movieList:[]
      }
    },
    created (){
        Axios.get('/movie.json')
            .then(res=>{
                this.movieList = res.data.subjects;
                console.log(this.movieList);
            });
    }
}
</script>
<style lang="scss">
.movie{
    display: flex;
    padding: 10px;
    .movie-img{
        flex-grow: 1;
        width: 0;
    }
    .movie-dec{
        flex-grow: 3;
        width: 0;
        .aver{
            color:orange;
        }
    }
}
</style>