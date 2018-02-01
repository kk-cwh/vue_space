<template>
  <div class="hello">
   <SelectMe :search='1' :items='datas'></SelectMe>
  </div>
</template>

<script>
import SelectMe from './selectMe.vue'
export default {
  name: 'HelloWorld',
  components: {SelectMe},
  data () {
    return {
      msg: '1',
      datas: ['中国', '美国', '韩国']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  /* width: 100px;
  height: 100px; */
  /* background: url('/static/uicon.jpg') ; */
  background-size: 100% 100%;
  border-radius: 50%;
  /* box-shadow: 0 0  5px 5px rgb(27, 185, 27) ; */
}
</style>
