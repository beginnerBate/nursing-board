// 今日值班
import {BASEURL02,param} from './config'
import axios from 'axios'
axios.defaults.headers.token  = localStorage.getItem('wardId')
// 1.信息查询（护士/医生）
// 职责标志：0-医生1-护士
export function getusers (nameFlag) {
  let url = BASEURL02 + `users/getUsers/${nameFlag}`
  return axios.get(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}

// 2.添加一条备忘录
export function addDuty (id,data) {
  let url = BASEURL02 + `users/addUsers/${id}`
  // url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return axios.put(url,data).then((res)=>{
    return Promise.resolve(res.data)
  })
}

// 3.更新一条备忘录
export function updateMemo (data,id) {
  let url = BASEURL01 + 'memos/update/' + id
  // url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return axios.put(url,data).then((res)=>{
    return Promise.resolve(res.data)
  })
}

//  4.删除一条备忘录
export function deleteduty (id) {
  let url = BASEURL02 + `users/deleteUser/${id}`
  // url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return axios.put(url).then((res)=>{
    return Promise.resolve(res.data)
  })
}