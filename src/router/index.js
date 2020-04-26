import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/qrCode',
    component: () => import('../views/qrCode.vue'),
    meta: { title: '二维码' }
  },
  {
    path: '/echart',
    component: () => import('../views/echart.vue'),
    meta: { title: 'echart' }
  },
  {
    path: '/map',
    component: () => import('../views/map.vue'),
    meta: { title: '高德地图' }
  },
  {
    path: '/share',
    component: () => import('../views/share.vue'),
    meta: { title: '分享组件' }
  },
  {
    path: '/pdf',
    component: () => import('../views/pdf.vue'),
    meta: { title: 'pdf预览' }
  },
  {
    path: '/pdf1',
    component: () => import('../views/pdf1.vue'),
    meta: { title: 'pdf预览' }
  },
  {
    path: '/upload',
    component: () => import('../views/upload.vue'),
    meta: { title: '图片上传预览' }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
