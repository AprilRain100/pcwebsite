<template>
    <div>
      home
      <slideShow></slideShow>
      <slidesGrid></slidesGrid>
    </div>
</template>
<script>
import slideShow from '../components/slideshow'
import slidesGrid from '../components/slidesGrid'

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
    slidesGrid
  }
}
</script>
<style lang="less" scoped>

</style>
