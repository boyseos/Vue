<template>
<div>
	<Home></Home>
	입력값 : <input v-model="num" type="text" />
	<br/>
	결과값 : <input v-model="result" type="text" />
	<br/>
	<input @click="sum" type="button" value="계산"/>
</div>
</template>
<script>
import Home from "@/components/Home.vue"
export default({
	name : 'seqsum',
	components : {Home},
	data(){
		return {
			num : null,
			result : null
		}
	},
	methods : {
		sum(){
			const arr = this.num.split(',').sort((a,b)=>a-b)
			const range = (start,stop) => Array.from({length : stop - start + 1}
					,(_,i) => start + i)
					.reduce((i,j) => Number(i) + Number(j))
			this.result = range(Number(arr[0]),Number(arr[1]))
		}
	}
})
</script>
<style scoped></style>