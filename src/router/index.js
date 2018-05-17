import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '@/page/aboutUs'
import contactUs from '@/page/contactUs'
import home from '@/page/home'
import newsCenter from '@/page/newsCenter'
import employers from '@/page/employers'
import onlineMessage from '@/page/onlineMessage'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/newsCenter',
      name: 'newsCenter',
      component: newsCenter
    },
    {
      path: '/employers',
      name: 'employers',
      component: employers
    },
    {
      path: '/onlineMessage',
      name: 'onlineMessage',
      component: onlineMessage
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
