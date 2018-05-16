<template>
    <div>
        <div class="test">
          <img src="../assets/img/1.png"/>
        </div>
        <div class="aboutUs">
          <h3>关于我们</h3>
          <p><span>————  </span>CORPORATE CULTURE<span>————  </span></p>
          <p>某某信息科技有限公司致力于建设行业信息化及应用软件的研制开发，是集软件开发、系统集成与产品服务为一体的高新技术企业。2001年通过国家软件企业</p>
          <p>认定，现为XX省的建筑软件开发商、产品及系统解决方案提供商。某某信息科技有限公司通过技术的不断积累与创新，始终引领着建设行业信息化的变革，并在</p>
          <p>工程软件、办公自动化、企业信息化、电子政务等领域形成了自身的核心技术优势，拥有十二项具有自主知识产权的高新技术……</p>
        </div>
      <footers></footers>
    </div>
</template>
<script>
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
    footers
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
  .aboutUs{
    width:100%;
    height: 220px;
    padding: 30px 0 0 0;
    text-align: center;
    color: #888888;
    font-size: 14px;
    h3{
      font-size: 16px;
      color: #000;
    }
  }
</style>
