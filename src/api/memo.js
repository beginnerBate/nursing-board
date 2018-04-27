import {BASEURL01,param} from './config'
import axios from 'axios'
// axios.defaults.headers.token  = localStorage.getItem('wardId')
const Axios = axios.create({
  headers:{
    token: localStorage.getItem('wardId')
  }
})
// 1.获取所有备忘录
export function getMemo () {
  let url = BASEURL01 + 'memos/get'
  return Axios.get(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}

// 2.添加一条备忘录
export function addMemo (data) {
  let url = BASEURL01 + 'memos/add'
  // url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return Axios.post(url,data).then((res)=>{
    return Promise.resolve(res.data)
  })
}

// 3.更新一条备忘录
export function updateMemo (data,id) {
  let url = BASEURL01 + 'memos/update/' + id
  // url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return Axios.put(url,data).then((res)=>{
    return Promise.resolve(res.data)
  })
}

//  4.删除一条备忘录
export function deleteMemo (id) {
  let url = BASEURL01 + 'memos/delete/' + id
  // url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return Axios.delete(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}