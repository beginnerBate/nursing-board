import axios from 'axios'
import {param,getUrl} from './config'
export function getTrans (data) {
  return getUrl('port01').then((BASEURL)=>{
    let url = BASEURL+'infusionMonitors'
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