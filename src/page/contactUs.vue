<template>
    <div>
      <div class="test">
        <img src="../assets/img/1.png"/>
      </div>
      <div class="aboutUs">
        <div class="top">
          <p>关于我们</p>
          <p><span>————  </span>CORPORATE CULTURE<span>————  </span></p>
        </div>
        <div class="contactUsMain">
          <div class="contactUsMain_l">
            <div class="addRess">
              <div class="ewm">
                <img src="#" class="imgSize"/>
                <p>微信扫一扫</p>
                <p>关注更多相关信息</p>
              </div>
              <div class="userinfo">
                <div class="userinfo_01"></div>
              </div>
            </div>
            <div class="map"></div>
          </div>
          <div class="contactUsMain_r"></div>
        </div>
      </div>
    </div>
</template>
<script></script>
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
    height: 600px;
    text-align: center;
    .top{
      width: 100%;
      height: 100px;
    }
    .contactUsMain{
      width: 1200px;
      height:500px;
      margin: 0 auto;
    }
    .contactUsMain_l{
      width: 500px;
      height: 500px;
      float: left;
      .addRess{
        width: 500px;
        height: 250px;
        background: #ddd;
        .ewm{
          width: 150px;
          height: 250px;
          float: left;
          background: pink;
          .imgSize{
            width: 150px;
            height: 150px;
          }
          p{
            height: 10px;
            line-height: 10px;
            font-size: 16px;
          }
        }
        .userinfo{
          width: 300px;
          height: 250px;
          float: right;
          background: #000;
        }
      }
      .map{
        width: 500px;
        height: 250px;
        background: #ccc;
      }
    }
    .contactUsMain_r{
      width: 600px;
      height: 500px;
      background: pink;
      float: right;
    }
  }
</style>
