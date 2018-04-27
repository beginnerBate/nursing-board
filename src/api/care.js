import axios from 'axios'
// import {BASEURL} from './config'
// export function getTrans (data) {
//   // let url = BASEURL+'infusionMonitors'
//   url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
//   return axios.get(url).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }
const Axios = axios.create({
  headers:{
    token: localStorage.getItem('wardId')
  }
})
export function datalist() {
  return Axios.get('static/ajax.json').then((res)=>{
    return Promise.resolve(res.data)
  })
}