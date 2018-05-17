<template>
    <div>
      <slideShow></slideShow>
      <slidesGrid></slidesGrid>
      <div class="newsData"></div>
      <touchMe></touchMe>
      <footers></footers>
    </div>
</template>
<script>
import slideShow from '../components/slideshow'
import slidesGrid from '../components/slidesGrid'
import touchMe from '../components/touchMe'
import footers from '../components/footer'

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
    touchMe,
    footers
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
.newsData{
  width: 100%;
  height: 400px;
  background: #eee;
}
</style>
