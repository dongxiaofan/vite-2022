import { menuRouter } from '@/router/menu.router'
import { RouterTable } from '@/types/public'
import { ActionContext } from 'vuex'
import Cookies from 'js-cookie'
import storage from 'store'
import { LoginFrom } from '@/types/login'
import { login } from '@/api/login.api.ts'
import { message } from 'ant-design-vue'

// 处理用户登录、登出、个人信息、权限路由

export type UserState = {
  token: string,
  name: string,
  avatar: string,
  userInfo: object,
  menuCodes: string[],
}


const state = {
  // 标识
  token: Cookies.get('token') || '',
  // 昵称
  name: storage.get('userName') || '',
  // 头像
  avatar: '',
  // 用户信息
  userInfo: {},
  // 角色(鉴权)
  menuCodes: storage.get("userInfo")?.menus.map((item: any) => item.code),
}

const user = {
  namespaced: true,
  state,

  getters: {
    getMenuCodes: (state:any) => {
      return state.menuCodes
    }
  },
  
  mutations: {
    // 设置token
    setToken (state: UserState, token: string) {
      state.token = token
      Cookies.set('token', token, { expires: 7 })
    },

    // 设置用户名
    setName (state: UserState, name: string) {
      state.name = name
      storage.set('userName', name)
    },

    // 设置头像
    setAvatar (state: UserState, avatar: string) {
      state.avatar = avatar
      storage.set('userAvatar', avatar)
    },

    // 设置用户信息
    setUserInfo (state: UserState, obj: any) {
      state.userInfo = obj
    },

    setMenuCodes (state: UserState, arr: any) {
      state.menuCodes = arr.map((item: any) => item.code)
    },

    // 用户退出登陆
    logout (state: UserState) {
      Cookies.remove('token');
      storage.clearAll()
      // 为了重新加载用户信息及路由组
      state.name = ''
      state.avatar = ''
      state.menuCodes = []
    }
  },

  actions: {
    // 登录
    login (context: ActionContext<UserState, UserState>, params: LoginFrom) {
      return new Promise((resolve, reject) => {
        login(params).then((resp:any) => {
          const data:any = resp.data
          storage.set("userInfo", data)
          context.commit('setName', data.name)
          context.commit('setToken', data.access_token)
          context.commit('setMenuCodes', data.menus || [])
          resolve(data)
        }).catch((err:any) => {
          reject(err)
        })
      })
    }
  }
}

export default user