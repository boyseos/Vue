<template>
<div>
	<Home></Home>
	<div class="calculator" >
		<div class="display">{{current || '0'}}</div>
		<div @click="clear" class="btn">C</div>
		<div @class="btn">+/-</div>
		<div @click="log" class="btn">%</div>
		<div @click="divide" class="btn operator">÷</div>
		<div @click="append('7')" class="btn">7</div>
		<div @click="append('8')" class="btn">8</div>
		<div @click="append('9')" class="btn">9</div>
		<div @click="times" class="btn operator">x</div>
		<div @click="append('4')" class="btn">4</div>
		<div @click="append('5')" class="btn">5</div>
		<div @click="append('6')" class="btn">6</div>
		<div @click="minus" class="btn operator">-</div>
		<div @click="append('1')" class="btn">1</div>
		<div @click="append('2')" class="btn">2</div>
		<div @click="append('3')" class="btn">3</div>
		<div @click="add" class="btn operator">+</div>
		<div @click="append('0')" class="btn zero">0</div>
		<div class="btn">.</div>
		<div @click="equal" class="btn operator">=</div>
	</div>
</div>
</template>

<script>
import Home from "@/components/Home.vue"

export default({
	name : 'calculator',
	components : {Home},
	data(){
		return {
			previous : null,
			current : '',
			operator : null,
			operatorClicked : false
		}
	},
	methods: {
		clear(){this.current=''},
		setPrevious(){
			this.previous = this.current
			this.operatorClicked = true
		},
		append(number){
			if(this.operatorClicked){
				this.current = '',
				this.operatorClicked = false
			}
			this.current += number
			alert(`number = ${number}  current = ${this.current}  previous = ${this.previous}`)
		},
		log(){
			alert(Object.keys(this))
		},
		add(){
			this.operator = function(a,b){return (a + b)}
			this.setPrevious()
		},
		minus(){
			this.operator = (a,b) => a - b
			this.setPrevious()
		},
		times(){
			this.operator = (a,b) => a * b
			this.setPrevious()
		},
		divide(){
			this.operator = (a,b) => a / b
			this.setPrevious()
		},
		equal(){
			alert(`current = ${this.current}  previous = ${this.previous}`)
			this.current = `${this.operator(parseFloat(this.previous),parseFloat(this.current))}`
		}
	}
})
</script>

<style scoped>
.calculator{	
    margin: auto;
    width: 400px;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(50px, auto);
}
.display{
	grid-column: 1/5;
	background: #333;
	color : white;
}
.zero {
	grid-column: 1/3;
}
.btn{
	background-color:  #f0f0f0;
	border: 1px solid #999;
}
.operator{
	background-color: orange;
	color : white;
}
</style>
