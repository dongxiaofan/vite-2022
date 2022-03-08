import Layout from '@/layout'

export const menuRouter = [
  { 
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true,
      icon: 'icon-zhanghaodenglu'
    },
    component: () => import('/src/views/login/login.vue')
  },
  { 
    path: '/demo',
    name: 'demo',
    meta: {
      title: '范例',
      keepAlive: true,
      hideInMenu: true,
      icon: 'icon-yidu'
    },
    component: Layout,
    children: [
      { 
        path: '/demo1',
        name: 'demo1',
        meta: {
          title: '例-1',
          icon: 'icon-HRDCkehuxiaoshouzhongxin'
        },
        component: () => import('/src/views/demo/demo1.vue')
      },
      { 
        path: '/demo2',
        name: 'demo2',
        meta: {
          title: '例-2',
          icon: 'icon-HRDCkehujiaofuzhongxin'
        },
        component: () => import('/src/views/demo/demo2.vue')
      }
    ]
  }
]