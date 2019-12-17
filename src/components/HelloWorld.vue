<template>
  <div>
    <Home></Home>
    <h1>마안세{{ msg }}</h1>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
export default {
  name: 'hello',
  components : {Home},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 400px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: outline-block;
  margin: 0 10px;
}
a {
  color: #42b583;
}
</style>
