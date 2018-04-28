import axios from 'axios'

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

const Axios = axios.create({
  headers:{
    token: localStorage.getItem('wardId')
  }
})

const BASEURL01 = 'http://192.168.0.113/intelligent-nurse-front-webservice/'
const BASEURL02= 'http://192.168.0.104/intelligent-nurse-front-webservice/'
// const BASEURL = 'http://10.0.0.104:90/mcim-webservice/'
function getUrl (port) {
  return axios.get('/static/config.json').then((res)=>{
    // console.log(res.data[port])
    return Promise.resolve(res.data[port])
  })
}
export {
  param,
  getUrl,
  Axios,
  BASEURL01,
  BASEURL02
}