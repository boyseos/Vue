<template>
<div id="todolistapp">
	<Home></Home>
    <div id="header" class="header">
        <h2>Todo List App</h2>
        <input class="input" type="text" v-model="taskItem" placeholder="입력 후 엔터!">
        <span @click="insertTask" class="addbutton">추 가</span>
    </div>
    <ul>
		<li v-for="(item , index) of items" :key="item.name" :class="item.cls" :id="item.id" @click="modifyTask(item)">
			<span>{{index+1}}. </span>
			<span>{{item.name}}</span>
			<span v-if="item.cls">  완성</span>
			<span @click="deleteTask(index)" class="close">&#x00D7;</span>
		</li>
    </ul>
</div>
</template>
<script>
import Home from '@/components/Home.vue'
export default({
	name : 'todo',
	components : {Home},
	data(){
		return {
			taskItem : '',
			idcount : 8,
			items : [{id : 0, name : '밥', check : true, cls : ''},
					{id : 1, name : '먹고', check : false, cls : ''},
					{id : 2, name : '공부', check : false, cls : ''},
					{id : 3, name : '할까', check : false, cls : ''},
					{id : 4, name : '자고', check : false, cls : ''},
					{id : 5, name : '놀고', check : false, cls : ''},
					{id : 6, name : '집에', check : false, cls : ''},
					{id : 7, name : '가자', check : false, cls : ''}
			]
		}
	},
	methods : {
		insertTask(){
			this.items.push({id : this.idcount ,name : this.taskItem, check : false})
			this.idcount += 1
		},
		modifyTask(item){
			item.check = !item.check
			item.cls = item.check ? 'checked':''  
		},
		deleteTask(index){
			this.items.splice(index,1)
		}
	}
})
</script>
<style scoped>
 * {  box-sizing: border-box;  }
    ul {  margin: 0; padding: 0; }
    ul li {
        cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
        background: #eee; font-size: 14px;  transition: 0.2s;
        -webkit-user-select: none; -moz-user-select: none;
        -ms-user-select: none; user-select: none;  
    }
    ul li:hover {  background: #ddd;  }
    ul li.checked {
        background: #BBB;  color: #fff; text-decoration: line-through;
    }
    ul li.checked::before {
        content: ''; position: absolute; border-color: #fff;
        border-style: solid; border-width: 0px 1px 1px 0px;
        top: 10px; left: 16px;  transform: rotate(45deg);
        height: 8px; width: 8px;
    }
    .close {
        position: absolute; right: 0; top: 0;
        padding: 12px 16px 12px 16px
    }
    .close:hover {
        background-color: #f44336;  color: white;
    }
    .header {
        background-color: purple; padding: 30px 30px;
        color: yellow; text-align: center;
    }
    .header:after {
        content: ""; display: table; clear: both;
    }
    .input {
        border: none; width: 75%; height:35px; padding: 10px;
        float: left; font-size: 16px;
    }
    .addbutton {
        padding: 10px; width: 25%; height:35px; background: #d9d9d9;
        color: #555; float: left; text-align: center;
        font-size: 13px; cursor: pointer; transition: 0.3s;
    }
    .addbutton:hover { background-color: #bbb; }
    .completed { text-decoration:none; }
</style>