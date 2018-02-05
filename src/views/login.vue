<template>
  <div>
      <i class="fa fa-user-o" aria-hidden="true"></i>
<mt-field label="" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="" placeholder="请输入你的密码" v-model="username"></mt-field>

  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'zhangyake'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  border: 1px solid #000000;
  box-sizing: border-box;
  /* outline:none; */

}
.searchData {
  list-style: none;
  margin: 4px;
  padding: 0;
  background: #fff;
}
.searchData li {
  background: #fff;
  /* border:1px solid #b3b3b3; */
  box-sizing: border-box;
  border-radius: 3px;
  padding: 5px;
}
.searchData li:hover {
  background: #efefef;
}
.store {
  list-style: none;
  padding: 5px;
  border: 1px solid #bbb9b9eb;
  box-sizing: border-box;
  margin: 4px;
border-radius: 5px;
}
.store li {
  display: inline-block;
  background: #fff;
  border:1px solid #b3b3b3;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 5px;
  margin-left: 5px;
}
.store li:last-child{
 border:none;
 padding: 0;
 margin: 0;
}
.store li:last-child  input{
  border:none;
   outline: none;
}
.store li i{
cursor: pointer;
}
</style>
