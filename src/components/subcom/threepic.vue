<template>
    <div>
       <ul>
           <li v-for='item in Info'>
               <img :src="item.images.medium" alt=""/>
           </li>
       </ul>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    export default{
        data:function(){
            return {
                Info:[]
            }
        },
        props:['picurl'],
        methods:{
            getlist:function(){
                this.$http.jsonp(this.picurl).then(function(res){
                    this.Info = res.body.subjects.slice(0,3);
                });
            }
        },
        created:function(){
            this.getlist();
        },
        mounted:function(){

        }
    }
</script>

<style scoped>
    ul{
        padding: 0;
        position: relative;
    }
    ul li{
        width: 40px;
        height: 60px;
        float: left;
        list-style: none;

    }
    ul li:nth-child(1){
        width: 56px;
        height: 84px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index:2;

    }
    ul li:nth-child(2){
        position: absolute;
        left: 2%;
        top:15px;

    }
    ul li:nth-child(3){
        position: absolute;
        left: 69%;
        top:15px;

    }
    ul li img{
        width: 100%;
        height: 100%;
    }
</style>