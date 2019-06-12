import axios from 'axios'
import {baseURL} from '@/config'

class HttpRequest {
  constructor (baseUrl = baseURL){
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig(){
    const config = {
      publicUrl : this.baseUrl,
      headers: {

      }
    }
    return config
  }
  interCeptors(instance){
    instance.interceptors.request.use(config => {
      return config
    },error => {
      return Promise.reject(error)
    }),
    instance.interceptors.response.use(res => {
      console.log(res)
      return res
    },error => {
      return Promise.reject(error)
    })
  }
  request (options){
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(),options)
    this.interCeptors(instance)
    return instance(options)
  }
}
export default HttpRequest
