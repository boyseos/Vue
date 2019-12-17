<template>
<div>
	<Home></Home>
	<ul>
		<li v-for="item of items" :key="item.name" @click="choice">
			{{item.name}} : {{item.price}} 원
			<input type="text" v-model="item.qty"> 개
			<img :src="item.img" alt="">
		</li>
	</ul>
<button @click="buy">구매</button>
<p>합계 : {{totalPrice}} 원</p>
</div>
</template>

<script>
import Home from '@/components/Home.vue'
const items = [
	{name : '연필', price : 300, qty : 0, img: require('@/assets/logo.png')},
	{name : '샤프', price : 1000, qty : 0},
	{name : '볼펜', price : 500, qty : 0},
	{name : '지우개', price : 200, qty : 0}
]
export default {
	name: 'cart',
	components : {
		Home
	},
/* 	props: {
		itemss : String
	}, */
	data(){
		return { items } 
		},
	methods : {
		buy(){
			alert(`구매버튼 클릭`)
		},
		choice(){
			alert('선택')
		}
	},
	computed : {
		totalPrice(){
			return this.items.reduce((sum,item)=>{
				return sum + (item.price * item.qty)
			},0)
		}
	},
	created : function(){
	}
}
/* const app = new Vue({
	el : '#app',
	data : {
		items : items
	},
	methods : {
		buy(){
			alert(`구매버튼 클릭`)
		},
		choice(){
			
		}
	},
	computed : {
		totalPrice(){
			return this.items.reduce((sum,item)=>{
				return sum + (item.price * 2)
			},0)
		} 
	},
	created : function(){
		console.log('뷰생성')
	}
})*/
</script>