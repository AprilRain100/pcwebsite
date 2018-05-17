<template>
    <div>
      <div class="test">
        <img src="../assets/img/1.png"/>
      </div>
      <touchMe></touchMe>
      <footers></footers>
    </div>
</template>
<script>
import touchMe from '../components/touchMe'
import footers from '../components/footer'
export default {
  data () {
  },
  computed: {
  },
  components: {
    touchMe,
    footers
  },
  methods: {
    // dragMap (data) {
    //   console.log(data)
    // }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
  .test{
    width: 100%;
    height: 300px;
    background: #000;
    img{
      width: 100%;
      height: 300px;
    }
  }
</style>
