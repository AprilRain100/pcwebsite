<template>
    <div>
      home
      <slideShow></slideShow>
    </div>
</template>
<script>
import slideShow from '../components/slideshow'
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
    slideShow
  }
}
</script>
<style lang="less" scoped>

</style>
