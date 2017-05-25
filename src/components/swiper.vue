<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <!--<div class="swiper-slide" v-for="src in imgArr"><img :src="src"></div>-->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>


<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  export default {
    data(){
      return {
        imgArr: [
          'http://meishakeji-oss1.img-cn-shenzhen.aliyuncs.com/community/coursepic/3c20b82099594d6a9d36e05c08ba8868.jpeg@80p'
          , 'http://meishakeji-oss1.img-cn-shenzhen.aliyuncs.com/community/coursepic/82e68c96d1bb4a04951fa29bb54ac3f5.png@50q']
      }
    },
    created(){
      setTimeout(() => {
          console.log(1)
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay:true,
          pagination: '.swiper-pagination',
        })
      }, 500)
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

  .swiper-container {
    width: 600px;
    height: 300px;
    img {
      max-width: 100%;
    }
  }
</style>
