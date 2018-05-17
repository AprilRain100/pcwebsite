<template>
  <div id="app">
    <div class="head">
      <span>Internet Design</span>
      <div id="menu" style="float: right;">
        <a :class="{'selec': index === selecIndex}" href="javascript:;" v-for="(item, index) in nav" v-text="item.text" @click="routerLink(item.path, index)"></a>
        <div class="menubg"></div>
      </div>
    </div>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nav: [
        {
          text: '首页',
          path: '/'
        },
        {
          text: '关于我们',
          path: '/aboutUs'
        },
        {
          text: '新闻资讯',
          path: '/newsCenter'
        },
        {
          text: '企业服务',
          path: '/employers'
        },
        {
          text: '联系我们',
          path: '/contactUs'
        },
        {
          text: '在线留言',
          path: '/onlineMessage'
        }
      ],
      selecIndex: 0
    }
  },
  methods: {
    routerLink (path, index) {
      this.$router.push(path);
      this.selecIndex = index;
      let bgWidth = document.querySelector(".menubg")
      let selfLeft = document.querySelectorAll("#menu a")[index].offsetLeft;
      bgWidth.style.left = path === '/' ? `${selfLeft}px` : `${selfLeft + 15}px`
    }
  },
  mounted() {
    //获取li
    let liwidth = document.querySelectorAll("#menu a")
    //背景
    let bgWidth = document.querySelector(".menubg")
    //设置背景的宽度
    bgWidth.style.width = liwidth[0].offsetWidth + 'px'
  },

}
</script>

<style lang="less">
  @import "assets/css/reset";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body{
  padding: 0;
  margin: 0;
}
.head{
  width: 1200px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.head a{
  position: relative;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  text-decoration: none;
  color: #000;
}
.head a:hover{
  color: #37a5e9;
}
.selec {
  color: #37a5e9!important;
}
  #menu {
    position: relative;
    .menubg {
      position: absolute;
      background: #009fe9;
      height: 2px;
      bottom: 25px;
      z-index: 1;
      transition: all .3s;
      left: 0
    }

  }

</style>
