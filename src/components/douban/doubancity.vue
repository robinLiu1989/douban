<template>
    <div>
        <div class='list' >
            <ul>
                <li >
                    <router-link to='/douban/movie'>电影</router-link>
                </li>
                <li>
                    <router-link to='/douban/book'>读书</router-link>
                </li>
                <li>
                    <router-link to='/douban/dianshi'>电视</router-link>
                </li>
                <li class="active">
                    <router-link to='/douban/city'>同城</router-link>
                </li>
                <li>
                    <router-link to='/douban/music'>音乐</router-link>
                </li>
            </ul>
        </div>
        <div class='bg_ccc'></div>
        <gundong :passobj='in_theater' ></gundong>
        <div class='bg_ccc'></div>
        <gundong :passobj='coming_soon' ></gundong>
        <div class='bg_ccc'></div>
        <!--精选榜单-->
        <div>
            <span class='jinxuan'>精选榜单</span>
            <div ref='contain' class='contain'>
                <ul>
                    <li>
                        <a  class='li_child'>
                            <h4>豆瓣top250</h4>
                            <p>8分以上好电影</p>
                            <threepic :picurl='url_top250'></threepic>
                        </a>
                    </li>
                    <li>
                        <a class='li_child'>
                            <h4>本周口碑榜</h4>
                            <p>2月17日-2月24日</p>
                            <threepic :picurl='url_top250'></threepic>
                        </a>
                    </li>
                    <li>
                        <a class='li_child'>
                            <h4>新片榜</h4>
                            <p>2月17日-2月24日</p>
                            <threepic :picurl='url_top250'></threepic>
                        </a>
                    </li>
                    <li>
                        <a  class='li_child'>
                            <h4>票房榜</h4>
                            <p>票房最高排名</p>
                            <threepic :picurl='url_top250'></threepic>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    import common from '../../kits/common.js';
    import gundong from '../subcom/gundong.vue'
    import threepic from '../subcom/threepic.vue'
    import swipe from '../../../statics/js/swipe.js'

    export default{
        data:function(){
        return {
            in_theater:{
                url:common.doubanDomain+'/v2/movie/in_theaters',
                title:'影院热映'
            },
            coming_soon:{
                url:common.doubanDomain+'/v2/movie/coming_soon',
                title:'院线即将上映'
            },
                url_top250:common.doubanDomain+'/v2/movie/top250',
                url_weekly:common.doubanDomain+'/v2/movie/weekly',
                url_newmovie:common.doubanDomain+'/v2/movie/new_movies',
                url_usbox:common.doubanDomain+'/v2/movie/us_box'
        }
    },
    methods:{
        navtoggle:function(){
            var lis=document.querySelectorAll('li');
           for(var i=0; i<lis.length; i++){
              lis[i].onclick=function(){
                  for(var j=0; j<lis.length; j++){
                      lis[j].className='';
                      this.className='active';
                  }
              }

           }

        }

    },
    created:function(){

    },
    mounted:function(){
        this.navtoggle();
        setTimeout(function(){
            var uldoms=document.querySelectorAll(".img");
            uldoms.forEach(function(uldom,index){
                var lis=uldom.children;
                var li_width=lis[0].offsetWidth;
                uldom.style.width=li_width*lis.length+'px';
            })
        },6000)
    } ,
        components:{
            gundong:gundong,
            threepic:threepic
        }
    }
</script>

<style scoped>
    div.list{
        padding-top: 10px;
        border-top: 1px solid #ccc;
    }
    .list ul{
        padding: 0;
        overflow: hidden;
        margin: 0;

    }
    .list ul li{
        float: left;
        width: 20%;
        list-style: none;
        text-align: center;
        padding-bottom: 10px;
        height: 30px;

    }
    li.active{
        border-bottom: 1px solid #00B51D;
        color: #00B51D;
    }
    .bg_ccc{
        height: 20px;
        width: 100%;
        background-color: #f1f1f1;
    }
    .contain{
        overflow: hidden;
    }
    .contain>ul{
        width: 198%;
        margin: 0;
        padding: 0;
        height: 160px;
    }
    .contain>ul>li{
        background-color: #4DFF52;
        margin: 10px;
        padding: 10px;
        width: 160px;
        height: 160px;
        border-radius: 10px;
        list-style: none;
        float: left;

    }
    .contain>ul>li:nth-child(1){
        background-color: #FFD627;
    }
    .contain>ul>li:nth-child(3){
        background-color: #D29BFF;
    }
    .contain>ul>li:nth-child(4){
        background-color: #FF866E;
    }
    .contain>ul>li img{
        width: 30%;
        height: 30%;
    }
    .contain>ul>li img:nth-child(1){
        width: 40%;
        height: 40%;
    }
    .jinxuan{
        height: 40px;
        line-height: 40px;
        padding-left: 3%;
        font-family: 'microsoft yahei';
        font-size: 14px;
    }
    .li_child{
        color:#fff;
    }
    .li_child>h4{
        font-family: 'microsoft yahei';
        font-weight: 500;
    }
    .li_child>p{
        color:#fff;
    }
    a{
        color:#000;
    }




</style>