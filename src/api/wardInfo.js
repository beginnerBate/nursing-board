import {BASEURL01} from './config'
import axios from 'axios'

export function getWard () {
  let url = BASEURL01 + 'wardInfo'
  return axios.get(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}