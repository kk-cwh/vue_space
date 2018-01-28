<template>
  <div class="hello">
   {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100px;
  height: 100px;
  background: url('/static/uicon.jpg') ;
  background-size: 100% 100%;
  border-radius: 50%;
  box-shadow: 0 0  5px 5px rgb(27, 185, 27) ;
}
</style>
