<template>
    <div>
        <div class="test">
          <img src="../assets/img/1.png"/>
        </div>
        <companyIntroduction></companyIntroduction>
        <footers></footers>
    </div>
</template>
<script>
import companyIntroduction from '../components/companyIntroduction'
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
    companyIntroduction,
    footers
  }
}
</script>
<style lang="less" scoped>
  .test{
    width: 100%;
    height: 350px;
    background: #000;
    img{
      width: 100%;
      height: 350px;
    }
  }
  .aboutUs{
    width:100%;
    height: 340px;
    /*padding: 30px 0 0 0;*/
    text-align: center;
    color: #888888;
    font-size: 14px;
    h3{
      font-size: 16px;
      color: #000;
      padding-top: 40px;
      font-weight: 600;
      text-align: center;
      padding-top: 40px;
    }
    p{
      font-size: 14px;
      color: #888;
      text-align: center;
      height: 30px;
      line-height: 30px;
    }
  }
</style>
