import axios from 'axios'
import {getUrl} from './config'
export function getServerTime () {
  return getUrl('port01').then((BASEURL)=>{
    let url = BASEURL + 'common/sysDateTime'
    url += (url.indexOf('?') < 0 ? '?' : '&') 
    return axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}
export function getTimes () {
  return axios.get('./static/config.json').then((res)=>{
    let mytime = res.data.startTime
    if (mytime && mytime.length>0){
      return Promise.resolve(mytime)
    }else {
      return getUrl('port01').then((BASEURL)=>{
        let url = BASEURL + 'common/sysDateTime'
        url += (url.indexOf('?') < 0 ? '?' : '&') 
        return axios.get(url).then((res) => {
          return Promise.resolve(res.data)
        })
      }) 
    }
  })
}
