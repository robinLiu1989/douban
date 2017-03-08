<template>
    <div>
        <input type="text" class='input' placeholder="影视、图书、唱片、活动等" />
        <div class='hot'>
            <h5>热门搜索</h5>
            <ul>
                <li>
                    <a class="active "><span class="mui-icon mui-icon-arrowthinup first"></span><span>生化危机:终章</span></a>
                </li>
                <li>
                    <a class="active "><span class="mui-icon mui-icon-arrowthinup first"></span><span>刺客信条</span></a>
                </li>
                <li>
                    <a class="active "><span class="mui-icon mui-icon-arrowthinup first"></span><span>四重奏</span></a>
                </li>
                <li>
                    <a class="active"><span class="mui-icon mui-icon-arrowthinup"><span>朗读者</span></span></a>
                </li>
                <li>
                    <a class="active"><span class="mui-icon mui-icon-arrowthinup"><span>爱乐之城</span></span></a>
                </li>
                <li>
                    <a class="active"><span class="mui-icon mui-icon-arrowthinup"><span>三生三世十里桃花</span></span></a>
                </li>
                <li>
                    <a class="active"><span class="mui-icon mui-icon-arrowthinup"><span>大唐荣耀</span></span></a>
                </li>
                <li>
                    <a class="active"><span class="mui-icon mui-icon-arrowthinup"><span>大秦帝国之崛起</span></span></a>
                </li>
                <li>
                    <a class="active"><span class="mui-icon mui-icon-arrowthinup"><span>驴得水</span></span></a>
                </li>
                <li>
                    <a class="active"><span class="mui-icon mui-icon-arrowthinup"><span>摆渡人</span></span></a>
                </li>
            </ul>
        </div>
        <div class='book'>
            <p>图书</p>
            <ul>
                <li v-for='item in books'>
                    <router-link v-bind="{to:'/detile/book/'+item.id}">
                        <div class="left">
                            <img :src="item.images.small" alt=""/>
                        </div>
                        <div class='right'>
                            <p>{{item.title}}</p>
                            <div>
                                <span>{{item.rating.average}}分/</span>
                                <span>{{item.author[0]}}/</span>
                                <span>{{item.pubdate}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="book movie">
            <p>影视</p>
            <ul>
                <li v-for='item in movies'>
                    <router-link v-bind="{to:'/detile/movie/'+item.id}">
                        <div class="left">
                            <img :src="item.images.small" alt=""/>
                        </div>
                        <div class='right'>
                            <p>{{item.title}}</p>
                            <div>
                                <span>{{item.rating.average}}分/</span>
                                <span>{{item.directors[0].name}}/</span>
                                <span>{{item.year}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from '../../kits/common.js';


    export default{
        data:function(){
            return {
                movies:[],
                books:[],
                q:'',
                tag:''
            }
        },
        methods:{
            getlist:function(){

            },

        },
        created:function(){

        },

        mounted:function(){
            var self=this;
            var inputDom=document.querySelector('.input');
            var hot= document.querySelector('.hot');
            var movie=document.querySelector('.movie');
            var book=document.querySelector('.book');
            var val=inputDom.value;
            if(val.length===0){
                movie.classList.add('hide');
                book.classList.add('hide');
            }

//            inputDom.onkeyup=getSearchValue;
            function getSearchValue(){
                val=inputDom.value;
                hot.classList.add('hide');
                movie.classList.remove('hide');
                book.classList.remove('hide');
                if(val.length===0){
                    hot.classList.remove('hide');
                    movie.classList.add('hide');
                    book.classList.add('hide');
                }
                self.q=val;
                self.tag=val;
                var url=common.doubanDomain+'/v2/movie/search?q='+self.q;
                var url2=common.doubanDomain+'/v2/book/search?q='+self.q;
                self.$http.jsonp(url).then(function(res){
                    this.movies=res.body.subjects.slice(0,3);
                });
                self.$http.jsonp(url2).then(function(res){
                    this.books=res.body.books.slice(0,3);
                });
            }
        }
    }
    
    
</script>



<style scoped>
    .hide{
        display: none;
    }

    .input{
        border: 1px solid #00B51D;
        width: 90%;
        margin:3% 5%;
        padding:3% 5%;
    }
    h5{
        padding: 5%;
        background-color: #eef;
    }
    ul{
        list-style: none;
        padding-left: 3%;
    }
    li{
        height: 30px;
        line-height: 30px;
        font-size: 14px;

    }
    .mui-icon{
        font-size: 14px;
    }
    .mui-icon span{
        margin-left: 5px;
    }

    li a{
        color: #000;

    }
    li .first{
        color: red;
    }
    .book{
        margin-top: 20px;
    }
    .book .left{
        float: left;

    }
    .book .right{
        float: left;
        margin-left: 20px;
    }
    .book .right p{
        font-size:18px;
        font-weight: 700;
        color:#000;
        margin: 0;
        width: 260px;
    }
    .book .left img{
        width: 60px;
        height: 80px;
    }
    .book ul{
        margin: 0;
        padding: 0;
        padding-top: 20px;
        margin-left: 20px;
    }
    .book ul li{
        height: 90px;
    }
    .book>p{
        padding: 0;
        padding-left: 20px;
        margin: 0;
        background-color: #eee;
        height: 30px;
        line-height: 30px;
    }
    
</style>