<template>
    <div>
      <slideShow></slideShow>
      <slidesGrid></slidesGrid>
      <footers></footers>
      <div class="mymap">
        <mapDrag @drag="dragMap" lat="22.524491" lng="113.942695"></mapDrag>
      </div>
    </div>
</template>
<script>
import slideShow from '../components/slideshow'
import slidesGrid from '../components/slidesGrid'
import footers from '../components/footer'
import mapDrag from '../components/mapDrag'

export default {
  data () {
    return {
      height: '', // 轮播图组件的高
      imgList: [] // 轮播图组件的图片
    }
  },
  computed: {
  },
  components: {
    slideShow,
    slidesGrid,
    footers,
    mapDrag
  },
  methods: {
    dragMap (data) {
      console.log(data)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
  .mymap{
    width: 500px;
    height: 300px;
  }
  .m-part .mapbox{ width: 600px; height: 400px; margin-bottom: 20px; float: left; }

</style>
