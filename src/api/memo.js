import {BASEURL01} from './config'
import axios from 'axios'
axios.defaults.headers.wardId  = localStorage.getItem('wardId')
export function getMemo () {
  let url = BASEURL01 + 'memos/get'
  return axios.get(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}