<template>
    <div class="formTab">
      <div class="titleTab">
        <span @mouseover="overNewsBtn(0)" :class="{'select': isSelect}" class="newsButton">新闻动态</span>
        <span @mouseover="overNewsBtn(1)" :class="{'select': !isSelect}" class="industryButton">行业动态</span>
      </div>
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
.formTab {
  width: 100%;
  height: auto;
  margin-bottom: 100px;
  background: #eee;
  .titleTab {
    margin-bottom: 30px;
    width: 100%;
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
    ul {
      list-style: none;
      li {
        position: relative;
        padding: 3px 5px;
        height: 40px;
        font-size: 14px;
        border-bottom: 1px solid #dbdbdb;
        line-height: 40px;
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
