/**
 * @file 实例化axios，并返回实例。 如果需要更换xhr库，在同级目录下的xhrMethods下重写即可
 * @author xiaoshuai11
 * @version 0.1.0
 * @requires axios
 * @module  api/xhrlib
 * @see {@link https://github.com/axios/axios}
 */
import axios from 'axios'
import {Message} from 'element-ui'
// request 注入器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// response 注入器
axios.interceptors.response.use(function (response) {
  if (response) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response.data)
  }
}, function (error) {
  Message.error('接口请求错误', error)
  return Promise.reject(error)
})

axios.create({
  baseURL: '/',
  timeout: 0,
  headers: {}
})

export default axios
