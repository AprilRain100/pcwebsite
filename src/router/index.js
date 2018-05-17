import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 路由懒加载
const aboutUs = resolve => {
  import('@/page/aboutUs').then(module => {
    resolve(module)
  })
};
const contactUs = resolve => {
  import('@/page/contactUs').then(module => {
    resolve(module)
  })
};
const home = resolve => {
  import('@/page/home').then(module => {
    resolve(module)
  })
};
const newsCenter = resolve => {
  import('@/page/newsCenter').then(module => {
    resolve(module)
  })
};
const employers = resolve => {
  import('@/page/employers').then(module => {
    resolve(module)
  })
};
const onlineMessage = resolve => {
  import('@/page/onlineMessage').then(module => {
    resolve(module)
  })
};
export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
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
