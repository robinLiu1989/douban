// 解析.vue组件页面的代码

import Vue from 'vue';

 //导入 App.vue文件
import App from './App.vue';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from './components/Home.vue';
//豆瓣
import doubanmovie from './components/douban/doubanmovie.vue'
import doubanbook from './components/douban/doubanbook.vue'
import doubandianshi from './components/douban/doubandianshi.vue'
import doubancity from './components/douban/doubancity.vue'
import doubanmusic from './components/douban/doubanmusic.vue'
//swipe竖版排布
import yuanxian_movie from './components/subcom/yuanxianMovie.vue'
import login from './components/login/login.vue'
import search from './components/search/search.vue'
import detile from './components/subcom/detile.vue'

var vueRouterObj = new VueRouter({
	linkActiveClass :'mui-active', //将激活的路由添加一个mui-active类名称
	routes:[
		{path:'/',redirect:'/Home'},
		{path:'/Home',component:home},
		//豆瓣
        {path:'/douban/movie',component:doubanmovie},
        {path:'/douban/book',component:doubanbook},
        {path:'/douban/dianshi',component:doubandianshi},
        {path:'/douban/city',component:doubancity},
        {path:'/douban/music',component:doubanmusic},
		//竖版排布
		{path:'/yuanxian_movie',component:yuanxian_movie},
		{path:'/login',component:login},
        {path:'/search',component:search},
        {path:'/detile/:movie_or_book/:id',component:detile}
	]
});


// mint-ui的使用
//  导入mint-ui的样式
import 'mint-ui/lib/style.min.css'
//  导入mint-ui的组件包
import mintUI  from 'mint-ui'
// 将mintUI对象在Vue中通过use()进行绑定
Vue.use(mintUI);

// 导入mui的css
import '../statics/mui/css/mui.css'
import '../statics/mui/css/icons-extra.css'


//  使用vue-resource
// 导入vue-resource
import vueResource  from 'vue-resource'

Vue.use(vueResource);

//  注册一个日期格式化的全局过滤器
// 日期格式化是借助于 moment.js 来实现的
import moment from 'moment';

Vue.filter('datefmt',function(input,fmtStr){
	fmtStr = fmtStr?fmtStr:'YYYY-MM-DD';
	// YYYY-MM-DD 
	return moment(input).format(fmtStr);
});

// 注册vue-preview组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

import '../statics/css/site.css'
// 最后： 将App中的内容编译解析出来替换index.html中的<div id="app"></div>
new Vue({
	el:'#app',
	router:vueRouterObj,  //使用路由规则对象
	render:create=>create(App) //es6语法
});