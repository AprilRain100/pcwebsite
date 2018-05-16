<template>
  <div id="app">
        <router-link :to="'/'">首页</router-link>
                 <router-link :to="'/aboutUs'">关于我们</router-link>
        <router-link :to="'/contactUs'">联系我们</router-link>
        <router-link :to="'/newsCenter'">新闻资讯</router-link>
        <router-link :to="'/employers'">企业服务</router-link>
        <router-link :to="'/onlineMessage'">在线留言</router-link>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
