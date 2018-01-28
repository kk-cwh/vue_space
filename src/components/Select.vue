<template>
  <div>
   
     <ul class="store">
         <li v-for="(item,index) in ulDatas" :key="item+index" v-text="item"> </li> 
      </ul>  
<input  class="search" v-model="search" />
   <ul class="searchData"> 
      <li v-for="item in searchData" :key="item" v-text="item" @click="addToUl(item)"> </li> 
   </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search: '',
      items: ['中国', '美国', '韩国', '日本'],
      ulDatas: []
    }
  },
  computed: {
    searchData: function () {
      if (this.search) {
        return this.items.filter((item) => { return item.indexOf(this.search) > -1 })
      }
      return []
    }
  },
  methods: {
    addToUl (item) {
      this.ulDatas.push(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
   border: 1px solid #000000; 
  box-sizing: border-box; 
  /* outline:none; */
}
.searchData{
  list-style: none;
  background: #fff;
}
.searchData  li{
  background: #fff;
 
}
.searchData li:hover{
background: #efefef;
}
.store{
 list-style: none;
}
.store li{
 display: inline-block;
 margin: 2px;
}
</style>
