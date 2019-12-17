import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home.vue"
import Cart from "@/components/Cart.vue"
import HelloWorld from "@/components/HelloWorld.vue"
import Calculator from "@/components/Calculator.vue"
import SeqSum from "@/components/SeqSum.vue"
import Account from "@/components/Account.vue"
import Todo from "@/components/Todo.vue"
Vue.use(Router)

export default new Router({
	mode : 'history',
	routes : [
		{path: '/', name : 'home', component: Home},
		{path: '/cart', name : 'cart', component: Cart},
		{path: '/helloworld', name : 'helloworld', component: HelloWorld},
		{path: '/calculator', name : 'calculator', component: Calculator},
		{path: '/seqsum', name : 'seqsum', component: SeqSum},
		{path: '/account', name : 'account', component: Account},
		{path: '/todo', name : 'todo', component: Todo}
	]
})