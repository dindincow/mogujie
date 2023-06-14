<template>
	<c-layout>
    <c-header>
			<c-launch></c-launch>
			<c-box-skin type="bottom"></c-box-skin>
		</c-header>
    <c-main>
      <c-row 
				class="nav"
				pb6>
				<c-col
					class="nav__col"
					v-for="(item, index) in categoryList"
					:key="index"
					pv5>
					
					<c-single-center
						class="nav__item">
						<img
							class="nav__img" 
							:src="item['image']"
							pb5/>
						<span>{{ item['title'] }}</span>
					</c-single-center>
				</c-col>	
			</c-row>
     
    </c-main>
    <c-footer>Footer</c-footer>
  </c-layout>
</template>
<script setup>
import { onMounted, reactive, toRefs } from 'vue';
import { getRecommendatoryCategorys, getBanners, getBrandVideos } from '@/api/mall';
import { HamburgerButton, MoreTwo, Search } from '@icon-park/vue-next';

components: {
	HamburgerButton,
	MoreTwo,
	Search
}
const data = reactive({
	categoryList: [],
	swipeList: [],
	brandList: [
		{list:[]},
		{list:[]}
	]
})

onMounted(()=>{
	getBanners().then((res)=>{
		data.swipeList = res.data;
	})
	getRecommendatoryCategorys().then((res)=>{
		data.categoryList = res.data;
	})
	getBrandVideos().then((res)=>{
		data.brandList = res.data;
	})
})

const list = [
	{
		path: '/',
		text: '首页',
		active: true
	},{
		path: '/',
		text: '商城'
	},{
		path: '/',
		text: '直播'
	},{
		path: '/',
		text: '我'
	}
]
</script>
<style lang="scss" scoped>
.box{
	width: 500px;
	height: 500px;
	background: pink;
}
</style>
  