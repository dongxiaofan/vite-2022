export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('/src/views/errorPages/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('/src/views/errorPages/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('/src/views/errorPages/500.vue')
  }
]