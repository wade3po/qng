import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, { //首页
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  }, { //详情
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Detail.vue')
  }, { //收藏
    path: '/collect',
    name: 'collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/Collect.vue')
  }, { //收藏
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "home" */ '../views/about/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
