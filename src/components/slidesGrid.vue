<template>
  <div>
    <!-- swiper -->
    <div class="about_us">
      <h4>关于我们</h4>
      <p><span>————  </span><span style="font-size: 12px;">CORPORATE CULTURE</span><span>————  </span></p>
      <p>某某信息科技有限公司致力于建设行业信息化及应用软件的研制开发，是集软件开发、系统集成与产品服务为一体的高新技术企业。2001年通过国家软件企业</p>
      <p>认定，现为XX省更大的建筑软件开发商、产品及系统解决方案提供商。某某信息科技有限公司通过技术的不断积累与创新，始终引领着建设行业信息化的变革，</p>
      <p>并在工程软件、办公自动化、企业信息化、电子政务等领域形成了自身的核心技术优势，拥有十二项具有自主知识产权的高新技术……</p>
      <div @mouseover="mouseover" @mouseout="mouseout">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item, index) in gridList" :key="index" class="swiper-slide" :style="{height: gridHeight}"><img  :src="item.src" alt=""></swiper-slide>
        </swiper>
      </div>
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
    width: 1200px;
    /*height: 100px;*/
    margin-top: 50px;
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
  .about_us{
    width: 100%;
    height: 500px;
    h4{
      font-weight: 600;
      text-align: center;
    }
    p{
      font-size: 14px;
      color: #888;
      text-align: center;
    }
  }
</style>
