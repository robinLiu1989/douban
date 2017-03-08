<template>

	<div class="tmpl">		
		<!-- 1.0 头部 -->
		<div class="header">
			<span>豆瓣</span>
			<router-link class="active search" to='/search'><span class="mui-icon mui-icon-search"></span></router-link>
			<router-link class="active login" to='/login'><span class="mui-icon mui-icon-paperplane"></span></router-link>
		</div>
		<!-- 1.0.1 在头部增加一个返回按钮 -->
		<div v-show="isshow" class="goback">
			<a @click="goback">返回</a>
		</div>
		<!-- 2.0 路由占位 -->
		<router-view></router-view>

		<!-- 3.0 底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/login">
				<span class="mui-icon mui-icon-email">
				
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>

			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	var count = 0;
	import {vm,KEY} from './kits/sendparams.js';

	vm.$on(KEY,function(input){
		// 将input数据叠加到count 
		count+=input;

		// 将count设置到span中
	});

	// 利用es6语法定义并且导出一个vm对象
	export default{		
		data:function(){
			return {
				isshow:false
			}
		},
		watch:{
			'$route':function(newRouter,oldRouter){
				// 判断 newRouter.path =='/Home' 就要将isshow设置为false
				// 否则将isshow设置为true
				if(newRouter.path.toLowerCase() =='/home'){
					this.isshow = false;
				}
				else{
					this.isshow = true;
				}
			}
		},
		methods:{
			// 实现上一页导航功能
			goback:function(){
				this.$router.go(-1);
			}

		},
		mounted:function(){
			// 当Ap.vue加载完毕以后从localStorage中获取数据
		}
	}

</script>

<style scoped>

	.goback{
		position: absolute;
		top:10px;
		left:5px;
		z-index: 101;
	}

	.goback a{
		color:#00B51D;
		font-size: 14px;
		font-weight: bold;
	}
    .header{
        /*background-color: #00B51D;*/
		height: 50px;
		line-height: 50px;
		text-align: center;
		position: relative;
		font-family: 'microsoft yahei';
    }
	.tmpl{
		margin-top: 0px;
	}
	.login{
		position: absolute;
		right: 4%;
		color:#00B51D;
	}
	.search{
		position: absolute;
		right: 20%;
		color:#00B51D;
	}


</style>