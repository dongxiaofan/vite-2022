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
          title: '例-2(无权限)',
          icon: 'icon-HRDCkehujiaofuzhongxin',
          access: 'aaa',
        },
        component: () => import('/src/views/demo/demo2.vue')
      },
      { 
        path: '/demo3',
        name: 'demo3',
        meta: {
          title: '例-3',
          icon: 'icon-HRDCkehuxiaoshouzhongxin',
          access: '_home',
        },
        component: () => import('/src/views/demo/demo1.vue')
      },
      { 
        path: '/demo4',
        name: 'demo4',
        meta: {
          title: '例-4',
          icon: 'icon-HRDCkehuxiaoshouzhongxin',
          access: '_home',
        },
        component: () => import('/src/views/demo/demo1.vue')
      },
      { 
        path: '/debounce',
        name: 'debounce',
        meta: {
          title: '防抖',
          icon: 'icon-HRDCkehuxiaoshouzhongxin',
        },
        component: () => import('/src/views/demo/debounce.vue')
      },
      { 
        path: '/throttle',
        name: 'throttle',
        meta: {
          title: '节流',
          icon: 'icon-HRDCkehuxiaoshouzhongxin',
        },
        component: () => import('/src/views/demo/throttle.vue')
      },
    ]
  }
]