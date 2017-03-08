<template>
    <div class='gen'>
        <div class='img'>
           <img  :src=imgSrc   />
        </div>
        <div class='left '>
            <p>{{Infos.title}}</p>
            <p>导演：{{dirctorname}}</p>
            <p>主演：{{castsname}}</p>
        </div>
        <div class='right'>
            <p>{{score}}</p>
            <ul class='star'>
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
            </ul>
            <p>{{Infos.ratings_count}}</p>
        </div>
        <div class='clearfix'></div>
        <div class='havesee'>
            <button type="button" class="mui-btn mui-btn-warning mui-btn-outlined">想看</button>
            <button type="button" class="mui-btn mui-btn-warning mui-btn-outlined">
                <span>看过</span>
                <ul>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                </ul>
            </button>
        </div>
        <!--简介-->
        <div class="sumarry">
            <p>简介</p>
            <div>
                <p class='p1'>{{ Infos.summary}}</p>
                <p class="zhangkai">...<span>展开</span></p>
            </div>
        </div>
        <!--剧照-->
        <juzhao :casts_dirctor='casts_dirctor'></juzhao>
        <!--评论-->
        <div class='comment'>
            <div class='pinlun'>评论</div>
        </div>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import backgroundColor from '../../kits/backgroundColor.js';
    import getStar from '../../kits/getStar.js';
    import juzhao from './juzhao.vue';

    export default{
        data:function(){
            return {
                Infos:{},
                movie_or_book:'',
                id:0,
                url:'',
                imgSrc:'',
                bgc:'#fff',
                dirctor:[],
                dirctorname:'',
                casts:[],
                casts_dirctor:[],
                castsname:'',
                dirctors:'',
                score:0
            }
        },
        props:['picurl'],
        methods:{
            getlist:function(){
                if(this.movie_or_book=='movie'){
                    this.url=common.doubanDomain+'/v2/'+this.movie_or_book+'/subject/'+this.id;
                }else if(this.movie_or_book=='book'){
                    this.url=common.doubanDomain+'/v2/'+this.movie_or_book+this.id;
                }else if(this.movie_or_book=='music'){
                    this.url=common.doubanDomain+'/v2/'+this.movie_or_book+this.id;
                }
                this.$http.jsonp(this.url).then(function(res){
                  this.Infos=res.body;

//                    将演员名字拼接起来
                        var str='';
                        this.casts=this.Infos.casts;
                        if(this.casts.length>=3){
                            this.casts.length=3;
                        }
                        for(var i=0; i<this.casts.length; i++){
                            str+= this.casts[i].name+'/';
                        }
                        str=str.substr(0,str.length-1);
                        this.castsname=str;
                    //将导演的名字拼接起来
                        var dirstr='';
                        this.dirctor=this.Infos.directors;
                        if(this.dirctor.length>=3){
                            this.dirctor.length=3;
                        }
                        for(var i=0; i<this.dirctor.length; i++){
                            dirstr+= this.dirctor[i].name+'/';
                        }
                        dirstr=dirstr.substr(0,dirstr.length-1);
                        this.dirctorname=dirstr;
                        // 将cast和dirctor组成数组传递
                         this.casts_dirctor=this.dirctor.concat(this.casts);


                     //根据评分设置星星样式
                        this.score=this.Infos.rating.average;
                        var lis=document.querySelector(".star").children;
                        getStar(this.score,lis);

                    //由于图片请求需要的时间较长，因此在渲染dom之前将
                  this.imgSrc=this.Infos.images.large;

                    //设置背景色
                    if(backgroundColor[this.id]==undefined){
                        this.bgc='#0E0410';
                    }else{
                        this.bgc=backgroundColor[this.id];
                    }
                    document.querySelector('.img').style.backgroundColor=this.bgc;

                    //点击展开加载更多
                    document.querySelector('.zhangkai').onclick=function(){
                        document.querySelector('.p1').className='click';
                        this.parentNode.removeChild(this);
                    }
                });
            },


        },
        beforeCreate:function(){
        },
        created:function(){
            this.movie_or_book=this.$route.params.movie_or_book;
            this.id=this.$route.params.id;
            this.getlist();

        },
        mounted:function(){

        },
        components:{
            juzhao:juzhao,
        }
    }
    
</script>

<style scoped>
    .gen{
        width: 100%;
    }
    li{
        list-style: none;
    }
    .gen .img{
        background-color: #fff;
        width: 100%;
        height: 330px;
        padding-top: 50px;
    }
    .img img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 180px;
        height: 252px;
    }
    .left{

        float: left;
        width: 62%;
        padding-top: 15px;
        padding-left: 10px;
        border: 1px solid #fff;
    }
    .left p{
        margin: 2px;
        font-family: 'microsoft yahei';
    }
    .left p:nth-child(1){
        font-weight: 700;
        font-size: 24px;
        height: 35px;
        line-height: 35px;
        margin-bottom: 10px;
    }
    .right{
        border: 1px solid #fff;
        float: right;
        margin-top: 25px;
        margin-right: 10px;
        text-align: center;
        width: 100px;
        height: 100px;
        border: 1px solid #fff;
        box-shadow: 0px 0px 10px  #999 ;
    }
    .right p:nth-child(1){
        padding: 0;
        font-size: 22px;
        font-weight: 700;
        height: 40px;
        padding-top: 20px;
        margin: 0;

    }
    .right p:nth-child(3){
        padding-top: 2px;
    }
    .right .star{
        padding: 0;
        margin: 0;
        overflow: hidden;
        text-align: center;
        padding-left: 16px;
        padding-top: 8px;
    }
    .right .star li{
        float: left;
        font-size: 14px;
        display: inline-block;

    }
    .clearfix{
        height: 131px;
    }
    .havesee{
        margin-top: 20px;
        padding-top: 5px;
        width: 100%;
        height: 43px;
    }
    .havesee button{
        padding:10px 30px;
        font-weight: 600;
        color:orange;
        font-size: 15px;
        margin-right: 10px;
        margin-left: 15px;
    }
    .havesee span{
        float: left;
        padding-right: 10px;
    }
    .havesee ul{
        margin: 0;
        padding: 0;
        width: 120px;
    }
    .havesee ul li{
        float: left;
    }
    .sumarry{
        margin: 30px 10px;
    }
    .sumarry p{
        font-size: 15px;
    }
    .sumarry>div>.p1{
        height: 85px;
        overflow: hidden;
    }
    .sumarry>div>.click{
    }
    .sumarry>div{
        position: relative;
    }
    .sumarry .zhangkai{
        background-color: #fff;
        width: 60px;
        position: absolute;
        padding-left: 10px;
        right: 10px;
        bottom: 0;
        color: #00B51D;
        margin: 0;
    }
    .comment .pinlun{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 20px;
        background-color: #ddd;
        font-size: 16px;
    }

</style>