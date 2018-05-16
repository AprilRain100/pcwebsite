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
.head{
  width: 1200px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.head a{
  padding: 0 20px;
}
</style>
