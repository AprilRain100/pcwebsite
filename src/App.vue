<template>
  <div id="app">
    <div class="head">
      <span>Internet Design</span>
      <div style="float: right;">
        <router-link :to="'/'">首页</router-link>
        <router-link :to="'/aboutUs'">关于我们</router-link>
        <router-link :to="'/newsCenter'">新闻资讯</router-link>
        <router-link :to="'/employers'">企业服务</router-link>
        <router-link :to="'/contactUs'">联系我们</router-link>
        <router-link :to="'/onlineMessage'">在线留言</router-link>
      </div>
    </div>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  text-decoration: none;
  color: #000;
}
/*.head a:hover{*/
  /*color: #37a5e9;*/
/*}*/
/*.head a.router-link-active{*/
  /*color:#37a5e9;*/
  /*border-bottom: 2px solid #009fe9;*/
/*}*/
</style>
