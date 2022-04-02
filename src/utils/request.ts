import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { notification, message  } from 'ant-design-vue'

export interface RequestOptions {
  /** 当前接口权限, 不需要鉴权的接口请忽略， 格式：sys:user:add */
  permCode?: string;
  /** 是否直接获取data，而忽略message等 */
  isGetDataDirectly?: boolean;
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
  /** 是否mock数据请求 */
  isMock?: boolean;
}

const UNKNOWN_ERROR = '未知错误，请重试';

/** 真实请求的路径前缀 */
const baseApiUrl = import.meta.env.VITE_BASE_API;

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const errorHandler = (error: AxiosError) => {
  console.log('❌ error: ', error)
  const { response } = error;
  if (response && response.status) {
    const { status } = response;
    console.log('status: ', status)
  } else if (!response) {
    message.error({
      content: '您的网络发生异常，无法连接服务器',
    });
  }
  return response
}

/**
 * @desc: 请求发送前拦截
 * @param { Object } config 配置参数
 */
axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    console.log('🌳 config: ', config)
    config.headers['Authorization'] = 'Bearer ' + Cookies.get('token') || ''
    return config
  }, errorHandler
)


/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = async <T = any>(
  config: AxiosRequestConfig,
  options: RequestOptions = {},
): Promise<T> => {
  try {
    const { successMsg, errorMsg, permCode, isMock, isGetDataDirectly = true } = options;
    const res = await axios.request(config);
    successMsg && message.success(successMsg);
    errorMsg && message.error(errorMsg);

    // 如果当前是需要鉴权的接口 并且没有权限的话 则终止请求发起
    // if (permCode && !useUserStore().perms.includes(permCode)) {
    //   return message.error('你没有访问该接口的权限，请联系管理员！');
    // }
    // const fullUrl = `${baseApiUrl + config.url}`;
    // config.url = fullUrl.replace(/(?<!:)\/{2,}/g, '/');

    successMsg && message.success(successMsg);
    errorMsg && message.error(errorMsg);

    return isGetDataDirectly ? res.data : res;
  } catch (error: any) {
    message.error(error.message);
    return Promise.reject(error);
  }
};

// export default request