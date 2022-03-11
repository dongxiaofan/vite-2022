import { request } from '@/utils/request'

/**
 * @description 登录
 * @param {LoginParams} data
 * @returns
 */

export const login = (data:any) => {
  return request({
    url: '/api/account/login',
    method: 'post',
    data,
  })
}