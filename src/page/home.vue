<template>
    <div>
      <slideShow></slideShow>
      <slidesGrid></slidesGrid>
      <footers></footers>
    </div>
</template>
<script>
import slideShow from '../components/slideshow'
import slidesGrid from '../components/slidesGrid'
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
    footers
  }
}
</script>
<style lang="less" scoped>

</style>
