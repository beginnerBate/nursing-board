import {Axios,getUrl} from './config'
export function datalist() {
  return getUrl('port03').then((BASEURL)=>{
    let url = BASEURL + 'patInfo/getPatInfos'
    return Axios.get(url).then((res)=>{
      return Promise.resolve(res.data)
    })
  })
}
// 病人详情
export function patInfo (patId) {
  return getUrl('port03').then((BASEURL)=>{
    let url = BASEURL + `patInfo/getPatInfoById/${patId}`
    return Axios.get(url).then((res)=>{
      return Promise.resolve(res.data)
    })    
  })
}
// 医嘱执行单
export function orders (patId) {
  return getUrl('port03').then((BASEURL)=>{
    let url = BASEURL + `orders/getOrdersByPatId/${patId}`
    return Axios.get(url).then((res)=>{
      return Promise.resolve(res.data)
    })    
  })
}