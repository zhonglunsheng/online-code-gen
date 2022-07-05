import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    console.log(error.response)
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  return config
}, err)

/**
 * response interceptor
 * 所有请求统一返回
 */
service.interceptors.response.use((response) => {
  if (response.request.responseType === 'blob') {
    return response
  }
  return response.data
}, err)


export default axios
