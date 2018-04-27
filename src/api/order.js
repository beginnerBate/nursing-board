import {Axios,BASEURL01,param} from './config'
// 0.获取所有病区 {time:string,types:(0:护士 1:医生)}
export function getOrder (data) {
  let url = BASEURL01 + 'schedulings'
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return Axios.get(url).then((res)=>{
    return Promise.resolve(res.data)
  })
} 