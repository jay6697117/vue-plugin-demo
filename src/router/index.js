import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/qrCode',
    name: 'qrCode',
    component: () => import('../views/qrCode.vue'),
    meta: { title: '二维码' }
  },
  {
    path: '/echart',
    name: 'echart',
    component: () => import('../views/echart.vue'),
    meta: { title: 'echart' }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map.vue'),
    meta: { title: '高德地图' }
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/share.vue'),
    meta: { title: '分享组件' }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
