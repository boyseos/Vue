<template>
	<div>
		<Nav>{{msg}}</Nav>
		<Footer></Footer>
		<JumboTron></JumboTron>
	</div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import JumboTron from '@/components/JumboTron.vue'
import Footer from '@/components/Footer.vue'
export default{
	name : 'home',
	components : {
		Nav,
		Footer,
		JumboTron
	},
	data(){
		return {
			msg : '호옴으로 드을어 와았 다아....!!'
		}
	}
}
</script>
<style scoped>
</style>