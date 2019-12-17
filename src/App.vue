<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
    <HelloWorld msg="Vue"/>
    <Cart itemss="[
      {name : '연필', price : 300, qty : 0},
      {name : '샤프', price : 1000, qty : 0},
      {name : '볼펜', price : 500, qty : 0},
      {name : '지우개', price : 200, qty : 0}
    ]"/>
    <Home/>

  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'
import Home from './components/Home.vue' */

export default {
  name: 'app'
/*   components: {
    HelloWorld,    
    Cart,
    Home
  } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
