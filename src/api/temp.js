import axios from 'axios'
import {param,getUrl} from './config'
export function getTemp (data) {
  return getUrl('port01').then((BASEURL)=>{
    let url = BASEURL+'newestTemperatures'
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return axios.get(url,{
      headers:{
        'inpatientAreaCode':'001'
      }
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}
export function getTempByBed (data) {
  return getUrl('port01').then((BASEURL)=>{
    let url = BASEURL+'temperatures'
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return axios.get(url,{
      headers:{
        'inpatientAreaCode':'001'
      }
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}