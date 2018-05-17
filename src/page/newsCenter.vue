<template>
  <div>
    <slideShow></slideShow>
    <div class="newsInformation"></div>
    <footers></footers>
  </div>
</template>
<script>
import slideShow from '../components/slideshow'
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
    footers
  }
}
</script>
<style lang="less" scoped>
.newsInformation{
  width: 100%;
  height: 700px;
  background: #fff;
}
</style>
