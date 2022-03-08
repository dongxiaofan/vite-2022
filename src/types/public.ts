export interface ResponseData<T = any> {
  code: number,
  message: string,
  data?: T
}

// 路由对象约束
export interface RouterObj {
  path: string,
  name: string,
  component: string,
  key: string,
  meta: string,
  redirect?: string,
  children?: []
}

// 路由数组约束
export type RouterTable = RouterObj[]

// 路由接口约束
export interface RouterData extends ResponseData {
  data: RouterTable
}