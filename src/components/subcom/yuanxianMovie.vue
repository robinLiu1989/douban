<template>
    <div>
        <div class='list'>
            <ul>
                <li>正在热映</li>
                <li class="active">即将上映</li>
            </ul>
        </div>
        <div class='ul_parent'>
            <ul class='ul_left_hidden'>
                <li v-for='item in info'>
                    <div class='item'>
                        <router-link  v-bind="{to:'/detile/movie/'+item.id}">
                            <div class='left'>
                                <img :src="item.images.small" alt=""/>
                            </div>
                            <div class='right'>
                                <p class='title'>{{item.title}}</p>
                                <!--<p>{{item.rating.average}}</p>-->
                                <p>导演：{{item._directors}}</p>

                                <p class='p2'>主演：{{item._casts}}</p>

                                <p class='p3'>{{item.collect_count}}想看</p>
                            </div>
                        </router-link>
                    </div>
                </li>
            </ul>
            <ul class=''>
                <li v-for='item in info2'>
                    <div class='item'>
                        <router-link  v-bind="{to:'/detile/movie/'+item.id}">
                            <div class='left'>
                                <img :src="item.images.small" alt=""/>
                            </div>
                            <div class='right'>
                                <p class='title'>{{item.title}}</p>
                                <p>导演：{{item._directors}}</p>
                                <p class='p2'>主演：{{item._casts}}</p>
                                <p class='p3'>{{item.collect_count}}想看</p>
                            </div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import {vm,More1,More2} from '../../kits/sendparams.js';

    vm.$on(More1, function (input) {
        this.info = input;
    });
    vm.$on(More2, function (input) {
        this.info2 = input;
    });


    export default{
        data: function () {
            return {
                info: [],
                info2: [],
                casts: [],
                dirctor: [],
                dirctorname: '',
                castsname: ''

            }
        },
        methods: {
            navtoggle: function () {
                var lis= document.querySelector('.list').children[0].children;
                var uls=document.querySelector('.ul_parent').children;
                var ul_left=uls[0];
                var ul_right=uls[1];
                for (var i = 0; i < lis.length; i++) {
                    lis[i].onclick = function () {
                        for (var j = 0; j < lis.length; j++) {
                            lis[j].className = '';
                            this.className = 'active';
                        }
                        if(ul_left.className=='ul_left_hidden'){
                            ul_left.className='';
                            ul_right.className='ul_right_hidden'
                        }
                        else if( ul_left.className==''){
                            ul_left.className='ul_left_hidden';
                            ul_right.className='';
                        }
                    }
                };
            },
            getName: function () {
                this.info2.forEach(function (item, index) {
                    // 将演员名字拼接起来
                    var str = '';
                    var castss = [];
                    castss = item.casts;
                    if (castss.length >= 3) {
                        castss.length = 3;
                    }
                    for (var i = 0; i < castss.length; i++) {
                        str += castss[i].name + '/';
                    }
                    str = str.substr(0, str.length - 1);
                    item._casts = str;

                    //将导演的名字拼接起来
                    var dirstr = '';
                    var dirctorss = [];
                    dirctorss = item.directors;
                    if (dirctorss.length >= 2 ){
                        dirctorss.length = 2;
                    }
                    for (var i = 0; i < dirctorss.length; i++) {
                        dirstr += dirctorss[i].name + '/';
                    }
                    dirstr = dirstr.substr(0, dirstr.length - 1);
                    item._directors = dirstr;
                })
                this.info.forEach(function (item, index) {
                    // 将演员名字拼接起来
                    var str = '';
                    var castss = [];
                    castss = item.casts;
                    if (castss.length >= 3) {
                        castss.length = 3;
                    }
                    for (var i = 0; i < castss.length; i++) {
                        str += castss[i].name + '/';
                    }
                    str = str.substr(0, str.length - 1);
                    item._casts = str;

                    //将导演的名字拼接起来
                    var dirstr = '';
                    var dirctorss = [];
                    dirctorss = item.directors;
                    if (dirctorss.length >= 2) {
                        dirctorss.length = 2;
                    }
                    for (var i = 0; i < dirctorss.length; i++) {
                        dirstr += dirctorss[i].name + '/';
                    }
                    dirstr = dirstr.substr(0, dirstr.length - 1);
                    item._directors = dirstr;
                })

            }

        },
        created: function () {
            this.info = vm.info;
            this.info2 = vm.info2;
            this.getName();
        },
        mounted: function () {
            this.navtoggle();
        },
        updated: function () {

        }
    }

</script>

<style scoped>
    ul {
        padding-left: 15px;
    }

    .list {
        padding: 0;
        border-top: 1px solid #ccc;
        border: 1px solid #eee;
    }

    .list ul {
        padding: 0;
        overflow: hidden;
        margin: 15px 0px 0px;
    }

    .list li {
        float: left;
        width: 50%;
        list-style: none;
        text-align: center;
        padding-bottom: 10px;
    }

    .list li.active {
        border-bottom: 1px solid #00B51D;
        color: #00B51D;
    }

    .right ul li {
        float: left;

    }

    li {
        list-style: none;
    }

    .left, .right {
        float: left;
    }

    .right {
        padding-left: 20px;
        height: 100px;
        width: 280px;
    }

    .right .title {
        font-size: 20px;
        color: #000;
        font-family: 'microsoft yahei';
        height: 24px;
        /*font-weight: 700;*/

    }

    .right p {
        float: left;
        width: 100%;
        margin-bottom: 0;
        font-size: 14px;
        /*height: 18px;*/
    }

    .right .p2 {
        /*height: 40px;*/
    }

    .right .p3 {
        color: #0000ed;
    }

    .item {
        height: 120px;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }

    .ul_left_hidden{
        display: none;
    }
    .ul_right_hidden{
        display: none;
    }

</style>