<template>
  <div>
    <!-- swiper -->
    <div class="about_us">
      <h4>关于我们</h4>
      <p style="margin-bottom: 30px;"><span>————  </span><span style="font-size: 12px;">CORPORATE CULTURE</span><span>————  </span></p>
      <p>某某信息科技有限公司致力于建设行业信息化及应用软件的研制开发，是集软件开发、系统集成与产品服务为一体的高新技术企业。2001年通过国家软件企业</p>
      <p>认定，现为XX省更大的建筑软件开发商、产品及系统解决方案提供商。某某信息科技有限公司通过技术的不断积累与创新，始终引领着建设行业信息化的变革，</p>
      <p>并在工程软件、办公自动化、企业信息化、电子政务等领域形成了自身的核心技术优势，拥有十二项具有自主知识产权的高新技术……</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "companyIntroduction;"
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
  .about_us{
    width: 100%;
    height: 350px;
    h4{
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
