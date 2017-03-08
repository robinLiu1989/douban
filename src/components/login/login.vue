<template>
    <div class='img'>
        <!--<img src="../../../statics/imgs/login.png" alt=""/>-->
        <h3>欢迎来到豆瓣</h3>
        <div>
            <input class='input' id='tel' type="text" placeholder="手机号/邮箱"/>
            <input class='input' id='pwd' type="text" placeholder="密码"/>
            <input class='button' type="button" value="登录">
        </div>
        <div class='forget'>
            <span>注册豆瓣</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>忘记密码</span>
        </div>
        <div class="weibo">
            <span class="mui-icon mui-icon-weixin"><span class='login_weixin'>微信登录</span></span>
            <span class="mui-icon mui-icon-weibo"><span class='login_weibo'>微博登录</span></span>
        </div>
         <p class='tip'></p>
    </div>

</template>

<script>
    export default{
        data:function(){
            return {

            }
        },
        methods:{


        },

        created:function(){

        },
        mounted:function(){

                /*获取dom元素*/
                var button = document.querySelector(".button");
                var telDom = document.querySelector('#tel');
                var pwdDom = document.querySelector("#pwd");
                var tip = document.querySelector('.tip');
                var self=this;
                button.onclick = function () {
                    var url='login.php';
                    self.$http.get(url).then(function(res){
                    })


           }


        },
        updated:function(){

        }

    }


</script>

<style scoped>
    .tip{
        height: 300px;
    }
    .img{
        padding-top:80px ;
        height: 100%;

    }
    h3{
        font-size:32px;
        padding-bottom: 10px;
        color: #00B51D;
        text-align: center;
        font-family: 'microsoft yahei';
    }
    .input{
        margin:20px 20px;
        display: inline-block;
        /*text-align: center;*/
        width:90%;
        border:none ;
        border-bottom: 2px solid #00B51D;
    }
    .button{
        background-color:#00B51D;
        color:#fff;
        width: 90%;
        margin-top:30px;
        margin-left: 20px;
        height: 40px;
        font-size: 14px;
    }
    .forget{
        padding: 20px;
        text-align: center;

    }
    .mui-icon{
        font-size: 30px;
    }
    .weibo{
        width: 100%;
        position: absolute;
        padding-top: 160px;
        text-align: center;
    }
    .login_weixin,.login_weibo{
        font-size: 16px;
        padding: 2px;
    }
    
</style>