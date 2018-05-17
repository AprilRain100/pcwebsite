<template>
  <div>
    <slideShow></slideShow>
    <div class="message">
      <div class="messageMain">
        <div class="messageTitle"><span>留言提交</span></div>
        <div class="report">
          <div class="said">发表您的留言：</div>
          <div class="introduce">
            <div class="inputInfo">
              <div style="height: 50px;" class="text">姓名：<input type="text" class="txt" /></div>
              <div style="height: 50px;" class="text">邮箱：<input type="text" class="txt" /></div>
              <div style="height: 50px;" class="text">电话：<input type="text" class="txt" /></div>
            </div>
            <div class="textareaInfo">
              <span style="position: relative;top: -50px;">内容：</span>
              <textarea name="text" placeholder="留言需审核后才会显示" cols=’50’ rows=’3’ maxlength="10000" style="width: 1082px;height: 100px; position: relative;left: -4px;"></textarea>
            </div>
            <div class="sendMessage">提交留言</div>
          </div>
        </div>
      </div>
    </div>
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
  .message{
    width: 100%;
    height: 400px;
    .messageMain{
      width: 1200px;
      height: 400px;
      margin: 0 auto;
      .messageTitle{
        width: 1200px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        span{
          display: block;
          width: 100px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: #fff;
         border-bottom: 1px solid #009fe9;
          color: #009fe9;
          box-sizing: border-box;
        }
      }
      .report{
        width: 1200px;
        height: 340px;
        .said{
          padding: 10px 0 10px 10px;
          color: #656565;
          font-size: 14px;
        }
        .introduce{
          width: 1160px;
          height: 250px;
          padding: 0 20px;
          .inputInfo{
            width: 1160px;
            height: 50px;
            line-height: 50px;
            margin-bottom: 20px;
            color: #656565;
            font-size: 14px;
            .text{
              width: 386.6666666px;
              float: left;
              .txt{
                width: 310px;
                height: 30px;
                line-height: 30px;
              }
            }
          }
          .textareaInfo{
            width: 1160px;
            height: 120px;
            color: #656565;
            font-size: 14px;
          }
          .sendMessage{
            width: 220px;
            height: 44px;
            background: #000;
            margin-left: 41px;
            background: #38a9f3;
            line-height: 44px;
            text-align: center;
            color: #fff;
          }
        }
      }

    }
  }
</style>
