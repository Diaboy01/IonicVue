import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pages/mainpage'
  },
  {
    path: '/pages/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/pages/mainpage'
      },
      {
        path: 'mainpage',
        component: () => import('@/views/mainpage.vue')
      },
      {
        path: 'article/:title',
        component: () => import('@/views/detailpage.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
