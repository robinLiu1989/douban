<!-- 滚动组件 -->
<template>
    <div class='gundong'>
        <div class="title">
            <span v-text='passobj.title' ></span><router-link to='/yuanxian_movie' class='more' >更多></router-link>
        </div>
        <div class='ul_parent' ref='container'>
            <ul class="img">
                <li v-for='item in Info'>
                    <router-link v-bind="{to:'/detile/'+urlSubstr+'/'+item.id}">
                        <img :src="item.images.medium" alt=""/>
                        <p class='p_title' v-text='item.title'></p>
                        <ul class='star'>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                        </ul>
                        <p v-text='item.rating.average' class='p_score'></p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import swipe from '../../../statics/js/swipe.js';
    import getStar from '../../kits/getStar.js';
    import {vm,More1} from '../../kits/sendparams.js';


    export default{
        data:function(){
            return {
                Info:[],
                urlSubstr:'',
            }
        },
        props:['passobj'],
        methods:{
            getlist:function(){
                this.$http.jsonp(this.passobj.url).then(function(res){
                    this.Info = res.body.subjects;
                });
            },
             geturlfenlei:function(){
    //                获取传过来的地址是电影分类，图书分类还是音乐分类;
                if(this.passobj.url.indexOf('movie')!=-1){
                            this.urlSubstr='movie';
                }
                else if(this.passobj.url.indexOf('book')!=-1){
                            this.urlSubstr='book';
                }
                else if(this.passobj.url.indexOf('music')!=-1){
                            this.urlSubstr='music';
                }
            },
            //向doubanmovie发送数据
            sendData:function(){
                vm.$emit(More1,this.Info);
            },
        },

        created:function(){
            this.getlist();
            this.geturlfenlei();
        },
        mounted:function(){
            var self=this;
            setTimeout(function(){
                var obj = {
                    swipeDom:self.$refs.container,
                    swipeType:"x",
                    swipeDistance:10
                }
                new swipe.iScroll(obj);
            },7000)

          setTimeout(function(){
              var doms=document.querySelectorAll('.p_title');
              doms.forEach(function(dom,index){
                  if(dom.innerHTML.length>7){
                      dom.innerHTML=dom.innerHTML.substring(0,7);
                  }

              })
          },3000);
            setTimeout(function(){
                var doms=document.querySelectorAll('.p_score');
                doms.forEach(function(dom,index){
                    var score=dom.innerHTML;
                    var ul=dom.parentNode.children[2];
                    var lis=ul.children;
                    getStar(score,lis);
                })
            },3000);
        },
        updated:function(){
           this.sendData();
        }
    }

</script>

<style scoped>
    .title{
        height: 40px;
        line-height: 40px;
        width: 100%;
        padding:0px 3%;
        font-family: 'microsoft yahei';
        font-size: 14px;
        overflow: hidden;
    }
    .more{
        float: right;
        color: #00B51D;
    }
    .ul_parent{
        width: 100%;
        overflow: hidden;
    }
    .img{
        margin: 0;
        width: 1000%;
        height: 200px;
        padding: 0;
    }

    .img li{
        float: left;
        list-style: none;
        height: 220px;
        width: 120px;
        padding: 10px;
    }
    .img li img{
        height: 150px;
        width: 100px;
    }
    .img li p{
        text-align: center;
    }
    .star{
        padding: 0;
    }
    .star li{
        float: left;
        width: 13px;
        height: 13px;
        padding: 0;
        font-size: 13px;
        color: #ccc;
    }
</style>