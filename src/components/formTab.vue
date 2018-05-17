<template>
  <div>
    <div class="allTap">
      <div class="about_us">
        <h4>新闻资讯</h4>
        <p><span>————  </span><span style="font-size: 12px;">CORPORATE CULTURE</span><span>————  </span></p>
      </div>
      <div class="formTab">
        <div style="width: 900px;height: auto;float: left;">
          <div class="titleTab">
            <span @mouseover="overNewsBtn(0)" :class="{'select': isSelect}" class="newsButton">新闻动态</span>
            <span @mouseover="overNewsBtn(1)" :class="{'select': !isSelect}" class="industryButton">行业动态</span>
          </div>
          <div style="width: 1200px;margin: 0 auto;">
            <div class="formMiddle">
              <ul v-show="isSelect">
                <li v-for="(item, index) in news" :key="index" @mouseover="newsListMouse(index)" @mouseout="newsListMout"
                    :class="{'selecList':index===selectIndex}" @click="clickList(item)">
                  <span class="text" v-text="item.text"></span>
                  <span class="date" v-text="item.date"></span>
                </li>
              </ul>
              <ul v-show="!isSelect">
                <li v-for="(item, index) in industryList" :key="index" @mouseover="newsListMouse(index)" @mouseout="newsListMout"
                    :class="{'selecList':index===selectIndex}" @click="clickList(item)">
                  <span class="text" v-text="item.text"></span>
                  <span class="date" v-text="item.date"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style="width: 300px;height: 300px;background: #000;float: right;"><img src="../assets/img/1.png" style="width: 300px;height: 300px;" /></div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   name: "formTab",
   props: {
     news: {
       type: Array,
       default: () => {
         return [
           {
             text: '让企业创新激发市场活力',
             date: '2017-03-23'
           },
           {
             text: '让企业创新激发市场活力',
             date: '2017-03-23'
           },
           {
             text: '让企业创新激发市场活力',
             date: '2017-03-23'
           }
         ]
       }
     },
     industryList: {
       type: Array,
       default: () => {
         return [
           {
             text: '新安卓手机病毒出现：能自动读信息 收发短信',
             date: '2017-03-23'
           },
           {
             text: '新安卓手机病毒出现：能自动读信息 收发短信',
             date: '2017-03-23'
           },
           {
             text: '新安卓手机病毒出现：能自动读信息 收发短信',
             date: '2017-03-23'
           }
         ]
       }
     }
   },
   data () {
      return {
        isSelect: true,
        selectIndex: -1
      }
   },
   methods: {
     overNewsBtn (type) {
       if (type) {
         this.isSelect = false;
       } else {
         this.isSelect = true;
       }
     },
     newsListMouse (index) {
       this.selectIndex = index;
     },
     newsListMout () {
       this.selectIndex = -1;
     },
     clickList (item) {
       this.$emit('clickList', item)
     }
   }
}
</script>

<style lang="less" scoped>
  .allTap{
    width: 100%;
    min-height: 450px;
    background: #eee;
  }
  .about_us{
    padding-top: 50px;
    h4{
      font-weight: 600;
      text-align: center;
      font-size: 18px;
    }
    p{
      font-size: 14px;
      color: #888;
      text-align: center;
    }
  }
.formTab {
  width: 1200px;
  margin: 0 auto;
  height: auto;
  background: #eee;
  overflow: hidden;
  .titleTab {
    margin-bottom: 30px;
    width: 900px;
    /*margin: 0 auto;*/
    height: 60px;
    line-height: 60px;
    .newsButton, .industryButton {
      border-radius: 50px;
      margin: 10px 40px;
      padding: 12px 24px;
      height: 36px;
      line-height: 36px;
      font-size: 16px;
      color: #666;
      cursor: pointer;
    }
    .select {
      transition: background .5s;
      background: #009fe9;
      color: #fff;
    }
  }
  .formMiddle {
    width: 900px;
    float: left;
    /*margin: 0 auto;*/
    ul {
      list-style: none;
      li {
        position: relative;
        padding: 3px 5px;
        height: 50px;
        font-size: 14px;
        border-bottom: 1px solid #dbdbdb;
        line-height: 50px;
        cursor: pointer;
        .text {
          position: absolute;
          left: 0;
        }
        .date {
          position: absolute;
          right: 10px;
        }
      }
      .selecList {
        color: #1c9fea;
      }
    }
  }
}
</style>
