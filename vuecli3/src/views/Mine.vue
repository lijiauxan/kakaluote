<template>
    <div>
        <h1>落霞与孤鹜齐飞</h1>
        <h1>秋水共长天一色</h1> |
        <router-link :to="{name:'test1',params:{name:'作者',age:'李商隐'}}">唐诗</router-link> |
        <router-link to="mine/test2/作者/李煜">宋词</router-link> |
        <router-view/>
    </div>
</template>
<script>
    export default {
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            next();
        },
    }
</script>