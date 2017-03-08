<template>
    <div>
        <p>影人</p>
        <div class='ul_parent' ref='container'>
            <ul>
                <li v-for='(item,index) in Info'>
                    <a >
                        <img class="preview-img" :src="item.src" @click="$preview.open(index,Info)" />
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

    import common from '../../kits/common.js';
    import swipe from '../../../statics/js/swipe.js';

    export default{
        data:function(){
            return {
                Info:[],
            }
        },
        props:['casts_dirctor'],
        methods:{
            getlist:function(){
                var url=common.doubanDomain+'/v2/movie/celebrity/'+1025154;
                this.$http.jsonp(url).then(function(res){
                   this.Info=this.casts_dirctor;
                    this.Info.forEach(function(item){
                        item.src=item.avatars.medium;
                        item.w='300';
                        item.h='450';
                    })
                });
            }
        },

        created:function(){
            this.getlist();
        },
        mounted:function(){
            var obj = {
                swipeDom:this.$refs.container,
                swipeType:"x",
                swipeDistance:10
            }
            new swipe.iScroll(obj);
        }
    }

</script>




<style scoped>
    .ul_parent{
        overflow: hidden;
    }
    ul{
        padding: 0;
        margin: 0;
        padding-left: 10px;
        width: 136%;
        height: 170px;

    }
    li{
        list-style: none;
        float: left;
        width: 120px;
        padding: 10px 10px;
        height: 170px;
    }
    li img{
        width: 100px;
        height: 150px;
    }
    div>p{
        padding: 0;
        margin: 0;
        padding-left:10px;
    }
    /*.preview-img{*/
        /*height: 100px;*/
        /*width: 100px;*/
    /*}*/
</style>