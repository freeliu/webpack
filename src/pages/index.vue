<template>
  <div class="page">
     <swiper></swiper>

<!--    这是index
    <router-link :to="{path:'/page1'}">page1</router-link>-->

    <div style="margin-top: 50px"></div><!---->
<!--    <div style="height: 35vh;background-color: red;"></div>
    <div style="height: 35vh;background-color: green;"></div>
    <div style="height: 35vh;background-color: blue;"></div>-->
  </div>
</template>

<script>
  import swiper from '../components/swiper.vue'
  export default {
    name: 'app',
    components: {
      swiper
    },
    created () {
      document.title = '首页'
    }
  }
</script>

