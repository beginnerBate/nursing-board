import axios from 'axios'
import {BASEURL} from './config'
export function getTemp (data) {
  let url = BASEURL+'newestTemperatures'
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return axios.get(url,{
    headers:{
      'inpatientAreaCode':'001'
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getTempByBed (data) {
  let url = BASEURL+'temperatures'
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return axios.get(url,{
    headers:{
      'inpatientAreaCode':'001'
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}