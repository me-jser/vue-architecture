/**
 * @file 导入xhr实例(目前是axiox),重写要用到的http methods. 分模块降低耦合以应对更换xhr库的情况
 * @author xiaoshuai11
 * @version 0.1.0
 * @requires xhrInstance
 * @module api/httpMethods
 */
import axios from '../api/xhrInstance'

export function exportApis () {
  return {
    /**
     * @name xhr get 请求封装
     * @function
     * @param {string} url 请求地址
     * @param {object} params 请求参数
     * @param {object} config 其他axios配置，例如header, timeout. etc
     * @example apis.get('/test/posts', {
     *   data: 123
     * }, {
     *  timeout: 1000,
     *  headers: {
     *   'X-Requested-With': '123'
     *  },
     *   responseType: 'blob'
     *  })
     */
    get (url, params, config) {
      return axios({
        method: 'GET',
        url: url,
        params: {
          params
        },
        ...config
      })
    },
    /**
     * @name xhr post 请求封装,详情参考get.
     * @function
     */
    post (url, params, config) {
      return axios({
        method: 'POST',
        url: url,
        data: {
          params
        },
        ...config
      })
    },
    /**
     * @name xhr put 请求封装,详情参考get.
     * @function
     */
    put (url, params, config) {
      return axios({
        method: 'PUT',
        url: url,
        data: {
          params
        },
        ...config
      })
    },
    /**
     * @name xhr delete 请求封装,详情参考get.
     * @function
     */
    delete (url, params, config) {
      return axios({
        method: 'DELETE',
        url: url,
        data: {
          params
        },
        ...config
      })
    },
    /**
     * @name xhr patch 请求封装,详情参考get.
     * @function
     */
    patch (url, params, config) {
      return axios({
        method: 'PATCH',
        url: url,
        data: {
          params
        },
        ...config
      })
    }
  }
}
