<template>
  <div id="swiper-box">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiperSlide>
        <img width="100%" src="../assets/img/L1.jpg" alt="">
      </swiperSlide>
      <swiperSlide>
        <img width="100%" src="../assets/img/L2.jpg" alt="">
      </swiperSlide>
      <swiperSlide>
        <img width="100%" src="../assets/img/L3.jpg" alt="">
      </swiperSlide>
      <swiperSlide v-for="(item, index) in lunbo" :key="index">
        <img width="100%" :src="item.img" alt="">
      </swiperSlide>
      <!-- 分页 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  import axios from 'axios'
  
  export default {
    name: "Lunbo",
    components: {
      swiper,
      swiperSlide,
      axios
    },
    data() {
      return {
        lunbo: [],
        swiperOption: {
          // 自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: true,
            disableOnInteraction: false,
          },
          //分页
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          //循环
          loop:true,
        }
      }
    },
    methods: {
      //get请求
      lunboImg() {
        axios.get('/api/lunbo').then((res) => {
          this.lunbo = res.data
        })
      }
    },
    mounted() {
      this.lunboImg();
    }
  }
</script>

<style lang="scss" scoped>
  #swiper-box {
    padding: 0.5rem;

    img {
      border-radius: 6px;
    }
  }
  .swiper-pagination {
  
  }
</style>