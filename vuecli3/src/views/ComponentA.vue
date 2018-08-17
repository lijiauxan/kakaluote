<template>
    <div>
      <h4>ComponentA</h4>
        <ComponentB :msg="msg"></ComponentB>
        <ComponentC @xx="fn">{{msg}}</ComponentC>

    </div>
</template>
<script>
    import ComponentB from '@/views/ComponentB';
    import ComponentC from '@/views/ComponentC';
    export default {
        components: {
            ComponentB,
            ComponentC,
        },
        data(){
            return{
                msg:0
            }
        },
        methods:{
            fn(){
                this.msg++;
            }
        }
    }
</script>