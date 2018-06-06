// TODO: 1. 实现常见http methods
import axios from 'axios'

// request 注入器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// response 注入器
axios.interceptors.response.use(function (response) {
  debugger
  if (response) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response.data)
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
const instance = axios.create({
  baseURL: '/',
  timeout: 0,
  headers: {}
})
instance.get((url, data) => {
  return axios.get(url)
    .then(res => {
      Promise.resolve(res)
    })
    .catch(err => {
      Promise.reject(err)
    })
})

export default instance
