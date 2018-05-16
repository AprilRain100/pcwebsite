<template>
  <div>
    <div id="swiper" :style="{height: height}">
      <div id="container">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item, index) in imgList"  :key="index" class="swiper-slide games" :style="{height: height}"><img :src="item.src" alt=""></swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    imgList: {
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
    height: {
      type: String,
      default: '500px'
    }
  },
  data () {
    return {
      swiperOption: {
        // notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: {
          disableOnInteraction: false,
          delay: 1000
        },
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        notNextTick: true,
        speed: 1500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less" scoped>
  #swiper {
    position: relative;
    width: 100%;
    height: 500px;
    min-width: 1200px;
    background: #d3d6a2;
    #container {
      width: 100%;
      // height: 300px;
      margin: 0 auto;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      .swiper-button-prev {
        left: 50px!important;
      }
      .swiper-button-next {
        right: 50px!important;
      }
    }
    .swiper-slide {
      width: 100%;
      height: 500px;
      &:nth-child(odd) {
        background: #876843;
      }
      &:nth-child(even) {
        background: #234356;
      }
      img {
        width: 100%;
        height: 100%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
