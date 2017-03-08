<template>
	<div >
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="item in swipeList">
		  <router-link v-bind="{to:'/detile/movie/'+item.id}">
		  	<img class="img" :src="item.images.large" alt="">
		  </router-link>
		  </mt-swipe-item>	 
		</mt-swipe>
	</div>
</template>

<script>
import common from '../../kits/common.js'

	export default{
		data: function () {
			return {

			}
		},
		props:['swipeList']
	}
</script>

<style scoped>
	.mint-swipe{
		height: 418px;
	}

	.mint-swipe img{
		width: 100%;
		height: 418px;
	}

	.mint-swipe-item{
		
		color:white;
	}

</style>