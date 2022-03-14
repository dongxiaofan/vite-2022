import RouteView from '@/layout/routerView/index.vue'

export const menuRouter = [
  {
    path: "/home",
    name: "home",
    redirect: "",
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '工作台',
      icon: "icon-gongzuotai",
      access: '_home',
    }
  },
  { 
    path: '/demo',
    name: 'demo',
    meta: {
      title: '范例',
      keepAlive: true,
      hideInMenu: true,
      icon: 'icon-yidu',
      access: '_home',
    },
    component: RouteView,
    children: [
      { 
        path: '/demo1',
        name: 'demo1',
        meta: {
          title: '例-1',
          icon: 'icon-HRDCkehuxiaoshouzhongxin',
          access: '_home',
        },
        component: () => import('/src/views/demo/demo1.vue')
      },
      { 
        path: '/demo2',
        name: 'demo2',
        meta: {
          title: '例-2',
          icon: 'icon-HRDCkehujiaofuzhongxin',
          access: 'aaa',
        },
        component: () => import('/src/views/demo/demo2.vue')
      }
    ]
  }
]