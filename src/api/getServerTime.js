import axios from 'axios'
import {BASEURL} from './config'
export function getServerTime () {
  let url = BASEURL + 'common/sysDateTime'
  url += (url.indexOf('?') < 0 ? '?' : '&') 
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
