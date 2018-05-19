<template>
    <div>
      <div class="aboutUs">
        <div class="top">
          <p class="title">联系我们</p>
          <p><span>————  </span><span style="font-size: 12px;">CORPORATE CULTURE</span><span>————  </span></p>
        </div>
        <div class="contactUsMain">
          <div class="contactUsMain_l">
            <div class="addRess">
              <div class="ewm">
                <img src="../assets/img/ewm.png" class="imgSize"/>
                <p>微信扫一扫</p>
                <p>关注更多相关信息</p>
              </div>
              <div class="userinfo">
                <div class="userinfo_01">
                  <img src="//12461779.s61i.faiusr.com/4/AD0I0834BRAEGAAg1KacwwUozpLv9QUwDzgP.png"/>
                  <span>服务热线：400-000-000</span>
                </div>
                <div class="userinfo_01">
                  <img src="//12461779.s61i.faiusr.com/4/AD0I0834BRAEGAAg06acwwUonoH85AIwEjgR.png"/>
                  <span>联系人：91李先生</span>
                </div>
                <div class="userinfo_01">
                  <img src="//12461779.s61i.faiusr.com/4/AD0I0834BRAEGAAg1KacwwUo3qG1mQUwEjgP.png"/>
                  <span>公司邮箱：contact@fkadjkhsf.co </span>
                </div>
                <div class="userinfo_01">
                  <img src="//12461779.s61i.faiusr.com/4/AD0I0834BRAEGAAg1KacwwUooJrH0gYwEjgQ.png"/>
                  <span>公司传真：020-00000000</span>
                </div>
                <div class="userinfo_01">
                  <img src="//12461779.s61i.faiusr.com/4/AD0I0834BRAEGAAg06acwwUotNKJrgUwEDgS.png"/>
                  <span>邮政编码：400000</span>
                </div>
                <div class="userinfo_01">
                  <img src="//12461779.s61i.faiusr.com/4/AD0I0834BRAEGAAg1KacwwUowJKS1wYwDjgS.png"/>
                  <span>公司地址：XXX省XXX市XXX县XXX路XXX号</span>
                </div>
              </div>
            </div>
            <div class="mymap">
              <mapDrag @drag="dragMap" lat="22.524491" lng="113.942695"></mapDrag>
            </div>
          </div>
          <div class="contactUsMain_r">
            <form>
              <table id="tb">
                <tr>
                  <td class="col1">您的姓名</td>
                  <td><input type="text" style="width: 300px;"></td>
                </tr>
                <tr>
                  <td class="col1">您的性别</td>
                  <td>
                    <input class="myforms-3-2" type="radio" checked ="checked" name="2" value="sex1">男
                    <input class="myforms-3-2" type="radio"  name="2" value="sex2">女
                  </td>
                </tr>
                <tr>
                  <td class="col1">联系电话</td>
                  <td><input type="text" style="width: 300px;"></td>
                </tr>
                <tr>
                  <td class="col1">QQ号码</td>
                  <td><input type="text" style="width: 300px;"></td>
                </tr>
                <tr>
                  <td class="col1">电子邮箱</td>
                  <td><input type="text" style="width: 300px;"></td>
                </tr>
                <tr>
                  <td class="col1">了解途径</td>
                  <td>
                    <select class="choose">
                      <option value="请选择">请选择</option>
                      <option value="网上广告">网上广告</option>
                      <option value="街头传单">街头传单</option>
                      <option value="朋友介绍">朋友介绍</option>
                    </select>
                  </td>
                </tr>
              </table>
            </form>
            <div class="submit">提交</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import mapDrag from '../components/mapDrag'

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
    mapDrag
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
  .aboutUs{
    width:100%;
    height: 650px;
    .top{
      width: 100%;
      height: 100px;
      text-align: center;
      .title{
        color: #000;
        font-weight: 600;
        font-size: 18px;
        padding: 30px 0 10px 0;
      }
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
        height: 200px;
        .ewm{
          width: 150px;
          height: 200px;
          float: left;
          text-align: center;
          .imgSize{
            width: 150px;
            height: 150px;
          }
          p{
            height: 24px;
            line-height: 24px;
            font-size: 14px;
          }
        }
        .userinfo{
          width: 320px;
          height: 200px;
          float: right;
          .userinfo_01{
            width: 100%;
            height: 34px;
            line-height:34px;
            font-size: 14px;
            color: #666;
          }
        }
      }
      .mymap{
        width: 500px;
        height: 250px;
        margin-top: 15px;
      }
      .m-part .mapbox{ width: 600px; height:250px; margin-bottom: 20px; float: left; }
    }
    .contactUsMain_r{
      width: 600px;
      height: 500px;
      float: right;
    }
    tr {
      height: 68px;
      width: 200px;
      font-size: 14px;
    }
    .col1 {
      width: 90px;
      padding-left: 30px;
    }
    .myforms-3-2{
      width: 15px;
      height: 15px;
      border-radius: 3px;
      background: #555;
      padding-left: 5px;
      color: white;
      position: relative;
      top: 4px;
    }
    input {
      width: 350px;
      height:30px;
      border-radius: 3px;
      padding-left: 5px;
      color: white;
      border-radius: 3px;
      border: 1px solid #dadada;
    }

    #level span {
      float: left;
      width: 60px;
      height: 26px;
      border-right: 1px solid #ddd;
      background: white;
      text-align: center;
      line-height: 26px;
    }

    #level .default {
      background: gray;
    }

    .codes {
      width: 80px;
    }

    .regtd {
      height: 60px;
      padding-top: 10px;
    }
    #reg {
      background: green;
      border: 1px solid black;
      height: 40px;
      width: 160px;
      color: white;
      font-size: 22px;
      margin-left: 100px;
    }

    #checkbox {
      margin-left: 100px;
      width: 15px;
      height: 15px;
    }
    .choose{
      width: 308px;
      height: 30px;
      border: 1px solid #dadada;
      border-radius: 5px;
    }
    .submit{
      width: 250px;
      height: 45px;
      line-height: 45px;
      background:#3faaf4;
      margin-left: 30px;
      text-align: center;
      color: #fff;
      border-radius: 3px;
      margin-top: 15px;
    }
  }
</style>
