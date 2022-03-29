import { request } from '@/utils/request'

/**
 * @description 获取列表
 * @param data
 * @returns
 */

export const getList = (data:any) => {
  return request({
    url: '/api/Customer/List',
    method: 'post',
    data,
  })
}