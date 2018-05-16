<template>
  <div>
    <!-- swiper -->
    <div @mouseover="mouseover" @mouseout="mouseout">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in gridList" :key="index" class="swiper-slide" :style="{height: gridHeight}"><img  :src="item.src" alt=""></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    gridList: {
      type: Array,
      default: () => {
        return [
          {
            src: require('../assets/img/1.png')
          },
          {
            src: require('../assets/img/2.png')
          },
          {
            src: require('../assets/img/3.jpg')
          },
          {
            src: require('../assets/img/4.jpg')
          }
        ]
      }
    },
    gridHeight: {
      type: String,
      default: '200px'
    }
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        speed: 3000,
        freeModeMomentumBounce: false,
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 0
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    mouseover () {
      this.swiper.autoplay.stop()
    },
    mouseout () {
      this.swiper.autoplay.start()
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    /*height: 100px;*/
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: pink;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
