<template>
  <div class=" mdui-valign">
    <img class="mdui-img-circle mdui-hoverable" :src="imageURL" />
    <button class="mdui-btn mdui-ripple mdui-ripple-black mdui-color-yellow">black</button>
    <button class="mdui-btn mdui-ripple mdui-ripple-white mdui-color-blue">white</button>
    <button class="mdui-btn mdui-ripple mdui-ripple-red">red</button>
    <button class="mdui-btn mdui-ripple mdui-ripple-blue">blue</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  data() {
    return {
      imageURL: 'https://img1.mukewang.com/54584f6d0001759002200220-140-140.jpg',
      images: [
        'https://img1.mukewang.com/54584f6d0001759002200220-140-140.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
